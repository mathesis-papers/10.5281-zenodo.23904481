import argparse
from fractions import Fraction
from itertools import product
import json
from pathlib import Path


PRIME = 1000003


def rational_rref(matrix, columns):
    reduced = [[Fraction(value) for value in row] for row in matrix]
    pivot_columns = []
    pivot_row = 0
    for column in range(columns):
        candidate = next(
            (row for row in range(pivot_row, len(reduced)) if reduced[row][column]),
            None,
        )
        if candidate is None:
            continue
        reduced[pivot_row], reduced[candidate] = reduced[candidate], reduced[pivot_row]
        divisor = reduced[pivot_row][column]
        reduced[pivot_row] = [value / divisor for value in reduced[pivot_row]]
        for row in range(len(reduced)):
            if row != pivot_row and reduced[row][column]:
                multiplier = reduced[row][column]
                reduced[row] = [
                    left - multiplier * right
                    for left, right in zip(reduced[row], reduced[pivot_row])
                ]
        pivot_columns.append(column)
        pivot_row += 1
        if pivot_row == len(reduced):
            break
    return reduced, pivot_columns


def rational_rank(matrix, columns):
    return len(rational_rref(matrix, columns)[1])


def nullspace(matrix, columns):
    reduced, pivots = rational_rref(matrix, columns)
    basis = []
    for free_column in range(columns):
        if free_column in pivots:
            continue
        vector = [Fraction(0) for column in range(columns)]
        vector[free_column] = Fraction(1)
        for row, pivot_column in enumerate(pivots):
            vector[pivot_column] = -reduced[row][free_column]
        basis.append(vector)
    return basis


def modular_rank(matrix, columns):
    reduced = [[value % PRIME for value in row] for row in matrix]
    pivot_row = 0
    for column in range(columns):
        candidate = next(
            (row for row in range(pivot_row, len(reduced)) if reduced[row][column]),
            None,
        )
        if candidate is None:
            continue
        reduced[pivot_row], reduced[candidate] = reduced[candidate], reduced[pivot_row]
        inverse = pow(reduced[pivot_row][column], -1, PRIME)
        reduced[pivot_row] = [value * inverse % PRIME for value in reduced[pivot_row]]
        for row in range(pivot_row + 1, len(reduced)):
            multiplier = reduced[row][column]
            if multiplier:
                reduced[row] = [
                    (left - multiplier * right) % PRIME
                    for left, right in zip(reduced[row], reduced[pivot_row])
                ]
        pivot_row += 1
        if pivot_row == len(reduced):
            break
    return pivot_row


def support(matrix):
    return [
        (row, column)
        for row in range(len(matrix))
        for column in range(len(matrix))
        if matrix[row][column]
    ]


def commutator_system(matrix, positions):
    order = len(matrix)
    return [
        [
            (matrix[row][first] if second == column else 0)
            - (matrix[second][column] if first == row else 0)
            for first, second in positions
        ]
        for row in range(order)
        for column in range(order)
    ]


def free_positions(matrix):
    return [
        (row, column)
        for row in range(len(matrix))
        for column in range(len(matrix))
        if not matrix[column][row]
    ]


def has_nssp_rational(matrix):
    positions = free_positions(matrix)
    return rational_rank(commutator_system(matrix, positions), len(positions)) == len(positions)


def certify_nssp_modular(matrix):
    positions = free_positions(matrix)
    rank = modular_rank(commutator_system(matrix, positions), len(positions))
    assert rank == len(positions)
    return rank


def components(order, arcs):
    parents = list(range(order))

    def find(vertex):
        while parents[vertex] != vertex:
            vertex = parents[vertex]
        return vertex

    for first, second in arcs:
        parents[find(first)] = find(second)
    return len({find(vertex) for vertex in range(order)})


