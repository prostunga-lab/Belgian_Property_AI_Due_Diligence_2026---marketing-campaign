const { page, TEAL, LEGAL } = require('./lib.js');
const N = LEGAL + ' Information générale, à vérifier avec le notaire pour chaque vente.';

module.exports = {
  'post-sol-regions': page({ legal: N, url: 'belgimmo-duediligence.be/guides', body: `<div class="kicker">Sol · Avant de signer</div>
    <h1>L'état du sol, <em>un document par région.</em></h1>
    <ul><li>Flandre : bodemattest, délivré par l'OVAM</li><li>Bruxelles : attestation du sol de Bruxelles Environnement</li><li>Wallonie : extrait conforme de la BDES</li></ul>
    <p class="sub">À vérifier : pollution mentionnée, bonne parcelle, date par rapport à la signature.</p>` }),

  'story-sol-quiz': page({ story: true, body: `<div class="kicker">Vrai ou faux ?</div>
    <h1>En Wallonie, l'extrait de la BDES, <em>c'est à l'acheteur</em> d'aller le chercher.</h1>
    <p class="sub">Réponse dans la prochaine story 👀</p>` }),
  'story-sol-reponse': page({ story: true, dark: false, legal: N, body: `<div class="kicker">Réponse</div>
    <div class="big2" style="color:${TEAL}">FAUX</div>
    <p class="sub">C'est le vendeur qui remet l'extrait conforme à l'acheteur. La BDES indique si la parcelle est concernée par une pollution connue ou une activité à risque.</p>` }),
  'story-sol-controle': page({ story: true, legal: N, body: `<div class="kicker">Attestation de sol</div>
    <h1>4 points <em>contrôlés pour toi.</em></h1>
    <ul><li>Pollution mentionnée ou non</li><li>Parcelle comparée à la référence cadastrale de l'acte</li><li>Date de l'attestation par rapport à la signature</li><li>Document manquant selon la région</li></ul>` }),
};
