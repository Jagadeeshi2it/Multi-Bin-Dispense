# Ally UI — Design System

Ally UI is the design system behind **Ally**, a healthcare management platform for medical ordering, inventory management, and clinical workflows. It serves pharmacists, GPO (Group Purchasing Organization) managers, and clinical staff. The system is **light-theme**, blue-led, and built to feel **trustworthy, accessible, and calm** under high-stakes clinical work.

Two product surfaces are represented:
- **Ally GPO** — the group-purchasing / medical ordering + inventory web app (primary surface).
- **Ally IQ** — the analytics / intelligence companion surface (shares the same foundations).

## Sources

- **Figma:** "Ally UI (WIP)" — the binding source of truth. Foundations live in the `Color-Tokens`, `Typography`, and `Storybook-Tokens` pages; components in `Button`, `Input`, `Badge`, `Checkbox`, `Radio-Button`, `Toggle`, `Dropdown`, `Date`, `Text-Area`, `Tool-Tip`, and `Icons-WIP`. (This file was mounted read-only at build time; the reader may not have access — request the original `.fig` if needed.)
- Brand assets (logo, domain icons) were extracted from the Figma and live in `assets/`.

## Brand at a glance

- **Name / wordmark:** AllyGPO. Reverses to white on Dark Blue 950; brand blue **#095192** for on-light contexts.
- **Primary color:** Dark Blue 500 `#095192` — buttons, nav, links, active states.
- **Type:** Inter is the sole typeface, used at two weights only (Regular 400 / Medium 500). Hierarchy comes from size, not extra weights or a second face.
- **Shape language:** 4px workhorse radius; pill for badges & toggles; restrained cool-tinted shadows.

---

## CONTENT FUNDAMENTALS

**Voice.** Clinical-professional but plain. Ally talks like a competent colleague at the pharmacy counter — direct, unfussy, never chatty. The reader is a busy professional, so copy gets out of the way.

- **Person & address:** Address the user as **you**; the product refers to itself by name ("Ally suggests…") rather than "we". Actions are imperative and verb-first: *Submit order, Save draft, Review formulary, Add facility.*
- **Casing:** **Sentence case** everywhere — buttons, labels, headers, menu items ("Submit order", not "Submit Order"). Proper nouns and product names keep their caps (Ally GPO, Mercy General). Acronyms stay upper (NDC, GPO, PO, EXP, LOT).
- **Tone:** Reassuring and precise. Confirmations are factual ("Order submitted to your GPO"), errors are specific and fixable ("Quantity must be at least 1.") — never blame the user, never joke.
- **Numbers & identifiers:** Codes are shown verbatim in Inter Regular (the *sub heading/detail* token) — `NDC 0078-0357-15`, `PO-4821-00`. Currency always two decimals (`$1,284.50`). No monospace.
- **Microcopy length:** Labels 1–3 words; helper text one short sentence; empty/disabled states say what to do next.
- **Emoji:** **None.** This is a clinical tool — status is communicated with color + dot badges and icons, never emoji.
- **Examples:** "Facility name", "Auto-reorder", "Low stock", "Backordered", "Cold-chain item — keep 2–8°C", "Updated 3 minutes ago · by J. Rivera, PharmD".

---

## VISUAL FOUNDATIONS

**Overall vibe.** Clinical, airy, blue-and-white. Lots of whitespace, hairline borders, and quiet surfaces. The interface recedes so data and decisions come forward. Nothing decorative — every element is functional.

