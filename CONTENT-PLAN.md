# Plan éditorial organique : Belgian Immo Due Diligence

Comptes : Instagram @pros_tng et page Facebook « Belgian Immo Due Diligence », via Metricool (marque `7739947`, fuseau Europe/Brussels).

## Cadence cible, tous les jours

- **1 à 2 publications** (image ou carrousel) : 1 en semaine, 2 le week-end et les jours fériés, ou quand un sujet se prête à un carrousel.
- **3 à 4 stories**.
- Les mêmes contenus sur Instagram et Facebook.
- Les contenus déjà programmés comptent dans la cadence : on complète seulement ce qui manque.

Créneaux (meilleures heures Metricool) : publications à 09:30, 10:00 ou 12:30 et 18:30 ; stories à 08:30, 11:00, 15:00, 18:00 ou 20:30. Éviter deux contenus à moins d'une heure d'écart sur le même réseau.

## Règles de contenu

1. **N'utiliser que les faits** de belgimmo-duediligence.be : accueil, /pricing, /demo, /guides/*. Pas de chiffre, de délai ni de règle inventés. En cas de doute, relire la page du site.
2. Chaque visuel porte : « Aide à la lecture d'un dossier. Ne remplace ni le notaire, ni l'expert, ni l'avocat. » Si le visuel parle d'une règle légale, ajouter « Information générale, à vérifier avec le notaire pour chaque vente. »
3. Les montants (avocat, expertise) sont toujours indiqués « indicatifs ».
4. Ton : tutoiement, clair, concret, pas alarmiste. Un écart entre documents est « un point à vérifier », jamais une preuve.
5. Instagram : « lien en bio ». Facebook : lien direct vers la page du site la plus pertinente.
6. Ne pas répéter un sujet de publication déjà traité dans les 14 derniers jours (voir le journal ci-dessous).
7. Varier les formats : carrousel pédagogique, chiffre clé, cas pratique, vrai ou faux en 2 stories, question et réponse, offre ou démo.

## Rotation des thèmes

| # | Thème | Source sur le site |
|---|---|---|
| 1 | PEB / EPC : label, score, validité, rénovation obligatoire en Flandre | /guides/peb-epc |
| 2 | Amiante par région | /guides/amiante |
| 3 | Contrôle électrique, 18 mois, 25 ans | /guides/controle-electrique |
| 4 | Sol : bodemattest, Bruxelles Environnement, BDES, citerne mazout | /guides/attestation-sol |
| 5 | Urbanisme et permis : extensions, régularisation | /guides/renseignements-urbanistiques |
| 6 | Documents de vente par région | /guides/documents-vente |
| 7 | Produit : comment ça marche, traçabilité, validation humaine, score déterministe | accueil |
| 8 | Prix et offres : 39 €, packs, -20 %, essai 7 jours pros | /pricing |
| 9 | Cas pratique : écarts entre documents (surface, adresse, cadastre, année, propriétaire) | accueil, /demo |
| 10 | Agents et agences : gain de temps, abonnements | /pricing |
| 11 | Confidentialité : chiffrement, suppression du dossier | accueil |
| 12 | Langues et régions : FR, NL, EN, détection par code postal | accueil |

## Procédure quotidienne

1. `getScheduledPosts` sur le lendemain pour voir ce qui existe déjà.
2. Choisir le ou les thèmes du jour selon la rotation et le journal.
3. Écrire `items-AAAA-MM-JJ.js` (mise en page commune dans `lib.js`), puis lancer `node render.js visuels/AAAA-MM-JJ ./items-AAAA-MM-JJ.js`.
4. Regarder une planche des visuels : texte lisible, aucun débordement.
5. Commit et push sur `main`, puis vérifier les URL `raw.githubusercontent.com`.
6. Programmer dans Metricool, en publication automatique, sur Instagram et Facebook.
7. Compléter le journal ci-dessous et commit.

## Journal

| Date | Publications | Stories |
|---|---|---|
| 2026-11-11 | Carrousel 5 documents ; Amiante Flandre ; Électricité 18 mois | Vrai ou faux électricité (Q + R) ; Sol autre parcelle ; Citerne mazout |
| 2026-11-12 | Signe l'esprit tranquille (vague 1) | PEB : vrai ou faux F/G (Q + R) ; Validité 10 ans ; 3 régions, échelles différentes |
| 2026-11-13 | Urbanisme : ce que la commune sait du bien | Vérifie avant de signer (vague 1) ; Urbanisme : vrai ou faux véranda sans permis (Q + R) ; Zone inondable / bien protégé |
| 2026-11-14 | Carrousel « construit pour être vérifié » ; Confidentialité : ton dossier reste le tien | Vrai ou faux : l'IA décide du score (Q + R) ; Scans et photos lus (OCR) ; FR · NL · EN |
| 2026-11-15 | Carrousel cas pratique : 5 infos qui doivent concorder ; Compare 2 ou 3 biens (pack 3 à 59 €) | Vrai ou faux : payer avant de voir (Q + R) ; 25 documents par dossier ; Échéances calculées |
| 2026-11-16 | — | PEB E/F Flandre (vague 1) |
| 2026-11-17 | 185 m² contre 240 m² (vague 1) | — |
| 2026-11-18 | — | Moins de 2 min (vague 1) |
| 2026-11-19 | Comment ça marche (vague 1) | — |
| 2026-11-20 | — | -20 % (vague 1) |
| 2026-11-23 | — | Ce que l'outil vérifie (vague 1) |
| 2026-11-24 | 39 €, fais le calcul (vague 1) | — |
| 2026-11-25 | — | Rapport de démo (vague 1) |
| 2026-11-26 | 3 régions (vague 1) | — |
| 2026-12-01 | Agents et agences (vague 1) | — |

## Incident et rattrapage

Du 11/11 (vers midi) au 13/11, Metricool a refusé toutes les publications (« You have reached your Metricool account limit »). La limite a été levée le 13/11 au soir.
Contenus manqués reprogrammés : story « Vérifie avant de signer » (13/11 à 23:10, publiée) ; amiante + stories sol et citerne (16/11) ; 4 stories PEB (17/11) ; électricité + 3 stories urbanisme (18/11) ; urbanisme (20/11) ; « Signe l'esprit tranquille » (21/11).
Pour la routine : en cas d'échec Metricool, vérifier d'abord les statuts ERROR des jours précédents (getScheduledPosts sur les jours passés) et les signaler.
