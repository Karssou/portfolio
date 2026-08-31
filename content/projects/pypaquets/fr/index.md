---
title: PyPaquets
cover: pypaquets-overview.png
description: Une application CLI permettant de surveiller le traffic sur le réseau.
href: /projects/pypaquets
github: https://github.com/Karssou/PyPaquets
cta: Voir les détails
date: 2026-08-30
stack:
  - Python
  - Rich
  - Scappy
status: En ligne
website: https://github.com/Karssou/PyPaquets
ctaWebsite: "Télécharger l'app"

schemaOrg:
  - "@type": WebPage
    name: "PyPaquets"
    description: "Presentation of the PyPaquet project."

  - "@type": SoftwareApplication
    name: "PyPaquet"
    applicationCategory: "UtilitiesApplication"
    operatingSystem: "Windows"
    description: "A CLI allowing you to see the ongoing traffic on your computer."
    image: "https://alexandre-larue.fr/images/projects/pypaquets-overview.avif"
    programmingLanguage:
      - "Python"
      - "Rich"
      - "Scappy"
---

## Pourquoi ce projet ?

Lors de l'étude des réseaux informatiques et de l'analyse du trafic local, l'utilisation d'outils graphiques lourds comme Wireshark peut sembler démesurée pour une simple inspection rapide du réseau. D'un autre côté, les outils en ligne de commande traditionnels comme `tcpdump` manquent de structure visuelle et de tableaux de bord interactifs en temps réel.

J'ai voulu combler ce manque en créant **PyPacket CLI** : une application terminal légère, rapide et visuelle, capable d'intercepter les paquets réseau en temps réel tout en offrant un filtrage rapide et une identification des hôtes, sans jamais quitter la ligne de commande.

> Ce projet a été développé dans le cadre de mon projet final pour le cours **CS50x** de Harvard.

## Objectifs

Les objectifs principaux initiaux étaient :

- Construire un **sniffer réseau asynchrone** qui capture le trafic en direct sans bloquer ni figer l'interface du terminal.
- Implémenter un **filtrage dynamique en ligne de commande** via BPF pour cibler des protocoles, des ports ou des IP spécifiques.
- Proposer une **résolution DNS inverse non bloquante** pour traduire automatiquement les adresses IP brutes en noms de domaine lisibles.
- Avoir une **interface terminal** utilisant une disposition en double panneau (journal du trafic en direct + classement des hôtes les plus actifs).

Au fur et me mesure du développement, d'autres objectifs sont apparus :

- Détecter et mettre en valeur les adresses réseau de la machine hôte (IPv4 et IPv6) avec un badge `Vous`.
- Intégrer des commandes d'inspection, comme la possibilité de figer l'affichage avec `ESPACE` pendant que la capture se poursuit en arrière-plan.

## Architecture

PyPacket repose sur une architecture multithread séparant la capture de paquets du rendu de l'interface utilisateur :

- **Moteur d'interception des paquets :** Propulsé par l'outil `AsyncSniffer` de Scapy, fonctionnant dans un thread en arrière-plan pour intercepter les trames réseau brutes sur les protocoles IPv4 et IPv6.
- **TUI & Gestion d'état :** Conçu avec `Rich.Live` et `Rich.Layout`. Les captures mettent à jour des structures de données sécurisées pour le multithreading (`deque` et `Counter`) afin de calculer les statistiques et de rafraîchir l'affichage à 10 images par seconde.
- **Couche de mise en cache :** Utilise le décorateur `@lru_cache` de Python sur les requêtes socket DNS inverses pour éviter les ralentissements dus à la latence réseau lors des pics de trafic.

## Fonctionnalités

- **Journal du trafic en direct :** Affichage en temps réel du protocole (TCP, UDP, ICMP), des IP source/destination et de la taille des données.
- **Filtrage BPF instantané :** Filtrage du flux de capture dès le lancement grâce à des arguments comme `--protocol`, `--port` ou `--ip`.
- **Classement Top 5 des hôtes :** Panneau latéral dynamique affichant les machines les plus actives pendant la session.
- **Contrôles interactifs :** Pression sur la touche `ESPACE` pour mettre en pause ou reprendre le rendu visuel sans perdre de paquets en arrière-plan.
- **Reconnaissance de l'hôte local :** Identification et mise en forme automatiques des adresses IPv4 et IPv6 locales de l'utilisateur.
