
const TEAL = '#1e4a52', YELLOW = '#f0b429', CREAM = '#f7f3ea', INK = '#12323a';

const logo = (c1 = YELLOW, c2 = TEAL) => `
<svg viewBox="0 0 32 32" width="72" height="72"><rect width="32" height="32" rx="7" fill="${c1}"/>
<path d="M6.5 15.2 16 7.5l9.5 7.7" fill="none" stroke="${c2}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 13.6V24.5h13V13.6" fill="none" stroke="${c2}" stroke-width="2.4" stroke-linejoin="round"/>
<path d="m12.6 18.6 2.6 2.6 4.6-4.9" fill="none" stroke="${c2}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const css = (w, h, dark, story) => `
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${w}px;height:${h}px}
body{font-family:'Inter',sans-serif;background:${dark ? TEAL : CREAM};color:${dark ? '#fff' : INK};
 padding:${story ? '250px 80px 300px' : '80px'};display:flex;flex-direction:column;position:relative;overflow:hidden}
.brand{display:flex;align-items:center;gap:22px;font-weight:700;font-size:30px;letter-spacing:.02em}
.brand span{opacity:.92}
.main{flex:1;display:flex;flex-direction:column;justify-content:center;gap:40px}
.kicker{font-size:30px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${dark ? YELLOW : '#a8740a'}}
h1{font-family:'Inter Display','Inter',sans-serif;font-weight:800;font-size:${story ? 96 : 88}px;line-height:1.04;letter-spacing:-.025em;text-wrap:balance}
h1 em{font-style:normal;color:${YELLOW};${dark ? '' : `background:${TEAL};padding:0 14px;border-radius:10px;box-decoration-break:clone;-webkit-box-decoration-break:clone`}}
p.sub{font-size:${story ? 44 : 40}px;line-height:1.3;font-weight:500;opacity:.92;text-wrap:pretty}
.foot{display:flex;flex-direction:column;gap:18px}
.url{align-self:flex-start;background:${YELLOW};color:${TEAL};font-weight:800;font-size:36px;padding:20px 34px;border-radius:999px}
.legal{font-size:22px;line-height:1.35;opacity:.7}
ul{list-style:none;display:flex;flex-direction:column;gap:22px}
li{font-size:${story ? 44 : 40}px;font-weight:600;display:flex;gap:22px;align-items:flex-start;line-height:1.2}
li:before{content:'';flex:none;width:34px;height:34px;margin-top:6px;border-radius:50%;background:${YELLOW};
 -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34 34'%3E%3Ccircle cx='17' cy='17' r='17'/%3E%3C/svg%3E")}
.chips{display:flex;flex-wrap:wrap;gap:16px}
.chip{border:3px solid ${dark ? 'rgba(255,255,255,.35)' : TEAL};border-radius:999px;padding:14px 28px;font-size:34px;font-weight:600}
.steps{display:flex;flex-direction:column;gap:28px}
.step{display:flex;gap:30px;align-items:center}
.num{flex:none;width:96px;height:96px;border-radius:24px;background:${YELLOW};color:${TEAL};font-weight:800;font-size:54px;display:flex;align-items:center;justify-content:center}
.step b{font-size:46px;font-weight:800;display:block}
.step small{font-size:32px;opacity:.85;line-height:1.25;display:block;margin-top:4px}
.cmp{display:flex;flex-direction:column;gap:22px}
.row{display:flex;flex-direction:column;gap:8px}
.row .lab{display:flex;justify-content:space-between;font-size:32px;font-weight:600;gap:20px}
.row .lab b{font-weight:800;white-space:nowrap}
.bar{height:26px;border-radius:13px;background:${dark ? 'rgba(255,255,255,.28)' : 'rgba(30,74,82,.25)'}}
.bar.us{background:${YELLOW}}
.vs{display:flex;gap:24px;align-items:stretch}
.card{flex:1;border-radius:28px;padding:34px;background:${dark ? 'rgba(255,255,255,.1)' : '#fff'};display:flex;flex-direction:column;gap:8px}
.card .big{font-size:92px;font-weight:800;letter-spacing:-.03em;color:${dark ? YELLOW : TEAL}}
.card .src{font-size:28px;opacity:.8;font-weight:600}
.big2{font-family:'Inter Display','Inter',sans-serif;font-size:260px;font-weight:800;letter-spacing:-.05em;line-height:.9;color:${YELLOW}}
.deco{position:absolute;right:-180px;top:-180px;width:520px;height:520px;border-radius:50%;background:${dark ? 'rgba(240,180,41,.14)' : 'rgba(30,74,82,.07)'}}
`;

const LEGAL = "Aide à la lecture d'un dossier. Ne remplace ni le notaire, ni l'expert, ni l'avocat.";
const page = ({ dark = true, story = false, body, url = 'belgimmo-duediligence.be', legal = LEGAL }) => {
  const [w, h] = story ? [1080, 1920] : [1080, 1350];
  return { w, h, html: `<!doctype html><html lang="fr"><meta charset="utf-8"><style>${css(w, h, dark, story)}</style><body>
<div class="deco"></div>
<div class="brand">${dark ? logo() : logo(TEAL, YELLOW)}<span>BELGIAN IMMO DUE DILIGENCE</span></div>
<div class="main">${body}</div>
<div class="foot"><div class="url">${url}</div><div class="legal">${legal}</div></div></body></html>` };
};

const INDIC = LEGAL + ' Montants indicatifs, variables selon le bien, la région et le prestataire.';

module.exports={page,TEAL,YELLOW,LEGAL,INDIC};
