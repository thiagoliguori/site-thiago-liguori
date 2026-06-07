# Thiago Liguori — Design System

The brand system for **thiagoliguori.com.br**, the personal site of **Dr. Thiago Liguori** — a physician, healthcare-innovation voice, and **LinkedIn Top Voice** in Brazil. The site exists to host his **portfolio** and grow his newsletter, **Carta do Doc** ("The Doc's Letter"), aimed at health-sector leaders.

> **Positioning:** *"Saúde e inovação para líderes"* — health & innovation for leaders.
> Thiago helps **líderes de saúde** (health leaders) on their growth journey through a weekly newsletter, LinkedIn courses, and mentorship.

This system is in **Brazilian Portuguese**. Copy, examples, and labels are pt-BR.

---

## Sources

This system was reverse-engineered from screenshots of the live site and portfolio (the originals are in `uploads/`):

- `uploads/shot1.png` — Home hero ("Saúde e inovação para líderes" + portrait + Top Voice badge)
- `uploads/shot2.png` — Newsletter CTA ("Quer participar? / Comece aqui"), press strip, navy about banner
- `uploads/shot3.png` — "Três formas que eu posso te ajudar" numbered-card slide (blue)
- `uploads/shot4.png` — Full navy "Carta do Doc" newsletter sign-up page
- Live site: **https://thiagoliguori.com.br**

> ⚠️ The portfolio PDF the user mentioned did not arrive in the project filesystem. If you have it, re-upload it — there may be additional brand assets (the real portrait, press logos, deck templates) worth importing.

---

## Content fundamentals — voice & tone

**Language:** Brazilian Portuguese, always. Keep diacritics correct (saúde, inovação, líderes, notícias).

**Person:** First person singular, warm and direct — Thiago speaks as himself. *"Olá, eu sou o Thiago Liguori. Eu ajudo líderes de saúde…"*, *"Três formas que **eu** posso te ajudar"*. He addresses the reader informally as **você / te** (*"posso **te** ajudar"*, *"**Comece** aqui"*).

**Tone:** Confident, practical, generous. Authority without jargon — he's a doctor translating a complex market into actionable guidance. Phrases promise utility: *"um guia prático"*, *"dicas, estratégias e recursos"*.

**Casing:** Sentence case for headlines and body. The **wordmark is the only all-caps element** (`THIAGO LIGUORI`). Buttons are sentence case (*Inscreva-se, Login, Saiba mais*).

**Numerals:** Brazilian formatting — *"1.000+ líderes"* (period as thousands separator). Lead with concrete proof (1.000+ leaders, Top Voice).

**Emoji:** None. The brand is clean and professional; the only "icon" warmth is the LinkedIn Top Voice badge.

**Recurring vocabulary:** *líderes de saúde, mercado de saúde, inovação, tecnologia, Carta do Doc, jornada de crescimento, semanal, todo domingo à tarde.*

**Example copy that "sounds right":**
- *"Insights semanais sobre o mercado de saúde, com um toque de inovação e tecnologia no caminho."*
- *"Junte-se a 1.000+ líderes em saúde na Carta do Doc para dicas, estratégias e recursos."*
- *"Todo domingo à tarde, eu compartilho um guia prático para navegar no mercado de saúde e inovação."*

---

## Visual foundations

**Overall feel:** Editorial-meets-tech. A confident off-white canvas, one decisive royal blue, deep navy for emphasis, and a heavy geometric headline face balanced by a warm serif for prose. Lots of air. No clutter, no decoration for its own sake.

**Color**
- **One accent: royal blue `#2461FF`** (`--blue-500`). It carries links, buttons, key words ("líderes"), the offerings section background, and the LinkedIn glyph. Used decisively, never diluted into many hues.
- **Deep navy `#000E33`** (`--navy-900`) for inverted sections (about banner, newsletter page, footer), often as a **radial gradient** that lightens toward `#073275` in one corner (`--wash-navy`).
- **Near-black ink `#0A0A0A`** for display headlines on light surfaces.
- **Cool off-white `#F0F1F4`** (`--gray-100`) for the hero wash and press strip.
- A cool grey ramp for text, hairlines, and muted surfaces. No warm greys.

**Type**
- **Display & UI:** a heavy, friendly geometric grotesk. Headlines run **ExtraBold/Black (800–900)** with **tight tracking (−0.02 to −0.03em)** and near-1.0 line-height. Also used for nav, buttons, badges, and the tracked all-caps wordmark.
- **Editorial body:** a warm transitional **serif** for descriptive paragraphs, leads, newsletter copy, and card descriptions — the deliberate counterpoint to the bold sans.
- ⚠️ **Font substitution:** the live site's exact faces weren't provided. This system ships **Hanken Grotesk** (display/UI) and **Lora** (serif) as close Google Fonts matches. Swap `tokens/fonts.css` for the licensed originals when available.

**Backgrounds:** Flat off-white or flat/radial navy. The only "image-like" background is the **soft blue radial glow** behind the hero portrait (`--blue-300`). No textures, no patterns, no busy gradients, no photographic full-bleeds behind text.

