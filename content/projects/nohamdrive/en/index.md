---
title: NohamDrive
cover: nohamdrive-overview.avif
description: A cloud storage alternative inspired by OneDrive, fully managed through a powerful Command Line Interface (CLI).
href: /projects/nohamdrive
github: "https://github.com/Karssou/DeskTopConverter"
cta: See details
date: 2025-12-10
stack:
  - Nuxt
  - Tauri
  - Rust
status: Online
ctaWebsite: Visit the website
website: https://nohamdrive.alexandre-larue.fr
---

## Why this project?

NohamDrive was born from a simple desire: to understand how a modern cloud storage service actually works by building one completely from scratch.

Beyond creating a simple alternative to OneDrive, I wanted to design a full-fledged application capable of handling file storage, multi-device synchronization, a modern web interface, a command-line interface (CLI), and a desktop application.

The goal was primarily educational: to explore the challenges faced by modern cloud services and understand the architectural decisions hidden behind software used on a daily basis.

## Goals

When launching the project, several objectives were defined:

- Develop a modern cloud storage platform
- Provide all essential features (_Navigation, download, upload, drag & drop_)
- Design a smooth and intuitive web interface
- Allow full use of the service via a CLI

As development progressed, the project expanded with new ambitions:

- Add a desktop application for automatic synchronization.
- Optimize performance during file transfers.
- Lay the groundwork for future features like file sharing, versioning, and client-side encryption.

## Architecture

NohamDrive relies on an architecture composed of several specialized services.

The user interface is built with **Nuxt**, while the API is constructed with **FastAPI**. Files are stored in **MinIO**, data is centralized in **PostgreSQL**, and **Redis** is used for specific features like rate limiting.

The entire system is orchestrated with **Docker**, making it easy to deploy all services.

## Challenges

This project led me to work on:

- Structuring a scalable backend architecture
- Managing object storage with MinIO
- Real-time communication between client and server
- Designing a CLI that shares the same business logic as the web interface

## Features

Today, NohamDrive notably offers:

- Advanced file management and storage
- Responsive web interface
- Command-line interface (CLI)
- Desktop app with synchronization
- User authentication
