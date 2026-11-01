// Playdamnit web design kit: lucide icons and the grade seal for Doop frames.
// Icons: <i data-lucide="house"></i> (names from lucide.dev). Elements render in light DOM,
// so data-doop-* attributes on them keep working.
(() => {
  const LUCIDE = "https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js";
  const GRADES = { S: "#ff7f7f", A: "#ffbf7f", B: "#ffdf7f", C: "#ffff7f", D: "#bfff7f", F: "#7fff7f" };

  // Twelve soft lobes, the same outline as the site's GradeBadge
  const SCALLOPS = Array.from({ length: 96 }, (_, i) => {
    const a = (Math.PI * 2 * i) / 96;
    const r = 38.5 + 4 * Math.cos(12 * a);
    return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");

  // <pw-seal grade="F" size="32" art>   art = light rim for seals sitting on cover art
  customElements.define("pw-seal", class extends HTMLElement {
    static observedAttributes = ["grade", "size", "art"];
    connectedCallback() { this.render(); }
    attributeChangedCallback() { if (this.isConnected) this.render(); }
    render() {
      const grade = (this.getAttribute("grade") ?? "").toUpperCase();
      const size = parseFloat(this.getAttribute("size") ?? 32);
      const rim = this.hasAttribute("art")
        ? `<polygon points="${SCALLOPS}" fill="none" stroke="var(--foreground)" stroke-width="14" stroke-linejoin="round" opacity="0.9"/>`
        : "";
      this.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 100 100">${rim}<polygon points="${SCALLOPS}" fill="${GRADES[grade] ?? "var(--muted)"}" stroke="var(--background)" stroke-width="8" stroke-linejoin="round"/><text x="50" y="66.56" text-anchor="middle" font-size="46" fill="var(--background)">${grade}</text></svg>`;
    }
  });

  function icons() { window.lucide?.createIcons({ attrs: { "stroke-width": 2 } }); }
  if (window.lucide) icons();
  else {
    const script = document.createElement("script");
    script.src = LUCIDE;
    script.onload = icons;
    document.head.append(script);
  }
  // Icons added later (e.g. by a Doop edit) get rendered too
  new MutationObserver(() => document.querySelector("i[data-lucide]") && icons())
    .observe(document.documentElement, { childList: true, subtree: true });
})();
