const { page, TEAL, LEGAL } = require('./lib.js');
const N = LEGAL + ' Information générale, à vérifier avec le notaire pour chaque vente.';

module.exports = {
  'post-urbanisme': page({ legal: N, url: 'belgimmo-duediligence.be/guides', body: `<div class="kicker">Urbanisme · Avant d'acheter</div>
    <h1>Ce que la commune sait <em>de ton futur bien.</em></h1>
    <p class="sub">Les renseignements urbanistiques indiquent :</p>
    <div class="chips"><span class="chip">Zonage</span><span class="chip">Permis accordés</span><span class="chip">Infractions</span><span class="chip">Bien protégé</span><span class="chip">Zone inondable</span></div>
    <p class="sub">Flandre : via le Vastgoedinformatieplatform. Bruxelles : lettre de la commune (CoBAT). Wallonie : demandés par le notaire (CoDT).</p>` }),

  'story-urba-quiz': page({ story: true, body: `<div class="kicker">Vrai ou faux ?</div>
    <h1>Une véranda sans permis, <em>ce n'est pas grave.</em></h1>
    <p class="sub">Réponse dans la prochaine story 👀</p>` }),
  'story-urba-reponse': page({ story: true, dark: false, legal: N, body: `<div class="kicker">Réponse</div>
    <div class="big2" style="color:${TEAL}">FAUX</div>
    <p class="sub">C'est potentiellement une infraction urbanistique : elle peut mener à une régularisation, voire à une remise en état. L'outil la signale quand une surface ou une extension n'est couverte par aucun permis du dossier.</p>` }),
  'story-urba-inondation': page({ story: true, legal: N, body: `<div class="kicker">Urbanisme</div>
    <h1>Zone inondable ? Bien protégé ? <em>Mieux vaut le savoir avant.</em></h1>
    <p class="sub">Ces informations figurent dans les renseignements urbanistiques. L'outil les repère et signale aussi celles qui manquent dans l'acte.</p>` }),
};