**Imagery:** Photographic portraits of Thiago, cooled toward the blue palette. Two treatments: (1) a tall **rounded-rectangle crop** floating on the hero glow, with the Top Voice badge overlapping it; (2) a **circular crop inside a blue gradient ring** on the newsletter page. Press mentions appear as muted grey logos in a centered strip.

**Spacing & layout:** 4px grid, generous section padding (`--section-y`, ~3.5–7rem). Centered max-width container (1200px). Two-up grids for hero and CTA. Content is calm and well-separated.

**Corner radii:** Controls (buttons, inputs, badges) are **fully pill** (`999px`). Cards and panels use **16px** (`--radius-lg`); modals 24px. Sections themselves are square-edged and full-bleed.

**Cards:** Soft, rounded (16px), with a **cool navy-tinted drop shadow** (`--shadow-md`). On the blue offerings section, cards sit on the same blue with a slightly deeper shadow rather than a different fill. No colored left-border accents, no heavy outlines.

**Shadows:** A cool, low-opacity navy-tinted elevation ramp (`--shadow-xs … xl`). The primary blue button carries a **blue glow** (`--shadow-primary`) — the one place shadow uses brand color.

**Buttons & states:**
- Primary = solid blue pill with blue glow. **Hover** → darker blue (`--blue-600`); **press** → darker still (`--blue-700`) + a 1px nudge/slight scale-down.
- Outline (Login) = hairline pill; **hover** darkens the border to ink.
- Ghost = text only; **hover** picks up a faint grey fill.
- Focus rings are soft blue halos (`box-shadow: 0 0 0 3px var(--blue-200/100)`), never harsh outlines.

**Inputs:** White pill, hairline border; **focus** turns the border blue with a soft blue halo. On navy surfaces the border drops to a subtle shadow.

**Motion:** Restrained and quick. `--dur-fast 120ms` / `--dur-base 200ms`, eased with `--ease-out` (a gentle decelerate). Fades and small lifts/nudges — no bounces, no looping decorative animation.

**Transparency & blur:** Sparingly — the login modal scrim uses a navy tint + light backdrop blur. The Top Voice badge sits on a near-opaque pale-blue pill.

---

## Iconography

The brand is **nearly icon-free** — its restraint is part of the look. There is no custom icon set and no emoji.

- The one brand glyph is the **LinkedIn mark**, used inside the **Top Voice** badge. It lives at `assets/icons/linkedin.svg` (a minimal flat rounded-square "in" in brand blue). Copy it in wherever you need the badge.
- For any **generic UI icons** a future surface needs (arrows, chevrons, social, menu), use **[Lucide](https://lucide.dev)** from CDN — a thin, rounded, modern stroke set that matches the brand's clean geometry. Keep strokes ~1.75–2px and color them with `--text-body` or `--color-primary`. *(This is a recommended default, not observed on the live site — flag if the real site uses a specific set.)*
- Press mentions (Valor Econômico, Exame, CBN, LinkedIn Notícias) appear as **their own wordmarks** in muted grey. The originals weren't provided, so the UI kit renders **type-set placeholders**; replace with the licensed logo files when available.

---

## What's in here (index / manifest)

**Root**
- `styles.css` — the single entry point consumers link. `@import`s the token files only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter so this folder works as a Claude skill.

**`tokens/`** — CSS custom properties (`@import`ed by `styles.css`)
- `fonts.css` — webfont loading (Hanken Grotesk + Lora)
- `colors.css` — blue/navy/neutral ramps + semantic aliases + washes
- `typography.css` — families, weights, fluid display sizes, scale, tracking, roles
- `spacing.css` — 4px spacing, radii, shadows, layout, controls, motion

**`guidelines/foundations/`** — Design-System-tab specimen cards (Colors, Type, Spacing, Brand).

**`assets/`** — `icons/linkedin.svg` (brand glyph). The portrait and press logos are user-supplied (drop into the kit's image slots / replace placeholders).

**`components/`** — reusable React primitives (namespace `window.DesignSystem_d7291f`):
- `buttons/` — **Button** (primary / outline / ghost / inverse; on-dark)
- `inputs/` — **Input** (pill field; on-dark; error)
- `badges/` — **Badge** (Top Voice + tags/status)
- `cards/` — **Card** (light/blue/navy) and **NumberedCard** (the offerings card)
- `brand/` — **Wordmark** (typographic logo)
- `site/` — **Navbar** and **NewsletterForm** (composed surfaces)

**`ui_kits/personal-site/`** — interactive recreation of the site: Home (hero, CTA, press, about, offerings, footer) ↔ Carta do Doc newsletter page, plus a Login modal. `index.html` is the entry; sections are factored into `Hero.jsx`, `Sections.jsx`, `NewsletterPage.jsx`, `LoginModal.jsx`, `App.jsx`.

**`slides/`** — branded sample slides (title, numbered list, big quote, newsletter) for talks & LinkedIn carousels, in the blue/navy system.

---

## Using the system

Link the one stylesheet and read components off the global namespace:

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script>const { Button, NewsletterForm } = window.DesignSystem_d7291f;</script>
```

Build with the tokens (`var(--color-primary)`, `var(--font-display)`, `var(--radius-pill)`, …) rather than hard-coded values, so everything stays on-brand.
