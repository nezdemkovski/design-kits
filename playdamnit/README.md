# Playdamnit design kit

Shared tokens and components for the Playdamnit iOS designs on Doop
(canvas "Playdamnit iOS"). Change something here, tag a release, and every
frame that loads the kit picks it up.

## Use in a frame

```html
<html data-theme="light">  <!-- light | dark | auto (follows the OS) -->
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nezdemkovski/design-kits@playdamnit-v2/playdamnit/dist/tokens.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/nezdemkovski/design-kits@playdamnit-v2/playdamnit/dist/kit.css">
  <script src="https://cdn.jsdelivr.net/gh/nezdemkovski/design-kits@playdamnit-v2/playdamnit/dist/kit.js"></script>
</head>
```

Doop's server render (previews, exports, screenshots) is always light, so a
dark frame must set `data-theme="dark"` explicitly rather than `auto`.

## What's inside

- `dist/tokens.css`: every color from the app's `Assets.xcassets`, as
  `--pd-*` variables with light and dark values. Generated, do not edit.
- `dist/kit.css`: base page, spacing/radius tokens, derived colors (glass,
  heatmap, sheet backdrop) and component classes: `pd-glass`, `pd-circle`,
  `pd-dock`/`pd-tabs`/`pd-tab`, `pd-section`, `pd-section-header`,
  `pd-eyebrow`, `pd-pill`, `pd-chip`, `pd-card`, `pd-rail`/`pd-tile`,
  `pd-avatar`, `pd-review`, `pd-heat-0…4`, `pd-hr`.
- `dist/kit.js`: icon sprite and custom elements (light DOM, so
  `data-doop-*` attributes on them keep working):
  - `<pd-icon name="books" size="22">`
  - `<pd-seal grade="A" size="34" rim>`
  - `<pd-cover igdb="co4jni" grade="A" width="104">` (or `src="…"`)
  - `<pd-status-bar time="12:58">`
- `demo/profile.html`: a sample page; add `?theme=dark` to see dark mode.

## Updating tokens

```bash
python3 scripts/build_tokens.py ~/Apps/playdamnit-ios/Packages/PlaydamnitKit/Sources/DesignSystem/Resources/Assets.xcassets/Colors
```

## Releasing

jsDelivr caches branch URLs for up to 12 hours, so frames pin a tag. After a
change, push a new tag (`playdamnit-v2`) and bump the URLs, or purge the
cache: `https://purge.jsdelivr.net/gh/nezdemkovski/design-kits@playdamnit-v2/playdamnit/dist/kit.css`.
