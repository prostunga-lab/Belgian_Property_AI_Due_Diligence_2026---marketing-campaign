const {page,TEAL,YELLOW,LEGAL,INDIC}=require('./lib.js');
module.exports = {
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