- **Color.** A blue-led system: **Dark Blue** is the brand/primary ramp (500 `#095192`), **Blue** is the secondary/informational accent, **Steel** is the cool neutral that does most of the structural work (borders = Steel 200, app canvas = Steel 50 `#F8FAFC`, chrome), and **Gray** is the warm-neutral for text (body = Gray 950 `#25282A`). Status is a tight semantic set: **Green** success `#008774`, **Red** danger `#D9342B`, **Dark Yellow** warning `#EEC038`. Orange/Teal/Purple are reserved for categorical tags and charts. Backgrounds are flat white or Steel 50 — **no gradients.**
- **Type.** **Inter only**, at two weights: **Regular (400)** and **Medium (500)** — there is no bold, no second face, no mono. Hierarchy comes from **size**, mirroring the Figma token sheet: metric 24/32, heading 18/28, sub-heading/section 16/24, sub-heading/label & all body 14/20, caption & badge 12/16, side-nav 10/14. Medium is for titles, labels, emphasis, badges & link buttons; Regular for body, info, table cells & captions. Headings are 600 weight, body 400, emphasis 500.
- **Spacing & layout.** 4px base grid (4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48). Generous padding inside cards (16–24px). Fixed left sidebar nav + top bar is the canonical app shell; content scrolls within a max-width region.
- **Backgrounds.** No imagery, no patterns, no texture, no gradients. Surfaces are pure white cards on a Steel-50 canvas. Depth comes from hairline borders + subtle shadow, not color washes.
- **Corner radii.** 4px (`radius-sm`) is the workhorse — buttons, inputs, checkboxes. 8px for cards/menus, 12–16px for large panels, full **pill** for badges, toggles, and status chips. 2px for the smallest accents.
- **Cards.** White surface, **1px Steel-100 border**, 8px radius, `shadow-sm` (very soft, cool-tinted). Not heavy — borders carry most of the separation; shadow is a whisper.
- **Borders.** Hairline 1px. Default = Steel 200; inputs = Steel 200 → Dark Blue 500 on hover/focus; error = Red 300.
- **Shadows / elevation.** Restrained and cool-tinted (navy alpha, not black). `xs` for buttons, `sm` for cards, `md` for menus/tooltips, `lg` for modals. No glow, no large diffuse shadows.
- **Focus & a11y.** Visible focus ring = Dark Blue 400 @ 40% as a 3px outer ring. Hit targets ≥ 40px on controls. Contrast tuned for clinical lighting.
- **Hover states.** Primary buttons darken (500 → 600 → 700 on press). Outline/ghost buttons fill with Dark Blue 100 tint. List/menu rows fill with Steel 50; selected rows tint Blue 50 with Dark Blue 500 text.
- **Press states.** Color-shift only (one ramp step darker) — **no shrink/scale transforms.** This is a precise tool, not a playful one.
- **Animation.** Minimal and fast: 120–180ms, `cubic-bezier(0.2,0,0,1)` standard ease. Toggles slide, menus fade/translate a few px, focus rings appear instantly. **No bounces, no infinite loops, no decorative motion.**
- **Transparency / blur.** Used sparingly — modal scrims (navy alpha), focus rings. No frosted-glass aesthetic.

---

## ICONOGRAPHY

- **UI icon set:** **Remix Icon** (line style, 24px, ~1.8px stroke). Names in the Figma follow Remix conventions (`search-line`, `settings-line`, `arrow-right-s-line`). In HTML, link Remix Icon from CDN: `https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css` (the UI-kit cards use inline SVG equivalents to stay self-contained — see `preview/brand-icons.html`).
- **Domain glyphs:** A small set of bespoke SVGs for pharmacy concepts (cold-chain/refrigerated, clinic, dispense, formulary, bolus) extracted into `assets/icons-domain/`. Use these verbatim — do not redraw.
- **Style rules:** Line (outline) icons, not filled, for UI affordances; filled only for tiny status dots. Single-color, inherits `currentColor`, tinted Steel 700 in neutral chrome or Dark Blue 500 when active.
- **Emoji / unicode as icons:** Never. All iconography is SVG or the icon font.

---

## Components

Each lives in `components/<Name>/` as `<Name>.jsx` + `<Name>.d.ts` + a `@dsCard`-tagged demo, styled entirely off `colors_and_type.css` + `components.css` classes:

