const { page, TEAL, LEGAL } = require('./lib.js');
const N = LEGAL + ' Information générale, à vérifier avec le notaire pour chaque vente.';
const slide = (n, kicker, title, sub, dark) => page({ dark, legal: N, url: `${n} / 7 · belgimmo-duediligence.be`, body: `<div class="kicker">${kicker}</div><h1>${title}</h1><p class="sub">${sub}</p>` });

module.exports = {
  // Carrousel : 5 documents à vérifier avant de signer
  'c1-1': page({ url: '1 / 7 · Glisse →', body: `<div class="kicker">Avant de signer un compromis</div>
    <h1>5 documents à <em>vérifier</em> dans ton dossier.</h1>
    <p class="sub">Ce qu'ils doivent dire, et les pièges les plus fréquents.</p>` }),
  'c1-2': slide(2, '1 · Le PEB', 'Label et score <em>doivent concorder.</em>', "Vérifie aussi la validité du certificat et la surface indiquée. En Flandre, un label E ou F impose une rénovation énergétique après l'achat.", false),
  'c1-3': slide(3, "2 · L'attestation amiante", 'Bâtiment d\'avant 2001 <em>en Flandre ?</em>', "Depuis le 23 novembre 2022, une attestation amiante d'un expert certifié OVAM est obligatoire à la vente.", true),
  'c1-4': slide(4, '3 · Le contrôle électrique', 'Non conforme ? <em>La vente reste possible.</em>', "Mais l'acheteur doit faire mettre l'installation en conformité et la faire recontrôler dans les 18 mois suivant l'acte.", false),
  'c1-5': slide(5, "4 · L'attestation de sol", 'La parcelle est-elle <em>la bonne ?</em>', "Compare la référence cadastrale de l'attestation avec celle de l'acte. Avec plusieurs parcelles, une erreur arrive.", true),
  'c1-6': slide(6, '5 · L\'urbanisme', 'Extension, véranda, <em>étage aménagé ?</em>', "Vérifie qu'un permis couvre les travaux. Sinon, il faudra régulariser, voire démolir.", false),
  'c1-7': page({ url: 'belgimmo-duediligence.be', body: `<div class="kicker">Et tout ça en une fois ?</div>
    <h1>Dépose le dossier, <em>on recoupe tout.</em></h1>
    <p class="sub">Chaque constat renvoie à sa page source. Premier rapport en moins de 2 minutes pour un dossier complet standard.</p>` }),

  'post-amiante': page({ dark: false, legal: N, url: 'belgimmo-duediligence.be/guides/amiante', body: `<div class="kicker">Flandre · Amiante</div>
    <div class="big2" style="color:${TEAL};font-size:200px">avant 2001 ?</div>
    <h1 style="font-size:72px">Attestation amiante <em>obligatoire</em> à la vente.</h1>
    <p class="sub">Depuis le 23/11/2022, par un expert certifié OVAM. À Bruxelles et en Wallonie, pas d'obligation générale aujourd'hui, mais un inventaire reste utile pour un bien ancien.</p>` }),

  'post-elec': page({ legal: N, url: 'belgimmo-duediligence.be/guides', body: `<div class="kicker">Contrôle électrique · RGIE / AREI</div>
    <div class="big2">18 mois</div>
    <h1 style="font-size:72px">pour mettre l'installation <em>en conformité</em> après l'acte.</h1>
    <p class="sub">Installation non conforme : la vente reste possible, mais c'est l'acheteur qui s'en charge. Le coût se négocie souvent dans le prix.</p>` }),

  'story-quiz': page({ story: true, body: `<div class="kicker">Vrai ou faux ?</div>
    <h1>Une installation électrique non conforme <em>empêche la vente.</em></h1>
    <p class="sub">Réponse dans la prochaine story 👀</p>` }),
  'story-reponse': page({ story: true, dark: false, legal: N, body: `<div class="kicker">Réponse</div>
    <div class="big2" style="color:${TEAL}">FAUX</div>
    <p class="sub">La vente reste possible. L'acheteur a 18 mois après l'acte pour mettre l'installation en conformité et la faire recontrôler.</p>` }),
  'story-sol': page({ story: true, legal: N, body: `<div class="kicker">Attestation de sol</div>
    <h1>Et si elle portait sur <em>une autre parcelle ?</em></h1>
    <p class="sub">Ça arrive, surtout quand un bien compte plusieurs parcelles. L'outil compare la référence cadastrale de l'attestation avec celle de l'acte.</p>` }),
  'story-mazout': page({ story: true, dark: false, legal: N, body: `<div class="kicker">Citerne à mazout</div>
    <h1>Enterrée ou non conforme ? <em>Risque de pollution.</em></h1>
    <p class="sub">L'outil la repère dans le dossier et te rappelle de vérifier l'attestation de sol.</p>` }),
};
