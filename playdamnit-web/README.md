# Playdamnit web design kit

Tokens and components for designing playdamnit.com (apps/web) on Doop, canvas
"Playdamnit Web". The site has one dark "scoreboard" theme: near-black, 1px rules, zero
radius, Archivo + Archivo Black + JetBrains Mono, red `--signal` and acid green `--done`.

## Use in a frame

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nezdemkovski/design-kits@playdamnit-web-v1/playdamnit-web/dist/tokens.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nezdemkovski/design-kits@playdamnit-web-v1/playdamnit-web/dist/kit.css">
<script src="https://cdn.jsdelivr.net/gh/nezdemkovski/design-kits@playdamnit-web-v1/playdamnit-web/dist/kit.js"></script>
```

Token names match `globals.css` exactly (`--background`, `--signal`, `--done`,
`--status-*`…), so a value in a frame maps one-to-one to the site's code.

## What's inside

- `dist/tokens.css`: the `:root` block of `apps/web/src/globals.css`. Generated, do not edit.
- `dist/kit.css`: fonts, base, the site's utilities (`num`, `eyebrow`, `panel`, `cover`)
  and classes: `pw-sidebar`/`pw-nav`, `pw-main`/`pw-column`, `pw-section`, `pw-btn`
  (`hot`, `solid`, `ghost`, `sm`), `pw-badge` (status colours), `pw-tag`, `pw-rail`,
  `pw-grid`, `pw-card`, `pw-review`, `pw-reactions`, `pw-avatar`, `pw-week`, `pw-input`,
  `pw-tabs`, `pw-dialog`, `pw-footer`.
- `dist/kit.js`: lucide icons (`<i data-lucide="house"></i>`) and
  `<pw-seal grade="F" size="32" art>`.
- `assets/`: the site's logo, brand lockup and mimic.

## Updating tokens

```bash
python3 scripts/build_tokens.py ~/Sites/playdamnit/apps/web/src/globals.css
```

Release a change by pushing a new tag (`playdamnit-web-v2`) and bumping the URLs in every frame.
