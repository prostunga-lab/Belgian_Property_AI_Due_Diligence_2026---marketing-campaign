const { page, TEAL, LEGAL } = require('./lib.js');
const N = LEGAL + ' Information générale, à vérifier avec le notaire pour chaque vente.';

module.exports = {
  'story-docs-quiz': page({ story: true, body: `<div class="kicker">Vrai ou faux ?</div>
    <h1>Pour vendre en Belgique, c'est <em>la même liste de documents partout.</em></h1>
    <p class="sub">Réponse dans la prochaine story 👀</p>` }),
  'story-docs-reponse': page({ story: true, dark: false, legal: N, body: `<div class="kicker">Réponse</div>
    <div class="big2" style="color:${TEAL}">FAUX</div>
    <p class="sub">Les documents demandés dépendent de la région du bien. L'outil détecte la région d'après le code postal et applique la bonne liste.</p>` }),
  'story-docs-sol': page({ story: true, legal: N, url: 'belgimmo-duediligence.be/guides', body: `<div class="kicker">Un document, trois noms</div>
    <h1>L'attestation de sol <em>change selon la région.</em></h1>
    <ul><li>Flandre : bodemattest</li><li>Bruxelles : attestation du sol de Bruxelles Environnement</li><li>Wallonie : extrait conforme de la BDES</li></ul>` }),
  'story-docs-selon': page({ story: true, dark: false, legal: N, body: `<div class="kicker">Et selon le bien…</div>
    <h1>Il peut en manquer <em>d'autres.</em></h1>
    <ul><li>Documents de copropriété : charges, fonds de réserve, assemblées, litiges</li><li>Contrôle de la citerne à mazout</li><li>Bail en cours</li><li>Plans et factures de travaux</li></ul>` }),
};
