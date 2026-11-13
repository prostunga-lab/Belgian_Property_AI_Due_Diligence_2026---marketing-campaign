const { page, TEAL, LEGAL } = require('./lib.js');
const P = LEGAL + ' Un écart entre documents est un point à vérifier, pas une preuve de non-conformité.';
const slide = (n, kicker, title, sub, dark) => page({ dark, legal: P, url: `${n} / 7 · belgimmo-duediligence.be`, body: `<div class="kicker">${kicker}</div><h1>${title}</h1><p class="sub">${sub}</p>` });

module.exports = {
  // Carrousel : 5 infos qui doivent concorder d'un document à l'autre
  'c3-1': page({ url: '1 / 7 · Glisse →', body: `<div class="kicker">Cas pratique</div>
    <h1>5 infos qui doivent être <em>les mêmes partout.</em></h1>
    <p class="sub">Acte, PEB, cadastre, attestations : si elles changent d'un document à l'autre, pose la question avant de signer.</p>` }),
  'c3-2': slide(2, "1 · L'adresse", 'Même rue, même numéro, <em>dans chaque document ?</em>', "Une adresse qui change d'un document à l'autre ? Vérifie que chaque document porte bien sur ton bien.", false),
  'c3-3': slide(3, '2 · La surface', 'Les m² <em>varient ?</em>', "Ce peut être une différence de définition (habitable ou utile), ou une extension sans permis. À comparer avec les plans autorisés.", true),
  'c3-4': slide(4, "3 · L'année de construction", 'Elle change <em>les obligations.</em>', "En Flandre par exemple, l'attestation amiante est exigée pour un bâtiment d'avant 2001.", false),
  'c3-5': slide(5, '4 · La référence cadastrale', 'La bonne parcelle, <em>partout.</em>', "Avec plusieurs parcelles, une attestation de sol peut porter sur une autre que celle de l'acte.", true),
  'c3-6': slide(6, '5 · Le propriétaire', 'Le même nom, <em>du début à la fin.</em>', "Un propriétaire qui diffère d'un document à l'autre, c'est une négociation sur une mauvaise base.", false),
  'c3-7': page({ url: 'belgimmo-duediligence.be', body: `<div class="kicker">On recoupe pour toi</div>
    <h1>Chaque écart, <em>avec ses deux pages sources.</em></h1>
    <p class="sub">L'outil compare adresse, surfaces, cadastre, propriétaire et dates entre tous les documents du dossier.</p>` }),

  'post-comparer': page({ dark: false, url: 'belgimmo-duediligence.be/pricing', body: `<div class="kicker">Tu hésites entre plusieurs biens ?</div>
    <h1>Compare 2 ou 3 maisons <em>sans t'abonner.</em></h1>
    <div class="vs"><div class="card"><div class="big">59 €</div><div class="src">pack de 3 dossiers, soit 19,67 € par dossier</div></div></div>
    <ul><li>Aperçu gratuit de chaque dossier avant de payer</li><li>Tes dossiers n'expirent jamais</li><li>Ré-analyse gratuite</li></ul>` , legal: LEGAL + ' Prix TVA comprise.' }),

  'story-apercu-quiz': page({ story: true, body: `<div class="kicker">Vrai ou faux ?</div>
    <h1>Il faut payer <em>avant de voir</em> quoi que ce soit.</h1>
    <p class="sub">Réponse dans la prochaine story 👀</p>` }),
  'story-apercu-reponse': page({ story: true, dark: false, body: `<div class="kicker">Réponse</div>
    <div class="big2" style="color:${TEAL}">FAUX</div>
    <p class="sub">Chaque dossier a un aperçu gratuit avant de payer. Et si une analyse échoue, rien n'est décompté.</p>` }),
  'story-25docs': page({ story: true, body: `<div class="kicker">Un dossier, c'est quoi ?</div>
    <div class="big2">25</div>
    <h1 style="font-size:72px">documents <em>par dossier.</em></h1>
    <p class="sub">Acte, PEB, amiante, contrôle électrique, extrait cadastral, attestation de sol… recoupés, avec un score de risque et un rapport PDF.</p>` }),
  'story-echeances': page({ story: true, dark: false, legal: LEGAL + ' Information générale, à vérifier avec le notaire pour chaque vente.', body: `<div class="kicker">Les dates qui comptent</div>
    <h1>Les échéances, <em>calculées pour toi.</em></h1>
    <p class="sub">Rénovation obligatoire en Flandre, mise en conformité électrique dans les 18 mois : l'outil calcule les dates à partir de l'acte.</p>` }),
};
