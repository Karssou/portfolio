---
title: NohamDrive
cover: nohamdrive-overview.avif
description: Un projet de service de stockage cloud alternatif fun inspiré de OneDrive, entièrement pilotable via une interface en ligne de commande (CLI)
href: /projects/nohamdrive
github: "https://github.com/Karssou/DeskTopConverter"
cta: Voir les détails du projet
date: 2025-12-10
stack:
  - Nuxt
  - Tauri
  - Rust
status: En ligne
ctaWebsite: Visiter le site
website: https://nohamdrive.alexandre-larue.fr
---

## Pourquoi ce projet ?

NohamDrive est né d'une envie simple : comprendre comment fonctionne un véritable service de stockage cloud moderne en le reconstruisant de zéro.

Au-delà d'une simple alternative à OneDrive, je voulais concevoir une application complète capable de gérer le stockage de fichiers, la synchronisation entre plusieurs appareils, une interface web moderne, une interface en ligne de commande (CLI) ainsi qu'une application desktop.

L'objectif était avant tout pédagogique : explorer les problématiques que rencontrent les services cloud modernes et comprendre les choix d'architecture qui se cachent derrière un logiciel utilisé quotidiennement.

## Les objectifs

Au lancement du projet, plusieurs objectifs étaient définis :

- Développer une plateforme de stockage cloud moderne
- Avoir toutes les fonctionnalités de bases (_Navigation, téléchargement, upload, drag & drop_)
- Concevoir une interface web fluide et intuitive
- Permettre l'utilisation complète du service via une CLI

Au fil du développement, le projet a évolué avec de nouvelles ambitions :

- Ajouter une application desktop permettant la synchronisation automatique.
- Optimiser les performances lors des transferts de fichiers.
- Préparer le terrain pour de futures fonctionnalités comme le partage de fichiers, le versioning ou encore le chiffrement côté client.

## Architecture

NohamDrive repose sur une architecture composée de plusieurs services spécialisés.

L'interface utilisateur est développée avec **Nuxt**, tandis que l'API est construite avec **FastAPI**. Les fichiers sont stockés dans **MinIO**, les données sont centralisées dans **PostgreSQL**, et **Redis** est utilisé pour certaines fonctionnalités comme le rate limiting.

L'ensemble est orchestré avec **Docker**, ce qui permet de déployer facilement tous les services.

## Les défis

Le projet m'a amené à travailler sur :

- l'organisation d'une architecture backend évolutive
- la gestion du stockage objet avec MinIO
- la communication temps réel entre le client et le serveur
- la conception d'une CLI partageant la même logique métier que l'interface web.

## Les fonctionnalités

Aujourd'hui, NohamDrive propose notamment :

- stockage et gestion de fichiers poussée
- interface web responsive
- interface en ligne de commande (CLI)
- application desktop avec synchronisation
- authentification des utilisateurs
