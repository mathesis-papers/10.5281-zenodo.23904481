/* Deterministic scenes for the installed book-film engine. */
'use strict';
function heading(en, zh) {
  txt(en, 960, 210, {size:44, fam:F.disp, w:700, align:'center', c:C.white});
  txt(zh, 960, 260, {size:31, fam:F.zh, align:'center', c:C.dim});
}
function arrow(x1,y1,x2,y2,col,a=1) {
  ctx.save(); ctx.globalAlpha=a; ctx.strokeStyle=col; ctx.fillStyle=col; ctx.lineWidth=4;
  ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
  const t=Math.atan2(y2-y1,x2-x1),r=16;
  ctx.beginPath();ctx.moveTo(x2,y2);ctx.lineTo(x2-r*Math.cos(t-0.45),y2-r*Math.sin(t-0.45));
  ctx.lineTo(x2-r*Math.cos(t+0.45),y2-r*Math.sin(t+0.45));ctx.closePath();ctx.fill();ctx.restore();
}
function loop(x,y,col,a=1) {
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=4;
  ctx.beginPath();ctx.arc(x,y-65,48,0.5,2*Math.PI+0.05);ctx.stroke();ctx.restore();
  arrow(x+46,y-67,x+42,y-45,col,a);
}
function path(n,x,y,step,p=1,labels=false,focus=-1) {
  for(let i=0;i<n-1;i++) {
    const a=clamp(p*(2*n-1)-2*i),b=clamp(p*(2*n-1)-2*i-1);
    const col=focus===i+1?C.now:C.cyan;
    arrow(x+i*step+32,y-18,x+(i+1)*step-32,y-18,col,a);
    arrow(x+(i+1)*step-32,y+18,x+i*step+32,y+18,col,b);
    if(labels)txt(['y','z','w'][i],x+(i+0.5)*step,y-46,{size:34,fam:F.math,c:col,align:'center'});
  }
  loop(x,y,focus===0?C.now:C.cyan,clamp(p*(2*n-1)-(2*n-2)));
  if(labels)txt('x',x-82,y-100,{size:34,fam:F.math,c:focus===0?C.now:C.cyan});
  for(let i=0;i<n;i++){
    ctx.save();ctx.strokeStyle=C.white;ctx.fillStyle=C.bg;ctx.lineWidth=3;
    ctx.beginPath();ctx.arc(x+i*step,y,28,0,2*Math.PI);ctx.fill();ctx.stroke();ctx.restore();
    txt(String(i+1),x+i*step,y+11,{size:29,fam:F.math,align:'center'});
  }
}
function matrix(entries,x,y,cell=72,col=C.white) {
  const n=entries.length,w=n*cell,h=n*cell;
  ctx.save();ctx.strokeStyle=col;ctx.lineWidth=3;ctx.beginPath();
  ctx.moveTo(x+10,y);ctx.lineTo(x,y);ctx.lineTo(x,y+h);ctx.lineTo(x+10,y+h);
  ctx.moveTo(x+w-10,y);ctx.lineTo(x+w,y);ctx.lineTo(x+w,y+h);ctx.lineTo(x+w-10,y+h);ctx.stroke();ctx.restore();
  for(let i=0;i<n;i++)for(let j=0;j<n;j++)txt(entries[i][j],x+(j+0.5)*cell,y+(i+0.65)*cell,{size:36,fam:F.math,align:'center',c:entries[i][j]==='0'?C.dim:col});
}
SCENES.question = S => {
  heading('How few arcs guarantee rigidity?', '最少多少条弧，保证所有权重都有效？');
  path(4,420,490,350,clamp(S.u/4));
  panel(440,650,1040,150,1,C.cyan,'FOUR VERTICES');
  txt('6 arrows + 1 loop = 7 arcs',960,718,{size:40,fam:F.disp,align:'center'});
  txt('2n − 1',960,780,{size:46,fam:F.math,align:'center',a:at(S,2,0.6),c:C.cyan});
};
SCENES.weights = S => {
  badgeQ(S,[[0,null,'computed']]);
  heading('One weighting is not every weighting', '允许：存在一种；要求：每种都好');
  panel(200,320,680,460,1,C.cyan,'DISTINCT LOOP WEIGHTS');
  panel(1040,320,680,460,1,C.mag,'EQUAL LOOP WEIGHTS');
  matrix([['1','0'],['0','2']],410,370,92);
  matrix([['1','0'],['0','1']],1250,370,92);
  txt('Off-diagonal entries must vanish',540,655,{size:28,fam:F.math,align:'center'});
  txt('Only F = 0 survives',540,725,{size:32,fam:F.disp,align:'center',c:C.cyan});
  const a=at(S,1,0.7);matrix([['0','1'],['0','0']],1250,590,65,C.mag);
  txt('F ≠ 0 survives',1380,765,{size:32,fam:F.disp,align:'center',c:C.mag,a});
};
SCENES.flow = S => {
  badgeQ(S,[[0,null,'argued']]);
  heading('Commutation becomes conservation', '可交换，变成每个顶点的流入等于流出');
  panel(180,330,680,450,1,C.cyan,'RECORD EACH ARC');
  txt('i',320,490,{size:48,fam:F.math});txt('j',690,490,{size:48,fam:F.math});
  arrow(365,475,655,475,C.cyan);
  txt('zᵢⱼ = aᵢⱼ fⱼᵢ',520,600,{size:48,fam:F.math,align:'center'});
  const p=Q(S,0,'record a product');
  if(p>0){const t=(S.u*0.16)%1;dot(365+290*t,475,11,'c',1);}
  panel(980,330,760,450,1,C.argued,'AT EVERY VERTEX v');
  txt('incoming = (FA)ᵥᵥ',1360,440,{size:40,fam:F.math,align:'center'});
  txt('outgoing = (AF)ᵥᵥ',1360,525,{size:40,fam:F.math,align:'center',a:at(S,1,0.6)});
  txt('all records zero ⇒ F = 0',1360,675,{size:36,fam:F.math,align:'center',a:at(S,2,0.6),c:C.cyan});
  txt('Signed flows · 有符号的代数流',960,820,{size:30,fam:F.zh,align:'center',c:C.dim});
};
SCENES.count = S => {
  badgeQ(S,[[0,null,'argued']]);
  heading('Count the independent choices', '数清独立选择，得到弧数下界');
  const focus=Math.min(2,Math.floor(S.u/3)%3);
  panel(150,320,760,480,1,C.cyan,'THREE FREE NUMBERS');
  path(3,285,530,245,1,true,focus);
  txt('5 − 3 + 1 = 3',530,720,{size:47,fam:F.math,align:'center'});
  panel(1010,320,760,480,1,C.argued,'CONNECTED SUPPORT');
  txt('balanced flows: m − n + 1',1390,440,{size:35,fam:F.math,align:'center',a:at(S,1,0.6)});
  txt('commuting matrices: ≥ n',1390,535,{size:35,fam:F.math,align:'center',a:at(S,2,0.6)});
  txt('n ≤ m − n + 1',1390,640,{size:45,fam:F.math,align:'center',a:at(S,2,0.6)});
  txt('m ≥ 2n − 1',1390,740,{size:49,fam:F.math,align:'center',c:C.cyan,a:at(S,2,1.0,2)});
};
SCENES.connect = S => {
  badgeQ(S,[[0,null,'argued']]);
  heading('Why requiring forces connectivity', '用一种坏填法，排除不连通的要求支撑');
  panel(200,330,600,230,1,C.cyan,'GROUP C');
  panel(1120,330,600,230,1,C.cyan,'GROUP D');
  txt('Cu = u',500,465,{size:58,fam:F.math,align:'center'});
  txt('vᵀD = vᵀ',1420,465,{size:58,fam:F.math,align:'center'});
  arrow(820,450,1100,450,C.mag,at(S,1,0.6));
  txt('uvᵀ',960,410,{size:45,fam:F.math,align:'center',c:C.mag,a:at(S,1,0.6)});
  panel(470,610,980,205,1,C.argued,'CROSS-GROUP OBSTRUCTION');
  txt('AF = FA,   F ≠ 0',960,700,{size:46,fam:F.math,align:'center'});
  txt('No cross arcs ⇒ all forced zeros hold',960,775,{size:33,fam:F.disp,align:'center',a:at(S,2,0.6)});
};
SCENES.sharp = S => {
  badgeQ(S,[[0,null,'argued']]);
  heading('The endpoint loop finishes the job', '端点自环，消去最后的障碍');
  panel(150,320,760,480,1,C.cyan,'PRIOR ENDPOINT CONSTRUCTION');
  path(4,260,485,180);
  txt('Koljančić–Oblak',530,640,{size:35,fam:F.disp,align:'center',c:C.dim});
  txt('2(n − 1) + 1 = 2n − 1',530,730,{size:39,fam:F.math,align:'center'});
  panel(1010,320,760,480,1,C.argued,'COMMUTING MATRIX F');
  const odd=at(S,1,0.8)>0.1,first=at(S,1,0.8,4)>0.1;
  const done=Q(S,2,'kills that basis')>0.1;
  const rows=Array.from({length:4},(_,i)=>Array.from({length:4},(_,j)=>
    done||(i===0&&j===0)||Math.abs(i-j)===1||(odd&&Math.abs(i-j)%2===1)||(first&&j===0)?'0':'?'));
  matrix(rows,1230,365,65);
  txt('Fe₁ = 0',1390,690,{size:43,fam:F.math,align:'center',c:C.cyan,a:at(S,1,0.8,4)});
  txt('e₁, Ae₁, …, Aⁿ⁻¹e₁: a basis',1390,735,{size:30,fam:F.math,align:'center',a:at(S,2,0.8)});
  txt('F(Aᵏe₁) = AᵏFe₁ = 0',1390,790,{size:34,fam:F.math,align:'center',a:at(S,2,0.8)});
};
SCENES.answer = S => {
  badgeQ(S,[[0,null,'lean']]);
  heading('The minimum is exactly 2n − 1', '每个正整数 n，都恰好是 2n−1 条弧');
  path(4,420,465,350);
  panel(430,590,1060,215,1,C.lean,'FOR EVERY n ≥ 1');
  txt('requires nSSP  ⇒  m ≥ 2n − 1',960,665,{size:44,fam:F.math,align:'center'});
  txt('endpoint-looped path attains equality',960,740,{size:37,fam:F.disp,align:'center'});
  txt('Haobo Ma · Wenlin Zhang · version 3',960,315,{size:26,fam:F.disp,align:'center',c:C.dim});
};
FILM.poster = () => {
  ctx.fillStyle=C.bg;ctx.fillRect(0,0,W,H);
  txt('从平衡流数出最少弧数',960,190,{size:68,fam:F.zh,w:700,align:'center'});
  txt('COUNTING ARCS THROUGH BALANCED FLOWS',960,280,{size:40,fam:F.disp,align:'center',c:C.cyan});
  path(4,420,510,350);
  panel(430,670,1060,180,1,C.cyan,'THE ALL-WEIGHT GUARANTEE');
  txt('minimum = 2n − 1',960,775,{size:70,fam:F.math,align:'center'});
  txt('Haobo Ma · Wenlin Zhang   |   Koljančić–Oblak Problem 1.8',960,960,{size:31,fam:F.disp,align:'center',c:C.dim});
};
