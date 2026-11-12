const { page, TEAL } = require('./lib.js');
const slide = (n, kicker, title, sub, dark) => page({ dark, url: `${n} / 6 · belgimmo-duediligence.be`, body: `<div class="kicker">${kicker}</div><h1>${title}</h1><p class="sub">${sub}</p>` });

module.exports = {
  // Carrousel : construit pour être vérifié
  'c2-1': page({ url: '1 / 6 · Glisse →', body: `<div class="kicker">Pourquoi tu peux lui faire confiance</div>
    <h1>Un rapport <em>construit pour être vérifié.</em></h1>
    <p class="sub">Pas une boîte noire : chaque conclusion se contrôle.</p>` }),
  'c2-2': slide(2, '1 · Traçable', 'Chaque constat renvoie <em>à sa source.</em>', 'Le document, la page et l\'extrait exact. Tu vérifies en un clic.', false),
  'c2-3': slide(3, '2 · Validation humaine', 'C\'est toi <em>qui tranches.</em>', 'Tu confirmes ou écartes chaque constat et tu ajoutes tes commentaires. Tes décisions sont conservées.', true),
  'c2-4': slide(4, '3 · Fait, inférence, risque, action', 'Ce qui est lu, <em>séparé de ce qui est déduit.</em>', 'Le rapport distingue ce qui figure dans les documents de ce que l\'outil en conclut.', false),
  'c2-5': slide(5, '4 · Un score sans boîte noire', 'L\'IA ne décide <em>pas du score.</em>', 'Il vient de règles déterministes et traçables. La lecture IA, optionnelle, est affichée à part et n\'entre jamais dans le score.', true),
  'c2-6': page({ dark: false, url: 'belgimmo-duediligence.be/demo', body: `<div class="kicker">Vois par toi-même</div>
    <h1>Un rapport de démonstration <em>est en ligne.</em></h1>
    <p class="sub">Une aide à la lecture, pas un avis : les conclusions restent à valider par un professionnel.</p>` }),

  'post-confidentialite': page({ dark: false, body: `<div class="kicker">Tes documents</div>
    <h1>Ton dossier reste <em>le tien.</em></h1>
    <ul><li>Fichiers chiffrés au repos</li><li>Supprime un dossier, ou ton compte entier, quand tu veux</li><li>PDF, Word, texte, photos et scans : jusqu'à 25 fichiers de 25 Mo par envoi</li></ul>` }),

  'story-score-quiz': page({ story: true, body: `<div class="kicker">Vrai ou faux ?</div>
    <h1>C'est l'IA qui décide <em>du score de risque.</em></h1>
    <p class="sub">Réponse dans la prochaine story 👀</p>` }),
  'story-score-reponse': page({ story: true, dark: false, body: `<div class="kicker">Réponse</div>
    <div class="big2" style="color:${TEAL}">FAUX</div>
    <p class="sub">Le score vient de règles déterministes et traçables. La lecture IA, optionnelle, est affichée à part et n'entre jamais dans le score.</p>` }),
  'story-scan': page({ story: true, body: `<div class="kicker">Juste une photo ?</div>
    <h1>Les scans et photos <em>sont lus aussi.</em></h1>
    <p class="sub">Les pages scannées passent par l'OCR et chaque document est nommé d'après son contenu. L'outil signale aussi les scans difficiles à lire.</p>` }),
  'story-langues': page({ story: true, dark: false, body: `<div class="kicker">Spreek je Nederlands ?</div>
    <div class="big2" style="color:${TEAL};font-size:150px;white-space:nowrap">FR · NL · EN</div>
    <p class="sub">Interface et rapports en français, néerlandais et anglais. La région est détectée d'après le code postal du bien.</p>` }),
};
