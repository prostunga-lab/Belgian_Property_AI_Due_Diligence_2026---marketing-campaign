const { page, TEAL, LEGAL } = require('./lib.js');
const N = LEGAL + ' Information générale, à vérifier avec le notaire pour chaque vente.';

module.exports = {
  'story-peb-quiz': page({ story: true, body: `<div class="kicker">Vrai ou faux ?</div>
    <h1>Un PEB <em>F ou G</em> empêche de vendre le bien.</h1>
    <p class="sub">Réponse dans la prochaine story 👀</p>` }),
  'story-peb-reponse': page({ story: true, dark: false, legal: N, body: `<div class="kicker">Réponse</div>
    <div class="big2" style="color:${TEAL}">FAUX</div>
    <p class="sub">La vente reste possible, mais c'est le signe de travaux importants. En Flandre, l'acheteur d'un bien E ou F (acte depuis 2023) doit atteindre au moins le label D dans les 5 ans.</p>` }),
  'story-peb-10ans': page({ story: true, legal: N, body: `<div class="kicker">PEB · Validité</div>
    <div class="big2">10 ans</div>
    <p class="sub">En principe. Le certificat doit être valide lors de la mise en vente et à la signature. Un PEB expiré, ou établi après le compromis, est un point à soulever avec le notaire.</p>` }),
  'story-peb-regions': page({ story: true, dark: false, legal: N, body: `<div class="kicker">PEB · 3 régions</div>
    <h1>Même consommation, <em>pas la même lettre.</em></h1>
    <p class="sub">La Flandre note de A+ à F. Bruxelles et la Wallonie notent de A à G (A++ en Wallonie). Compare les scores, pas seulement les labels.</p>` }),
};
