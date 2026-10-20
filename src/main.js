const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const nav = document.getElementById("nav");
const toggle = document.getElementById("nav-toggle");
const links = document.querySelectorAll(".nav-links a");

// ---------- Menú móvil ----------
const setMenu = (open) => {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
links.forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

// ---------- Hero: título palabra por palabra ----------
const hero = document.getElementById("hero");
const title = document.getElementById("hero-title");
let wordIndex = 0;
const splitWords = (node) => {
  [...node.childNodes].forEach((child) => {
    if (child.nodeType !== Node.TEXT_NODE) return splitWords(child);
    const frag = document.createDocumentFragment();
    child.textContent.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) return frag.append(" ");
      const w = document.createElement("span");
      w.className = "w";
      const inner = document.createElement("span");
      inner.style.setProperty("--i", wordIndex++);
      inner.textContent = part;
      w.append(inner);
      frag.append(w);
    });
    child.replaceWith(frag);
  });
};
title.setAttribute("aria-label", title.textContent);
splitWords(title);
requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add("is-ready")));

// ---------- Hero: el teléfono se inclina siguiendo el puntero ----------
const device = document.getElementById("hero-device");
if (!reduced && matchMedia("(hover: hover)").matches) {
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    device.style.setProperty("--ry", `${(x * 16).toFixed(2)}deg`);
    device.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
  });
  hero.addEventListener("pointerleave", () => {
    device.style.setProperty("--ry", "0deg");
    device.style.setProperty("--rx", "0deg");
  });
}

// ---------- Aparición escalonada ----------
const reveals = document.querySelectorAll(".reveal");
reveals.forEach((el) => {
  const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
  el.style.setProperty("--d", `${Math.min(siblings.indexOf(el), 6) * 0.07}s`);
});
const revealObs = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      revealObs.unobserve(e.target);
    }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
reveals.forEach((el) => revealObs.observe(el));

// ---------- Link activo según la sección visible ----------
const sections = [...links].map((a) => document.querySelector(a.getAttribute("href")));
const spy = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${e.target.id}`));
    }),
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => s && spy.observe(s));

// ---------- Contadores ----------
const countObs = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      countObs.unobserve(e.target);
      const el = e.target;
      const [, num, suffix] = el.textContent.match(/^(\d+)(.*)$/) ?? [];
      if (!num) return;
      const target = Number(num);
      const start = performance.now();
      const step = (now) => {
        const p = Math.min(Math.max((now - start) / 1400, 0), 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }),
  { threshold: 0.6 }
);
if (!reduced) document.querySelectorAll("[data-count]").forEach((c) => countObs.observe(c));

// ---------- Carruseles infinitos: duplicamos el contenido ----------
document.querySelectorAll("[data-loop]").forEach((track) => {
  [...track.children].forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.append(clone);
  });
});

// ---------- Luz que sigue al cursor ----------
document.querySelectorAll(".card, .hcard").forEach((card) =>
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  })
);

// ---------- Tarjetas apiladas ----------
const scards = [...document.querySelectorAll(".scard")];
scards.forEach((c, i) => c.style.setProperty("--i", i));

// ---------- Proceso: carrusel horizontal ----------
const hs = document.getElementById("proceso");
const hsTrack = document.getElementById("hs-track");
const hsViewport = document.getElementById("hs-viewport");
const hsBar = document.getElementById("hs-bar");
const hsCount = document.getElementById("hs-count");
const hcards = hsTrack.children.length;
const pinMQ = matchMedia("(min-width: 901px)");
let hsDistance = 0;

const setMeter = (p) => {
  hsBar.style.setProperty("--p", Math.max(1 / hcards, p));
  hsCount.textContent = String(Math.min(hcards, Math.floor(p * (hcards - 1)) + 1)).padStart(2, "0");
};

const layoutHs = () => {
  hsTrack.style.transform = "";
  hsDistance = Math.max(0, hsTrack.scrollWidth - innerWidth);
  const pinned = pinMQ.matches && !reduced && hsDistance > 0;
  hs.classList.toggle("is-pinned", pinned);
  hs.style.height = pinned ? `${innerHeight + hsDistance}px` : "";
};

hsViewport.addEventListener(
  "scroll",
  () => {
    if (hs.classList.contains("is-pinned")) return;
    const max = hsViewport.scrollWidth - hsViewport.clientWidth;
    setMeter(max > 0 ? hsViewport.scrollLeft / max : 0);
  },
  { passive: true }
);

// ---------- Bucle de scroll: progreso, nav, apilado y horizontal ----------
const progress = document.getElementById("progress");
const mbar = document.querySelector(".mbar");
let ticking = false;

const onScroll = () => {
  ticking = false;
  const y = scrollY;
  const vh = innerHeight;
  const max = document.documentElement.scrollHeight - vh;

  progress.style.setProperty("--p", max > 0 ? y / max : 0);
  nav.classList.toggle("is-scrolled", y > 24);
  mbar.classList.toggle("is-show", y > vh * 0.6);

  if (reduced) return;

  scards.forEach((card, i) => {
    const next = scards[i + 1];
    if (!next) return;
    const cr = card.getBoundingClientRect();
    const nr = next.getBoundingClientRect();
    const overlap = Math.min(1, Math.max(0, (cr.bottom - nr.top) / cr.height));
    card.style.setProperty("--s", (1 - overlap * 0.06).toFixed(4));
    card.style.setProperty("--b", (1 - overlap * 0.12).toFixed(4));
  });

  if (hs.classList.contains("is-pinned")) {
    const top = hs.getBoundingClientRect().top;
    const p = hsDistance > 0 ? Math.min(1, Math.max(0, -top / hsDistance)) : 0;
    hsTrack.style.transform = `translate3d(${(-p * hsDistance).toFixed(1)}px, 0, 0)`;
    setMeter(p);
  }
};

const requestTick = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(onScroll);
};

const relayout = () => {
  layoutHs();
  requestTick();
};

addEventListener("scroll", requestTick, { passive: true });
addEventListener("resize", relayout);
addEventListener("load", relayout);
pinMQ.addEventListener("change", relayout);
document.fonts?.ready.then(relayout);
layoutHs();
onScroll();

document.getElementById("year").textContent = new Date().getFullYear();