- **Button** — primary/outline/text/danger variants, sizes, icon-only.
- **Input**, **TextArea** — default/error/disabled states.
- **Toggle**, **Checkbox**, **Radio** — in `components/Selection/`.
- **Badge**, **BadgeProduct** — Badge [1.0]: 9 colors × filled/light/stroke × md/sm; product category chips.
- **Toast** — compact 400×56 status alert.
- **Banner** — wide left-accent alert (distinct from Toast, for page-level notices).
- **TabList**, **TabItem** — vertical list-style tab navigation, with count badge.
- **Avatar** — initials or photo, sm/md/lg, online dot.
- **DatePicker** — functional month calendar with hover/today/selected/disabled states.
- **Dropdown** — multiselect trigger + search + Select All panel.
- **Menu**, **Tooltip**, **Card** — in `components/Menu/`.
- **Divider** — renamed **ContentDivider** to match the Figma family name ("Content Divider").
- **CircleStatus**, **CounterInput**, **Pagination** — smaller utility primitives.
- **HelpButton**, **BottomActionBar**, **InputGroup**/**InputGroupAddon** — in `components/HelpButton/`, `components/BottomActionBar/`, `components/InputGroup/`.
- **GlyphIcon** — renders a glyph from `assets/icons/icon-data.js` (an intentional addition — a wrapper for the icon set, not a Figma component itself).

**Intentional additions** (no direct Figma counterpart, added because a design system needs them): `GlyphIcon` (icon-set wrapper), `Card` (generic surface, used throughout the kit’s screens but never named as its own component), `TabList`/`TabItem` (Figma's tab symbols are pre-assembled per screen with no reusable list wrapper — named to React/UI convention instead).

### Figma coverage & intentional scope

The attached "Ally UI (WIP)" file reports **407 component families**, but that count is dominated by duplication rather than distinct primitives: the same Button appears as 5+ separate component sets across WIP iterations (24 to 525 variants each), Badge appears as 10+ overlapping sets (one alone — "Badge [1.0]" — enumerates 300 variants), and a large share of the remaining families are per-icon size variants (`chevron-down`, `check`, `bell`, etc., each counted 3–4× for 14/18/24/44px) or one-off table-cell/WIP-screen sub-components (`_table-column-cell`, `_Tab Row`, Modal/Notification/Side-Panel/Product-Card WIP screens) never meant to be reusable standalone primitives.

We implemented **27 components** covering every distinct, reusable primitive family the file defines at the foundation level (buttons, inputs, selection controls, badges, alerts, navigation, overlays, utility controls) using the current/canonical variant of each rather than every legacy duplicate. **Intentionally not built:** the WIP screen-pattern families (Table, Modal, Notification, Overlay Panel, Side Panel, Product Card, Filter Panel) — these are full application screens under active design, not primitives, and belong in a UI kit recreation rather than the component library; and **Lozenge** (❤ 12 variants) — functionally identical to Badge (a colored pill tag), so it's covered by `Badge`'s `variant`/`color` props rather than duplicated as a second component. Ask to prioritize any of these if needed.

Similarly, of the kit's **1276 Figma variables**, most of the `Ungrouped` collection (748 variables) comes from unrelated token-system explorations mixed into the file (naming patterns like `action-background-*`, `main-bold-green`, fonts `Siemens Sans Pro`/`Open Sans` — none of which any Ally component references). `colors_and_type.css` instead carries a curated, hand-verified set of tokens matching what the real Button/Badge/Input/etc. components actually consume (confirmed by reading their exact Figma values), rather than importing the full unfiltered variable dump.

## Index / manifest

Root files:
- `README.md` — this file.
- `thumbnail.html` — project homepage tile.
- `colors_and_type.css` — all color primitives, semantic tokens, type scale, spacing, radii, shadows, motion. Import this first.
- `components.css` — buttons, inputs, badges, toggle, checkbox/radio, tooltip, toast, banner, tab, avatar, date picker, text area, divider, circle status, counter input, pagination, card, menu. Depends on `colors_and_type.css`.
- `assets/icons/` — `icon-data.js` (26 core UI glyphs pulled from the Figma), `GlyphIcon.jsx`/`.d.ts`, `render-icons.js` helper, `icons.html` card.
- `SKILL.md` — Agent-Skills-compatible entry point.

Folders:
- `assets/` — `logo-allygpo-white.png` + `icons-domain/*.svg`.
- `components/` — 23 reusable React components, one directory per family (see above).
- `preview/` — Design System tab cards for foundations (colors, type, spacing, brand).
- `ui_kits/ally-gpo/` — high-fidelity interactive recreation of the Ally GPO app (medical ordering + inventory).

## Font substitution note

The Figma uses **Inter** as the sole typeface, loaded here from Google Fonts. If the brand ships a licensed/self-hosted version, drop the `.woff2` files into a `fonts/` folder and swap the `@import` in `colors_and_type.css`. There is no monospace and no secondary display face; codes (NDC/HCPCS) are set in Inter Regular (the *sub heading/detail* token).
