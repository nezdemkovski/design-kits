// Playdamnit design kit: icon sprite and light-DOM custom elements for Doop frames.
// Elements render into their own children (no shadow DOM), so data-doop-* attributes
// on them keep working for comments and prototype wiring.
(() => {
  const SEAL = "M92.5 50.0L91.2 52.7L88.2 55.0L85.0 57.0L83.3 58.9L83.8 61.5L85.6 64.7L87.1 68.3L86.8 71.2L84.4 73.0L80.5 73.4L76.8 73.5L74.4 74.4L73.5 76.8L73.4 80.5L73.0 84.4L71.2 86.8L68.3 87.1L64.7 85.6L61.5 83.8L58.9 83.3L57.0 85.0L55.0 88.2L52.7 91.2L50.0 92.5L47.3 91.2L45.0 88.2L43.0 85.0L41.1 83.3L38.5 83.8L35.3 85.6L31.7 87.1L28.8 86.8L27.0 84.4L26.6 80.5L26.5 76.8L25.6 74.4L23.2 73.5L19.5 73.4L15.6 73.0L13.2 71.2L12.9 68.3L14.4 64.7L16.2 61.5L16.7 58.9L15.0 57.0L11.8 55.0L8.8 52.7L7.5 50.0L8.8 47.3L11.8 45.0L15.0 43.0L16.7 41.1L16.2 38.5L14.4 35.3L12.9 31.7L13.2 28.8L15.6 27.0L19.5 26.6L23.2 26.5L25.6 25.6L26.5 23.2L26.6 19.5L27.0 15.6L28.7 13.2L31.7 12.9L35.3 14.4L38.5 16.2L41.1 16.7L43.0 15.0L45.0 11.8L47.3 8.8L50.0 7.5L52.7 8.8L55.0 11.8L57.0 15.0L58.9 16.7L61.5 16.2L64.7 14.4L68.3 12.9L71.2 13.2L73.0 15.6L73.4 19.5L73.5 23.2L74.4 25.6L76.8 26.5L80.5 26.6L84.4 27.0L86.8 28.7L87.1 31.7L85.6 35.3L83.8 38.5L83.3 41.1L85.0 43.0L88.2 45.0L91.2 47.3Z";

  // 24×24 stroke icons, matching the SF Symbols used in the app.
  const ICONS = {
    ctrl: '<path d="M7.2 7.5h9.6a4.5 4.5 0 0 1 4.4 3.6l.9 4.9a2.6 2.6 0 0 1-4.6 2.1L15.8 16H8.2l-1.7 2.1a2.6 2.6 0 0 1-4.6-2.1l.9-4.9a4.5 4.5 0 0 1 4.4-3.6Z"/><path d="M7.5 10.2v3.6M5.7 12h3.6M15.6 11h.01M17.6 13h.01"/>',
    books: '<rect x="3" y="4" width="4" height="16" rx="1"/><rect x="7" y="7" width="4" height="13" rx="1"/><path d="m13 6.6 3.4-.9 3.9 14.5-3.4.9zM3 8h4M7 10.5h4"/>',
    spark: '<path d="m10 3.5 1.5 4.6L16 9.5 11.5 11 10 15.5 8.5 11 4 9.5l4.5-1.4zM17.5 14l.7 2 2 .8-2 .7-.7 2-.8-2-2-.7 2-.8z"/>',
    updown: '<path d="m8 9.5 4-4 4 4M8 14.5l4 4 4-4"/>',
    plus: '<path d="M12 4.5v15M4.5 12h15"/>',
    back: '<path d="M15 4.5 7.5 12l7.5 7.5"/>',
    chev: '<path d="m9 5 7 7-7 7"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',
    person: '<circle cx="12" cy="8" r="3.8"/><path d="M4.8 20c1.1-3.4 3.8-5.3 7.2-5.3s6.1 1.9 7.2 5.3z"/>',
    book: '<path d="M12 6.5C10 5 7 4.6 3.5 5v13c3.5-.4 6.5 0 8.5 1.5 2-1.5 5-1.9 8.5-1.5V5C17 4.6 14 5 12 6.5zM12 6.5v13"/>',
    bubble: '<path d="M4 5.5h16V16H10l-4.5 3.5V16H4zM8 9.5h8M8 12.5h5"/>',
    flag: '<path d="M5.5 21V4M5.5 4.5h11l-2 4 2 4h-11"/>',
    award: '<circle cx="12" cy="9.5" r="5.5"/><path d="m9 14.5-1 6.5 4-2 4 2-1-6.5"/>',
    star: '<path d="m12 4 2.4 5 5.4.6-4 3.7 1.1 5.4L12 16l-4.9 2.7 1.1-5.4-4-3.7 5.4-.6z"/>',
    trophy: '<path d="M7.5 4.5h9v5a4.5 4.5 0 0 1-9 0zM7.5 6.5h-3a3 3 0 0 0 3 4M16.5 6.5h3a3 3 0 0 1-3 4M12 14v3.5M8.5 20h7l-.8-2.5H9.3z"/>',
    angle: '<path d="M4.5 19.5h15M4.5 19.5 17 7M12 19.5a7.5 7.5 0 0 0-2.3-5.4"/>',
    checker: '<path d="M5.5 21V4M5.5 4.5h13v8h-13M9.8 4.5v8M14.2 4.5v8M5.5 8.5h13"/>',
    smile: '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 14a4 4 0 0 0 7 0M9 9.5h.01M15 9.5h.01"/>',
    wifi: '<path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.3a9.5 9.5 0 0 1 13 0M8.6 15.5a5 5 0 0 1 6.8 0" stroke-width="2.6"/><circle cx="12" cy="18.8" r="1.6" fill="currentColor" stroke="none"/>',
  };

  const GRADES = ["S", "A", "B", "C", "D", "F"];
  const NS = "http://www.w3.org/2000/svg";

  function injectSprite() {
    if (document.getElementById("pd-sprite")) return;
    const symbols = Object.entries(ICONS)
      .map(([id, body]) => `<symbol id="pd-${id}" viewBox="0 0 24 24">${body}</symbol>`)
      .join("");
    const sprite = document.createElementNS(NS, "svg");
    sprite.id = "pd-sprite";
    sprite.setAttribute("width", "0");
    sprite.setAttribute("height", "0");
    sprite.style.position = "absolute";
    sprite.innerHTML = `<defs><path id="pd-seal-shape" d="${SEAL}"/>${symbols}</defs>`;
    document.body.prepend(sprite);
  }

  const px = (value, fallback) => `${parseFloat(value ?? fallback)}px`;

  class Base extends HTMLElement {
    static get observedAttributes() { return this.attrs ?? []; }
    connectedCallback() { injectSprite(); this.render(); }
    attributeChangedCallback() { if (this.isConnected) this.render(); }
  }

  // <pd-icon name="books" size="22">
  customElements.define("pd-icon", class extends Base {
    static attrs = ["name", "size"];
    render() {
      const size = px(this.getAttribute("size"), 22);
      this.style.width = this.style.height = size;
      this.innerHTML = `<svg viewBox="0 0 24 24"><use href="#pd-${this.getAttribute("name")}"/></svg>`;
    }
  });

  // <pd-seal grade="A" size="34" rim>   rim = artwork outline, for seals on covers
  customElements.define("pd-seal", class extends Base {
    static attrs = ["grade", "size", "rim"];
    render() {
      const grade = (this.getAttribute("grade") ?? "").toUpperCase();
      const fill = GRADES.includes(grade) ? `var(--pd-grade-${grade.toLowerCase()})` : "var(--pd-fill-strong)";
      const size = px(this.getAttribute("size"), 28);
      const rim = this.hasAttribute("rim")
        ? '<use href="#pd-seal-shape" fill="none" stroke="var(--pd-artwork-rim)" stroke-width="14" stroke-linejoin="round"/>'
        : "";
      this.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 100 100">${rim}<use href="#pd-seal-shape" fill="${fill}" stroke="var(--pd-grade-ink)" stroke-width="8" stroke-linejoin="round"/><text x="50" y="52">${grade}</text></svg>`;
    }
  });

  // <pd-status-bar time="12:58">
  customElements.define("pd-status-bar", class extends Base {
    static attrs = ["time"];
    render() {
      this.innerHTML = `<span>${this.getAttribute("time") ?? "9:41"}</span><span class="r"><span class="dots"><i></i><i></i><i></i><i></i></span><pd-icon name="wifi" size="19"></pd-icon><span class="bat"></span></span>`;
    }
  });

  // <pd-cover igdb="co4jni" grade="A" width="104">   or src="…" for any image
  customElements.define("pd-cover", class extends Base {
    static attrs = ["igdb", "src", "grade", "width", "seal-size"];
    render() {
      const id = this.getAttribute("igdb");
      const src = id ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${id}.jpg` : this.getAttribute("src");
      if (this.hasAttribute("width")) this.style.width = px(this.getAttribute("width"));
      const grade = this.getAttribute("grade");
      const width = this.getBoundingClientRect().width || parseFloat(this.getAttribute("width") ?? 104);
      const sealSize = this.getAttribute("seal-size") ?? (width >= 90 ? 34 : 28);
      this.innerHTML = `<img src="${src}" alt="">${grade ? `<pd-seal grade="${grade}" size="${sealSize}" rim></pd-seal>` : ""}`;
    }
  });
})();
