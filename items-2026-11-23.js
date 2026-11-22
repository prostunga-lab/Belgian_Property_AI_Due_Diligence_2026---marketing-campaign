const { page, TEAL, LEGAL } = require('./lib.js');
const N = LEGAL + ' Information générale, à vérifier avec le notaire pour chaque vente.';

module.exports = {
  'post-peb-checklist': page({ legal: N, url: 'belgimmo-duediligence.be/guides', body: `<div class="kicker">PEB · Avant de signer</div>
    <h1>5 points à vérifier <em>sur le certificat PEB.</em></h1>
    <ul><li>Valable à la mise en vente et à la signature</li><li>Étiquette cohérente avec le score</li><li>Surface du PEB comparée à l'acte et aux plans</li><li>Travaux énergétiques faits après le certificat</li><li>En Flandre, E ou F : échéance de rénovation</li></ul>` }),

  'story-peb-quiz': page({ story: true, body: `<div class="kicker">Vrai ou faux ?</div>
    <h1>Un PEB établi <em>après le compromis,</em> ce n'est pas un problème.</h1>
    <p class="sub">Réponse dans la prochaine story 👀</p>` }),
  'story-peb-reponse': page({ story: true, dark: false, legal: N, body: `<div class="kicker">Réponse</div>
    <div class="big2" style="color:${TEAL}">FAUX</div>
    <p class="sub">Le PEB doit être valable au moment de la mise en vente et de la signature. Un certificat expiré, ou établi après le compromis, est un point à soulever avec le notaire.</p>` }),
  'story-peb-6ans': page({ story: true, legal: N, url: 'belgimmo-duediligence.be/guides', body: `<div class="kicker">Flandre · Label E ou F</div>
    <div class="big2">6 ans</div>
    <h1 style="font-size:72px">pour atteindre <em>au moins le label D.</em></h1>
    <p class="sub">Pour un acte depuis 2023. Le délai est passé de 5 à 6 ans en décembre 2025. Des exceptions existent. L'outil calcule l'échéance à partir de l'acte.</p>` }),
};
