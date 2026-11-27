const { page, TEAL, LEGAL } = require('./lib.js');
const N = LEGAL + ' Information générale, à vérifier avec le notaire pour chaque vente.';
const D = LEGAL + ' Exemple construit à partir de documents de démonstration, aucun dossier réel.';

module.exports = {
  'post-blackfriday': page({ legal: LEGAL + ' Offre affichée sur belgimmo-duediligence.be, prix TVA comprise.', url: 'belgimmo-duediligence.be/pricing', body: `<div class="kicker">Black Friday · jusqu'au 01/12 inclus</div>
    <div class="big2">-30 %</div>
    <h1 style="font-size:72px">sur les dossiers à l'unité <em>et sur les 3 premiers mois d'abonnement.</em></h1>
    <p class="sub">Aperçu gratuit de chaque dossier avant de payer. Un premier rapport en moins de 2 minutes.</p>` }),

  'post-demo': page({ dark: false, legal: D, url: 'belgimmo-duediligence.be/demo', body: `<div class="kicker">Rapport de démo · Gent, 1975</div>
    <h1>4 documents, <em>5 constats élevés.</em></h1>
    <ul><li>Amiante signalé dans la toiture</li><li>Installation électrique non conforme</li><li>185 m² dans l'acte, 240 m² dans le PEB</li><li>Extension de 32 m² sans permis démontrable</li><li>PEB E : label D à atteindre au plus tard le 12/03/2032</li></ul>` }),

  'story-bf': page({ story: true, legal: LEGAL + ' Prix TVA comprise.', url: 'belgimmo-duediligence.be/pricing', body: `<div class="kicker">Black Friday</div>
    <div class="big2">-30 %</div>
    <h1 style="font-size:72px">jusqu'au <em>01/12 inclus.</em></h1>
    <p class="sub">Sur les dossiers à l'unité et sur les 3 premiers mois d'abonnement.</p>` }),
  'story-demo-budget': page({ story: true, dark: false, legal: D, url: 'belgimmo-duediligence.be/demo', body: `<div class="kicker">Plan de rénovation · démo</div>
    <div class="big2" style="color:${TEAL};font-size:120px;white-space:nowrap">18,1 – 54,9 k€</div>
    <h1 style="font-size:72px">de budget indicatif, <em>poste par poste.</em></h1>
    <p class="sub">Amiante, électricité, toiture, vitrage, chauffage. Ordre de grandeur, pas un devis : demande plusieurs devis.</p>` }),
  'story-demo-echeance': page({ story: true, legal: N, body: `<div class="kicker">Échéance calculée · démo</div>
    <h1>PEB E en Flandre, acte du 12/03/2026 : <em>label D au plus tard le 12/03/2032.</em></h1>
    <p class="sub">L'outil calcule la date à partir de l'acte. Exceptions possibles : à vérifier avec le notaire.</p>` }),
};
