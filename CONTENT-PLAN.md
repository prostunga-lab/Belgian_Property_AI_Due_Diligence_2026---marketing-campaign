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

## Tarifs en vigueur (relus le 23/11/2026 sur /pricing, TVA comprise)

- Particuliers : 1 dossier 39 € ; pack de 3 à 59 € (19,67 €/dossier) ; pack de 5 à 89 € (17,80 €/dossier). Aperçu gratuit, dossiers sans date d'expiration.
- Pros : Solo 149 €/mois (10 dossiers, 14,90 €/dossier) ; Pro 299 €/mois (25 dossiers, 11,96 €/dossier) ; Agence 749 €/mois (80 dossiers). -5 % au semestre, -10 % à l'année. Essai gratuit de 7 jours, carte requise, 5 dossiers max pendant l'essai.
- Dossier supplémentaire au-delà du quota : 19 €. 1 dossier offert à l'inscription pro. Offre de bienvenue : -20 %.
- Anciens tarifs (59/99/249 €/mois, dossier sup. 5 €) : ne plus les utiliser. Ne pas écrire « le pack de 3 = le prix d'un mois d'abonnement » : ce n'est plus vrai.
- Black Friday (relu le 27/11 sur l'accueil et /pricing) : -30 % sur les dossiers à l'unité et sur les 3 premiers mois d'abonnement, jusqu'au 01/12 inclus. Ne pas calculer de prix remisés. Ne plus en parler après le 01/12.
- L'offre de bienvenue -20 % n'apparaît plus sur /pricing au 27/11 : ne plus la citer tant qu'elle n'est pas de retour sur le site.
- Toujours relire /pricing avant un post qui cite un prix.

## Rotation des thèmes

| # | Thème | Source sur le site |
|---|---|---|
| 1 | PEB / EPC : label, score, validité, rénovation obligatoire en Flandre (E/F → label D dans les **6 ans** depuis déc. 2025, plus 5) | /guides/peb-epc |
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
| 2026-11-16 | Amiante Flandre (rattrapage du 11/11) | Sol autre parcelle, citerne mazout (rattrapage) ; PEB E/F Flandre (vague 1) |
| 2026-11-17 | 185 m² contre 240 m² (vague 1) | PEB : vrai ou faux F/G (Q + R), validité 10 ans, 3 régions (rattrapage du 12/11) |
| 2026-11-18 | Électricité 18 mois (rattrapage du 11/11) | Urbanisme : vrai ou faux véranda (Q + R), zone inondable (rattrapage) ; Moins de 2 min (vague 1) |
| 2026-11-19 | Comment ça marche (vague 1) | Documents par région : vrai ou faux (Q + R), attestation de sol 3 noms, documents selon le bien |
| 2026-11-20 | — | -20 % (vague 1) |
| 2026-11-23 | PEB : 5 points à vérifier sur le certificat | PEB après le compromis : vrai ou faux (Q 11:00 + R 12:30) ; Flandre E/F : 6 ans pour le label D (15:00) ; Ce que l'outil vérifie (vague 1, 18:00) |
| 2026-11-24 | 39 €, fais le calcul (vague 1) | Vrai ou faux : un dossier expire (Q 08:30 + R 11:30) ; Packs 39 / 59 / 89 € (15:00) ; Essai 7 jours pros (18:00) |
| 2026-11-25 | — | Rapport de démo (vague 1). Série sol préparée mais non programmée (session interrompue), reportée au 26/11 |
| 2026-11-26 | 3 régions (vague 1) | Sol : vrai ou faux BDES Wallonie (Q 08:30 + R 11:30) ; 4 points contrôlés sur l'attestation de sol (15:00) |
| 2026-11-27 | L'état du sol, un document par région (10:00) | Électricité : vrai ou faux RGIE fédéral (Q 11:00 + R 12:30) ; rapport conforme valable 25 ans (15:00) |
| 2026-11-28 | Black Friday -30 % (10:00) ; Rapport de démo Gent : 5 constats élevés (18:30) | Black Friday -30 % (11:30) ; Démo : budget 18,1–54,9 k€ (15:00) ; Démo : échéance label D 12/03/2032 (20:30) |
| 2026-12-01 | Agents et agences (vague 1) | — |

## En réserve

- (vide) Le post sol du 25/11 a été publié le 27/11.

## Incident et rattrapage

Du 11/11 (vers midi) au 13/11, Metricool a refusé toutes les publications (« You have reached your Metricool account limit »). La limite a été levée le 13/11 au soir.
Contenus manqués reprogrammés : story « Vérifie avant de signer » (13/11 à 23:10, publiée) ; amiante + stories sol et citerne (16/11) ; 4 stories PEB (17/11) ; électricité + 3 stories urbanisme (18/11) ; urbanisme (20/11) ; « Signe l'esprit tranquille » (21/11).
Pour la routine : en cas d'échec Metricool, vérifier d'abord les statuts ERROR des jours précédents (getScheduledPosts sur les jours passés) et les signaler.

Routine des 19, 20 et 21/11 : déclenchements reçus seulement le 22/11 à 19:13, sans contenu ajouté pour ces jours. Aucun statut ERROR côté BIDD du 19 au 22/11.
Le 23/11 : à cause de redémarrages du worker, les stories ont été décalées de 08:30/11:30 à 11:00/12:30.

Le 27/11 : à cause de redémarrages du worker, la série a été programmée le matin même. Les stories sont décalées à 11:00, 12:30 et 15:00.
