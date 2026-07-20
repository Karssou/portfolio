---
title: Desktop Converter
cover: converter-overview.avif
description: Une application desktop permettant de convertir des fichiers sous plusieurs format
href: /projects/converter
github: https://github.com/Karssou/DeskTopConverter
cta: Voir les détails du projet
date: 2026-06-10
stack:
  - Nuxt
  - Tauri
  - Rust
status: En ligne
website: https://github.com/Karssou/DeskTopConverter
ctaWebsite: "Télécharger l'app (Windows)"
---

## Pourquoi ce projet ?

Durant beaucoup de projets, j'ai constamment eu besoins de convertisseurs pour des tas de projets différents avec des tas de formats différents (OBJ, FBX, AVIF, JPG, PNG, SVG, FAVICON, ect...). Mais à chaque fois les convertisseurs me décevaient : trop de pubs, trop lent, devoir envoyés des dizaines de Mb en ligne, ou alors un résultats qui laissaient à désirer. Et je me suis alors dit que je devais remédier à ce problèmes, et je ne savais malheureusement pas ce qui m'attendait....

## Les objectifs

Les objectifs au début étaient simples :

- Créer une interface desktop intuitive et rapide
- Convertir les fichiers dans le format désiré
- Pouvoir les récupérer directement sans avoir à les téléchargés
- Et que le tout reste en local

Au fur et à mesure du développement, de nouveaux objectifs sont apparus :

- créer une architecture facilement extensible pour préparer le terrain pour de futures fonctionnalités (compressions, background remover et autres).

## Architecture

L'application est développée avec Tauri, ce qui permet de combiner une interface web avec Nuxt avec les performances natives de Rust, parfaite pour le cas d'utilisation.

Toute la logique de conversion est isolée dans un moteur indépendant reposant sur plusieurs abstractions :

Une pipeline qui s'occupe de gérer l'empilement des différents outils comme le décodage, la conversion, et l'encodage dans le format souhaité.
Les outils (fonctionnalités) ont chacun leur fichiers avec leur trait. La même chose pour les encodeur, et les décodeurs.
Cette organisation permet d'ajouter un nouveau format avec un impact minimal sur le reste du projet et de nouveaux outils / fonctionnalités.

## Les défis

Ce projet m'a confronté à de nombreux défis techniques.

Le premier défi a été la conception d'une architecture réellement extensible. Au lieu d'accumuler des conditions (if ou match) partout dans le code, comme le faisait la première version, j'ai progressivement mis en place une architecture orientée traits qui permet d'ajouter facilement de nouveaux convertisseurs.

L'intégration de certains formats s'est également révélée plus complexe que prévu. Des formats comme AVIF nécessitent des bibliothèques spécialisées et des dépendances natives, tandis que d'autres demandent de gérer correctement leurs métadonnées ou leurs paramètres de compression.

## Les fonctionnalités

Aujourd'hui, l'application propose notamment :

- conversion locale de fichiers sans envoi sur Internet
- gestion de la qualité de compression lorsque le format le permet
- interface desktop moderne et réactive

Le projet continue d'évoluer avec l'ajout progressif de nouveaux convertisseurs et de nouvelles fonctionnalités.

## Ce que j'ai appris

Ce projet est probablement celui qui m'a le plus fait progresser en Rust. Au-delà de la technique, ce projet m'a surtout appris qu'un logiciel qui paraît simple en apparence cache souvent une quantité importante de décisions d'architecture, d'optimisations et de compromis.Ce projet est probablement celui qui m'a le plus fait progresser en Rust.
