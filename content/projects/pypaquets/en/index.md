---
title: PyPaquets
cover: pypaquets-overview.png
description: A CLI allowing you to see the ongoing traffic on your computer.
href: /projects/pypaquets
github: https://github.com/Karssou/PyPaquets
cta: See details
date: 2026-08-30
stack:

- Python
- Rich
- Scappy
  status: Online
  website: https://github.com/Karssou/PyPaquets
  ctaWebsite: "Download App (Windows)"

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

## Why this project?

When studying computer networking and analyzing local traffic, using heavy graphical tools like Wireshark can sometimes feel like overkill for quick inspection. On the other hand, traditional CLI tools like `tcpdump` lack visual structure and real-time interactive dashboards.

I wanted to bridge this gap by building **PyPacket CLI**: a lightweight, fast, and visual terminal application capable of sniffing network interface packets in real time while offering quick filtering and host identification without leaving the command line.

> This project was developed as my Final Project for Harvard's **CS50x** course.

## Goals

The initial core objectives were:

- Build an **asynchronous network sniffer** that captures live traffic without blocking or freezing the terminal UI.
- Implement **dynamic CLI filtering** via BPF (Berkeley Packet Filters) to target specific protocols, ports, or host IPs.
- Provide **non-blocking reverse DNS resolution** to automatically map raw IP addresses to readable domain names.
- Provide a **clear terminal interface** using a double-panel layout (live traffic log + top active hosts ranking).

As development progressed, additional goals emerged:

- Detect and highlight the host machine's own network interfaces (IPv4 and IPv6) with a distinct `You` badge.
- Implement real-time user inspection controls, such as freezing the live stream with the `SPACE` key while background sniffing continues uninterrupted.

## Architecture

PyPacket relies on a multi-threaded architecture separating packet capture from UI rendering:

- **Packet Interception Engine:** Powered by Scapy's `AsyncSniffer`, running in a background thread to intercept raw network frames across both IPv4 and IPv6 protocols.
- **TUI & State Management:** Built with `Rich.Live` and `Rich.Layout`. Captures update thread-safe data structures (`deque` and `Counter`) to compute statistics and render live views at 10 FPS.
- **Caching Layer:** Utilizes Python's `@lru_cache` decorator on reverse DNS socket queries to prevent network latency bottlenecks during high-volume packet bursts.

## Features

- **Live Traffic Logging:** Real-time display of protocol (TCP, UDP, ICMP), source/destination IPs, and payload size.
- **Instant BPF Filtering:** Filter capture streams on startup using parameters like `--protocol`, `--port`, or `--ip`.
- **Top 5 Host Ranking:** Live side-panel displaying the most active network talkers during the session.
- **Interactive Controls:** Press `SPACE` to pause or resume terminal rendering without losing background packets.
- **Local Host Recognition:** Automatic identification and styling of the user's local IPv4 and IPv6 addresses.