def binary_support_checks():
    cases = 0
    nssp_cases = 0
    connected_sparse_cases = 0
    for order in range(1, 4):
        positions = list(product(range(order), repeat=2))
        for entries in product((0, 1), repeat=order * order):
            matrix = [list(entries[row * order:(row + 1) * order]) for row in range(order)]
            arcs = support(matrix)
            component_count = components(order, arcs)
            incidence = [
                [int(vertex == second) - int(vertex == first) for first, second in arcs]
                for vertex in range(order)
            ]
            assert rational_rank(incidence, len(arcs)) == order - component_count
            basis = nullspace(commutator_system(matrix, positions), order * order)
            assert len(basis) >= order
            readout_vectors = [
                [matrix[first][second] * vector[second * order + first] for first, second in arcs]
                for vector in basis
            ]
            for vector in readout_vectors:
                assert all(sum(left * right for left, right in zip(row, vector)) == 0 for row in incidence)
            nssp = has_nssp_rational(matrix)
            readout_matrix = [list(column) for column in zip(*readout_vectors)]
            assert (rational_rank(readout_matrix, len(basis)) == len(basis)) == nssp
            if nssp:
                nssp_cases += 1
                assert len(basis) <= len(arcs) - order + component_count
                assert len(arcs) >= 2 * order - component_count
            if component_count == 1 and len(arcs) <= 2 * order - 2:
                connected_sparse_cases += 1
                assert not nssp
            cases += 1
    return {
        'orders': [1, 2, 3],
        'matrices': cases,
        'nssp_matrices': nssp_cases,
        'connected_matrices_below_2n_minus_1': connected_sparse_cases,
        'checks': ['centralizer_dimension', 'incidence_rank', 'boundary_zero', 'readout_injectivity_equivalence', 'component_bound'],
        'arithmetic': 'exact rational',
    }


def endpoint_matrix(order, weights):
    matrix = [[0 for column in range(order)] for row in range(order)]
    matrix[0][0] = weights[0]
    for index in range(order - 1):
        matrix[index][index + 1] = weights[2 * index + 1]
        matrix[index + 1][index] = weights[2 * index + 2]
    assert len(support(matrix)) == 2 * order - 1
    return matrix


def endpoint_checks():
    exhaustive = 0
    for order in range(1, 4):
        for weights in product((-2, -1, 1, 2), repeat=2 * order - 1):
            certify_nssp_modular(endpoint_matrix(order, weights))
            exhaustive += 1
    order_four_signs = 0
    for weights in product((-1, 1), repeat=7):
        certify_nssp_modular(endpoint_matrix(4, weights))
        order_four_signs += 1
    additional = 0
    for order in range(4, 10):
        for seed in range(4):
            weights = [
                (-1 if (index + seed) % 2 else 1) * (1 + (3 * index + seed) % 7)
                for index in range(2 * order - 1)
            ]
            matrix = endpoint_matrix(order, weights)
            certify_nssp_modular(matrix)
            if order <= 6:
                assert has_nssp_rational(matrix)
            additional += 1
    return {
        'exhaustive_weight_set': [-2, -1, 1, 2],
        'exhaustive_orders': [1, 2, 3],
        'exhaustive_matrices': exhaustive,
        'order_4_all_sign_matrices': order_four_signs,
        'additional_orders': [4, 5, 6, 7, 8, 9],
        'additional_matrices': additional,
        'additional_rational_crosschecks': 12,
        'arithmetic': 'integer full-rank minors certified modulo 1000003; selected exact rational crosschecks',
    }


def explicit_controls():
    separated = [[1, 0], [0, 2]]
    repeated = [[1, 0], [0, 1]]
    assert has_nssp_rational(separated)
    assert not has_nssp_rational(repeated)
    matrix = [[1, 2], [0, 3]]
    witness = [[0, 1], [0, 0]]
    positions = list(product(range(2), repeat=2))
    flattened = [witness[row][column] for row, column in positions]
    calculated = [sum(left * right for left, right in zip(row, flattened)) for row in commutator_system(matrix, positions)]
    assert calculated == [0, -2, 0, 0]
    assert free_positions(matrix) == [(0, 1)]
    assert not all(matrix[row][column] * witness[row][column] == 0 for row, column in positions)
    assert all(matrix[row][column] * witness[column][row] == 0 for row, column in positions)
    return {'disconnected_separated_spectrum': True, 'repeated_spectrum_obstruction': True, 'transpose_convention': True}


def main():
    parser = argparse.ArgumentParser(description='Finite exact-arithmetic checks for the centralizer--incidence bound and the endpoint family.')
    parser.add_argument('--output', type=Path)
    arguments = parser.parse_args()
    assert all(PRIME % divisor for divisor in range(2, int(PRIME ** 0.5) + 1))
    result = {
        'schema_version': 1,
        'prime': PRIME,
        'binary_supports': binary_support_checks(),
        'endpoint_matrices': endpoint_checks(),
        'explicit_controls': explicit_controls(),
        'scope': 'Finite checks for the stated matrices; the universal results have written proofs in note.tex.',
        'result': 'all checks passed',
    }
    encoded = json.dumps(result, ensure_ascii=False, indent=2) + '\n'
    if arguments.output:
        arguments.output.write_text(encoded)
    print(encoded, end='')


if __name__ == '__main__':
    main()
