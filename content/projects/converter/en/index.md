---
title: Desktop Converter
cover: converter-overview.avif
description: A desktop application allowing you to convert many files.
href: /projects/converter
github: https://github.com/Karssou/DeskTopConverter
cta: See details
date: 2026-06-10
stack:
  - Nuxt
  - Tauri
  - Rust
status: Online
website: https://github.com/Karssou/DeskTopConverter
ctaWebsite: "Download App (Windows)"
---

## Why this project?

Across many projects, I constantly needed converters for all kinds of work with all kinds of formats (**OBJ, FBX, AVIF, JPG, PNG, SVG, FAVICON**, etc.). But every single time, existing converters let me down: **too many ads**, **too slow**, **having to upload dozens of megabytes online**, or simply disappointing results.

> So I told myself I needed to solve this problem—and unfortunately, I had no idea what I was getting into...

## Goals

The initial goals were simple:

- Create an **intuitive** and **fast** desktop interface
- Convert files into the desired format
- Get the converted files directly without having to download them from the web
- Keep everything **100% local**

As development progressed, new goals emerged:

- Build an **easily extensible** architecture to lay the groundwork for future features (_compression, background removal, and more_).

## Architecture

The app is built with **Tauri**, combining a **Nuxt** web interface with the native performance of **Rust**—the perfect fit for this use case.

All the conversion logic is isolated inside an **independent engine** built on several abstractions:

- A **pipeline** that manages stacking different tools, such as decoding, converting, and encoding into the desired format.
- Individual **tools (features)**, each with their own file and trait implementation.
- The same approach for **encoders** and **decoders**.

This setup makes it possible to add new formats or features with **minimal impact** on the rest of the codebase.

## Challenges

This project pushed me to face numerous technical challenges.

The primary hurdle was designing a **truly extensible architecture**. Instead of piling up conditions (_if_ or _match_ statements) everywhere like in the first version, I gradually transitioned to a **trait-oriented** structure that makes adding new converters straightforward.

Integrating certain file formats also proved much trickier than anticipated. Formats like **AVIF** required specialized libraries and native dependencies, while others demanded careful handling of **metadata** and **compression parameters**.

## Features

Today, the app offers:

- Local file conversion **without sending data over the internet**
- **Compression quality** settings when supported by the format
- A **modern** and **responsive** desktop interface

The project keeps evolving with the gradual addition of new converters and features.

## What I learned

This is probably the project that made me grow the most in **Rust**.

Beyond the technical skills, it taught me that software appearing simple on the surface often hides a vast amount of **architectural decisions**, **optimizations**, and **trade-offs**.
