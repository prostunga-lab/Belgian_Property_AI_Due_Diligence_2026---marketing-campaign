const { page, TEAL, LEGAL } = require('./lib.js');
const N = LEGAL + ' Information générale, à vérifier avec le notaire pour chaque vente.';

module.exports = {
  'story-elec-quiz': page({ story: true, body: `<div class="kicker">Vrai ou faux ?</div>
    <h1>Les règles du contrôle électrique <em>changent d'une région à l'autre.</em></h1>
    <p class="sub">Réponse dans la prochaine story 👀</p>` }),
  'story-elec-reponse': page({ story: true, dark: false, legal: N, body: `<div class="kicker">Réponse</div>
    <div class="big2" style="color:${TEAL}">FAUX</div>
    <p class="sub">La réglementation électrique (RGIE, AREI en néerlandais) est fédérale : elle s'applique de la même façon en Flandre, à Bruxelles et en Wallonie.</p>` }),
  'story-elec-25ans': page({ story: true, legal: N, url: 'belgimmo-duediligence.be/guides', body: `<div class="kicker">Contrôle électrique</div>
    <div class="big2">25 ans</div>
    <h1 style="font-size:72px">de validité <em>en principe</em> pour un rapport conforme.</h1>
    <p class="sub">Sauf modification importante de l'installation. L'outil signale un rapport de plus de 25 ans et les travaux électriques faits après le contrôle.</p>` }),
};
