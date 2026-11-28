const { page, TEAL, LEGAL } = require('./lib.js');
const D = LEGAL + ' Exemple construit à partir de documents de démonstration, aucun dossier réel.';

module.exports = {
  'post-fichiers': page({ dark: false, url: 'belgimmo-duediligence.be', body: `<div class="kicker">Qu'est-ce que je peux déposer ?</div>
    <h1>PDF, Word, texte, <em>photo ou scan.</em></h1>
    <ul><li>Formats : PDF, Word (.docx), texte, PNG, JPG, TIFF</li><li>Jusqu'à 25 fichiers par envoi, 25 Mo chacun</li><li>Pages scannées lues par OCR, chaque document nommé d'après son contenu</li><li>Scans difficiles à lire : signalés dans le rapport</li></ul>` }),

  'post-nl-fr': page({ url: 'belgimmo-duediligence.be/demo', legal: D, body: `<div class="kicker">Tu achètes en Flandre ?</div>
    <h1>Documents en néerlandais, <em>rapport en français.</em></h1>
    <p class="sub">Dans le rapport de démo, l'acte, le PEB, l'attestation amiante et le contrôle électrique sont en néerlandais. Le rapport est en français et cite chaque extrait d'origine.</p>
    <div class="chips"><span class="chip">FR</span><span class="chip">NL</span><span class="chip">EN</span></div>` }),

  'story-photo-quiz': page({ story: true, body: `<div class="kicker">Vrai ou faux ?</div>
    <h1>Un document pris en photo <em>ne peut pas être analysé.</em></h1>
    <p class="sub">Réponse dans la prochaine story 👀</p>` }),
  'story-photo-reponse': page({ story: true, dark: false, body: `<div class="kicker">Réponse</div>
    <div class="big2" style="color:${TEAL}">FAUX</div>
    <p class="sub">Les images PNG, JPG et TIFF sont acceptées. Les pages scannées passent par l'OCR, et l'outil signale celles qui sont difficiles à lire.</p>` }),
  'story-bf-j3': page({ story: true, legal: LEGAL + ' Prix TVA comprise.', url: 'belgimmo-duediligence.be/pricing', body: `<div class="kicker">Black Friday · jusqu'au 01/12 inclus</div>
    <div class="big2">-30 %</div>
    <h1 style="font-size:72px">Encore <em>3 jours.</em></h1>
    <p class="sub">Sur les dossiers à l'unité et sur les 3 premiers mois d'abonnement.</p>` }),
};
