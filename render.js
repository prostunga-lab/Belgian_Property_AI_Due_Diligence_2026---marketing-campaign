const { chromium } = require('playwright');
const path = require('path');

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

const items = {
  'post-1': page({ body: `<div class="kicker">Achat immobilier en Belgique</div>
    <h1>Signe l'esprit <em>tranquille.</em></h1>
    <p class="sub">Les risques du dossier, repérés avant de signer. Chaque constat renvoie à sa page source.</p>
    <div class="chips"><span class="chip">PEB</span><span class="chip">Acte</span><span class="chip">Amiante</span><span class="chip">Électricité</span><span class="chip">Cadastre</span><span class="chip">Sol</span><span class="chip">Urbanisme</span></div>` }),
  'post-2': page({ dark: false, body: `<div class="kicker">Exemple</div>
    <h1>Même bien, deux surfaces <em>différentes.</em></h1>
    <div class="vs"><div class="card"><div class="big">185 m²</div><div class="src">dans l'acte</div></div><div class="card"><div class="big">240 m²</div><div class="src">dans le PEB</div></div></div>
    <p class="sub">30 % d'écart. Définitions différentes… ou extension sans permis ? À vérifier avant de signer.</p>`,
    legal: LEGAL + " Un écart entre documents est un point à vérifier, pas une preuve de non-conformité." }),
  'post-3': page({ body: `<div class="kicker">Comment ça marche</div>
    <h1>Un premier rapport en moins de <em>2 minutes.</em></h1>
    <div class="steps">
      <div class="step"><div class="num">1</div><div><b>Dépose</b><small>PDF, Word, photo ou scan des documents du bien.</small></div></div>
      <div class="step"><div class="num">2</div><div><b>Analyse</b><small>Les documents sont classés, lus et recoupés entre eux.</small></div></div>
      <div class="step"><div class="num">3</div><div><b>Décide</b><small>Score de risque, constats sourcés, questions pour le notaire, rapport PDF.</small></div></div>
    </div>`, legal: LEGAL + ' Délai indicatif pour un dossier complet standard.' }),
  'post-4': page({ dark: false, body: `<div class="kicker">Fais le calcul</div>
    <h1>39 € pour vérifier un dossier. Et une mauvaise surprise <em>après signature ?</em></h1>
    <div class="cmp">
      <div class="row"><div class="lab"><span>Vérifier le dossier avec nous</span><b>39 €</b></div><div class="bar us" style="width:7%"></div></div>
      <div class="row"><div class="lab"><span>Une heure d'avocat</span><b>± 100–150 €</b></div><div class="bar" style="width:20%"></div></div>
      <div class="row"><div class="lab"><span>Une expertise du bâtiment</span><b>± 300–800 €</b></div><div class="bar" style="width:48%"></div></div>
      <div class="row"><div class="lab"><span>Une mauvaise surprise après signature</span><b>souvent des milliers d'€</b></div><div class="bar" style="width:100%"></div></div>
    </div>`, legal: INDIC }),
  'post-5': page({ body: `<div class="kicker">Flandre · Bruxelles · Wallonie</div>
    <h1>3 régions, <em>3 jeux de règles.</em></h1>
    <p class="sub">Les documents attendus lors d'une vente ne sont pas les mêmes partout. Les règles de ta région sont appliquées automatiquement, d'après le code postal du bien.</p>
    <ul><li>Liste des documents manquants</li><li>Interface et rapports en FR, NL et EN</li></ul>` }),
  'post-6': page({ dark: false, body: `<div class="kicker">Agents &amp; agences immobilières</div>
    <h1>Moins d'heures de relecture, <em>dossier après dossier.</em></h1>
    <ul><li>1 dossier complet offert aux professionnels pour essayer</li><li>Abonnements dès 59 € / mois (10 dossiers)</li><li>Essai gratuit de 7 jours sur les abonnements</li></ul>`,
    legal: LEGAL + " Essai : carte requise, abonnement débité ensuite sauf annulation avant la fin de l'essai." }),

  'story-1': page({ story: true, body: `<div class="kicker">Tu achètes en Belgique ?</div>
    <h1>Vérifie le dossier <em>avant</em> de signer.</h1>
    <p class="sub">Dépose les documents du bien : l'outil les lit, les recoupe et te montre ce qui ne colle pas.</p>` }),
  'story-2': page({ story: true, dark: false, body: `<div class="kicker">Le savais-tu ?</div>
    <h1>En Flandre, un PEB <em>E ou F</em> impose une rénovation énergétique.</h1>
    <p class="sub">Dans les années qui suivent l'achat. Mieux vaut le savoir avant de faire une offre.</p>` }),
  'story-3': page({ story: true, body: `<div class="kicker">Ton dossier, analysé en</div>
    <div class="big2">&lt; 2 min</div>
    <p class="sub">Un premier rapport pour un dossier complet standard, chaque constat relié à la page qui le prouve.</p>`,
    legal: LEGAL + ' Délai indicatif.' }),
  'story-4': page({ story: true, dark: false, body: `<div class="kicker">Offre de bienvenue</div>
    <div class="big2" style="color:${TEAL}">−20 %</div>
    <p class="sub">Sur ton premier achat de dossiers, ou sur les 3 premiers mois de ton abonnement.</p>` }),
  'story-5': page({ story: true, body: `<div class="kicker">Ce que l'outil vérifie</div>
    <h1>Ce qui <em>ne colle pas</em> dans le dossier.</h1>
    <ul><li>Contradictions entre documents : adresse, surface, année, cadastre</li><li>Validité du PEB</li><li>Amiante, électricité, sol</li><li>Travaux sans permis démontrable</li><li>Documents manquants selon la région</li></ul>` }),
  'story-6': page({ story: true, dark: false, url: 'belgimmo-duediligence.be/demo', body: `<div class="kicker">Envie de voir le résultat ?</div>
    <h1>Un rapport de démonstration <em>est en ligne.</em></h1>
    <p class="sub">Score de risque par domaine, constats sourcés, questions à poser au notaire ou au vendeur.</p>` }),
};

(async () => {
  const out = process.argv[2];
  const browser = await chromium.launch();
  for (const [name, { w, h, html }] of Object.entries(items)) {
    const p = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    await p.setContent(html);
    const over = await p.evaluate(() => (()=>{const f=document.querySelector('.foot').getBoundingClientRect(),m=document.querySelector('.main');return f.bottom>innerHeight-60||m.scrollHeight>m.clientHeight+1||[...document.querySelectorAll('.main *')].some(e=>e.getBoundingClientRect().right>innerWidth-60)})());
    if (over) console.log('OVERFLOW', name);
    await p.screenshot({ path: path.join(out, name + '.jpg'), type: 'jpeg', quality: 92 });
    await p.close();
  }
  await browser.close();
})();
