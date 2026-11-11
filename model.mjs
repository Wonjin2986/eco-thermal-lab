export function temperature(start, minutes, layers=0, lid=false){
  const rate=0.065/(1+0.65*layers)*(lid?0.72:1);
  return 22+(start-22)*Math.exp(-rate*minutes);
}
export function simulate(start,layers,lid){return Array.from({length:21},(_,t)=>({t,a:temperature(start,t),b:temperature(start,t,layers,lid)}));}
export function winner(points){const first=points[0],last=points.at(-1);const a=Math.abs(last.a-first.a),b=Math.abs(last.b-first.b);return {a,b,winner:Math.abs(a-b)<0.15?'same':a<b?'A':'B'};}
export function validateMeasurements(points){if(points.some(p=>!Number.isFinite(p.a)||!Number.isFinite(p.b)||p.a<0||p.a>100||p.b<0||p.b>100))return '모든 온도를 0~100°C 사이의 숫자로 입력해 주세요.';return '';}
