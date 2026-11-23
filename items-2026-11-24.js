const { page, TEAL, LEGAL } = require('./lib.js');
const T = LEGAL + ' Prix TVA comprise.';

module.exports = {
  'story-expire-quiz': page({ story: true, body: `<div class="kicker">Vrai ou faux ?</div>
    <h1>Un dossier acheté <em>expire</em> au bout de quelques mois.</h1>
    <p class="sub">Réponse dans la prochaine story 👀</p>` }),
  'story-expire-reponse': page({ story: true, dark: false, legal: T, body: `<div class="kicker">Réponse</div>
    <div class="big2" style="color:${TEAL}">FAUX</div>
    <p class="sub">Sans abonnement, tes dossiers restent disponibles sans limite de temps. Et la ré-analyse est gratuite.</p>` }),
  'story-packs': page({ story: true, legal: T, url: 'belgimmo-duediligence.be/pricing', body: `<div class="kicker">Sans abonnement</div>
    <h1>Plus tu compares, <em>moins tu paies.</em></h1>
    <ul><li>1 dossier : 39 €</li><li>Pack de 3 : 59 €, soit 19,67 € par dossier</li><li>Pack de 5 : 89 €, soit 17,80 € par dossier</li></ul>
    <p class="sub">Aperçu gratuit de chaque dossier avant de payer.</p>` }),
  'story-essai-pro': page({ story: true, dark: false, legal: T + ' Carte bancaire requise, 5 dossiers max pendant l\'essai.', url: 'belgimmo-duediligence.be/pricing', body: `<div class="kicker">Agent ou agence ?</div>
    <div class="big2" style="color:${TEAL}">7 jours</div>
    <h1 style="font-size:72px">d'essai gratuit <em>sur les abonnements.</em></h1>
    <p class="sub">Solo dès 149 € / mois pour 10 dossiers. Aucun paiement pendant l'essai, résiliable avant la fin.</p>` }),
};
