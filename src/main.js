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

const root = document.documentElement;
const mode = reduced ? "static" : "story";
root.dataset.mode = mode;

// ---------- Link activo según la sección visible ----------
const markLink = (id) => links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`));
const sections = [...links].map((a) => document.querySelector(a.getAttribute("href")));
const spy = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && markLink(e.target.id)),
  { rootMargin: "-45% 0px -50% 0px" }
);
if (mode === "static") sections.forEach((s) => s && spy.observe(s));

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

// ---------- Tarjetas apiladas (modo estático) ----------
document.querySelectorAll(".scard").forEach((c, i) => c.style.setProperty("--i", i));

// ---------- Proceso: carrusel horizontal ----------
const hsTrack = document.getElementById("hs-track");
const hsViewport = document.getElementById("hs-viewport");
const hsBar = document.getElementById("hs-bar");
const hsCount = document.getElementById("hs-count");
const hcards = hsTrack.children.length;
const hitems = [...hsTrack.children].map((el) => ({ el, c: 0 }));
let hsDistance = 0;

const setMeter = (p) => {
  hsBar.style.setProperty("--p", Math.max(1 / hcards, p));
  hsCount.textContent = String(Math.min(hcards, Math.floor(p * (hcards - 1)) + 1)).padStart(2, "0");
};

const measureHcards = () => {
  hitems.forEach((h) => {
    const base = h.el.offsetParent === hsTrack ? 0 : hsTrack.offsetLeft;
    h.c = h.el.offsetLeft - base + h.el.offsetWidth / 2;
  });
};

hsViewport.addEventListener(
  "scroll",
  () => {
    if (mode === "story") return;
    const max = hsViewport.scrollWidth - hsViewport.clientWidth;
    setMeter(max > 0 ? hsViewport.scrollLeft / max : 0);
  },
  { passive: true }
);

// ---------- Recorrido por pantallas ----------
// Cada sección queda fija en pantalla mientras sus tarjetas entran de a una. Al terminar,
// la pantalla sube y se desvanece mientras la siguiente aparece en el mismo lugar.
// Los tiempos están en "pantallas de scroll": 1 = una altura de ventana.
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const clamp = (v) => Math.min(1, Math.max(0, v));
const seg = (v, a, b) => clamp((v - a) / (b - a));
const ease = (t) => t * t * (3 - 2 * t);

const ENTER = 0.7;
const HOLD = 0.5;
const narrowMQ = matchMedia("(max-width: 900px)");
const fine = matchMedia("(hover: hover) and (pointer: fine)");

// pile: caen sobre una pila y empujan hacia atrás a las anteriores
// fly: suben desde abajo creciendo · slide: entran desde la derecha · zoom: crecen en el lugar
const plans = {
  nosotros: () => [{ items: $$(".scard"), kind: "pile", slot: 0.6, dur: 0.5 }],
  // cada card se asienta un escalón sobre la anterior; el clic cae en la primera
  servicios: () => [{ items: $$(".card"), kind: "deck", slot: 0.62, dur: 0.45 }],
  band: () => [{ items: $$(".stats li"), kind: "slide", slot: 0.3, dur: 0.5 }],
  clientes: (narrow) =>
    narrow
      ? [{ items: [$(".case"), ...$$(".quote")], kind: "pile", slot: 0.6, dur: 0.5 }]
      : [
          { items: [$(".case")], kind: "zoom", slot: 0.45, dur: 0.5 },
          { items: $$(".quote"), kind: "pile", slot: 0.55, dur: 0.5 },
        ],
  contacto: (narrow) => [
    narrow
      ? { items: [...$$(".person"), $(".cta-panel")], kind: "pile", slot: 0.55, dur: 0.5 }
      : { items: $$(".person"), kind: "slide", slot: 0.3, dur: 0.5 },
    ...(narrow ? [] : [{ items: [$(".cta-panel")], kind: "zoom", slot: 0.4, dur: 0.5 }]),
    { items: $$(".cta-steps li"), kind: "slide", slot: 0.2, dur: 0.4 },
  ],
};

const chapters = $$(".ch").map((el, i, all) => {
  const pin = el.querySelector(".ch-pin");
  const stage = pin.firstElementChild;
  const name = el.dataset.ch;
  return {
    el, pin, stage, name,
    id: stage.id || null,
    first: i === 0,
    last: i === all.length - 1,
    fit: name !== "hero" && name !== "hs",
    items: [], piles: [], top: 0, len: 1, done: 0,
  };
});

let narrow = narrowMQ.matches;
let pinH = 0;
let drawn = -1;
let lastT = 0;
let queued = false;

// escribe una variable sólo si cambió, para no ensuciar el estilo en cada cuadro
const put = (el, k, v) => {
  const s = v.toFixed(4);
  el._v ??= {};
  if (el._v[k] === s) return;
  el._v[k] = s;
  el.style.setProperty(k, s);
};

// offsetTop ignora los transforms, así la animación no altera su propia medición
const docTop = (el) => {
  let y = 0;
  for (let n = el; n; n = n.offsetParent) y += n.offsetTop;
  return y;
};

function build() {
  narrow = narrowMQ.matches;
  chapters.forEach((ch) => {
    ch.items.forEach(({ el }) => {
      delete el.dataset.k;
      ["--t", "--depth"].forEach((k) => el.style.removeProperty(k));
      el._v = {};
    });
    ch.items = [];
    ch.piles = [];
    let a = ch.first ? 0 : ENTER;
    (plans[ch.name]?.(narrow) ?? []).forEach((g) => {
      const recs = g.items.map((el, i) => {
        el.dataset.k = g.kind;
        el.style.setProperty("--i", String(i));
        return { el, a: a + i * g.slot, dur: g.dur, t: 0 };
      });
      ch.items.push(...recs);
      if (g.kind === "pile") ch.piles.push(recs);
      a += g.items.length * g.slot;
    });
    ch.done = ch.items.reduce((m, it) => Math.max(m, it.a + it.dur), 0);
  });
}

function measure() {
  if (mode !== "story") return;
  pinH = chapters[0].pin.clientHeight;
  hsTrack.style.transform = "";
  hsDistance = Math.max(0, hsTrack.scrollWidth - innerWidth);

  chapters.forEach((ch, i) => {
    if (ch.name === "hs") ch.done = ENTER + hsDistance / pinH;
    const hold = ch.done > 0 ? HOLD : 0;
    ch.len = ch.done + hold + (ch.last ? 0 : 1);
    ch.el.style.height = `${(ch.len + 1) * pinH}px`;
    // cada pantalla arranca cuando la anterior empieza a irse: las dos comparten el mismo lugar
    ch.el.style.marginTop = i ? `${-2 * pinH}px` : "";
    if (ch.fit) {
      const cs = getComputedStyle(ch.pin);
      const room = ch.pin.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      put(ch.stage, "--fit", Math.min(1, room / ch.stage.offsetHeight));
    }
  });
  chapters.forEach((ch) => (ch.top = docTop(ch.el)));
  measureHcards();
  update();
}

const progress = document.getElementById("progress");
const mbar = document.querySelector(".mbar");

function update(now) {
  queued = false;
  const y = scrollY;
  const vh = innerHeight;
  const max = root.scrollHeight - vh;
  progress.style.setProperty("--p", max > 0 ? y / max : 0);
  nav.classList.toggle("is-scrolled", y > 24);
  mbar.classList.toggle("is-show", y > vh * 0.6);
  if (mode !== "story") return;

  // con mouse la rueda salta de a pasos: la animación sigue al scroll con un poco de inercia
  if (typeof now !== "number" || drawn < 0 || !fine.matches) {
    drawn = y;
  } else {
    const dt = Math.min(50, now - lastT || 16);
    drawn += (y - drawn) * (1 - Math.exp(-dt / 110));
    if (Math.abs(y - drawn) < 0.5) drawn = y;
  }
  lastT = typeof now === "number" ? now : 0;
  if (drawn !== y) requestTick();

  let active = null;
  chapters.forEach((ch) => {
    const v = (drawn - ch.top) / pinH;
    const enter = ch.first ? 1 : ease(seg(v, 0, ENTER));
    const leave = ch.last ? 0 : seg(v, ch.len - 1, ch.len);
    const on = enter > 0.5 && leave < 0.5;
    put(ch.el, "--enter", enter);
    put(ch.el, "--leave", leave);
    ch.el.classList.toggle("is-on", on);
    if (on && ch.id) active = ch.id;

    ch.items.forEach((it) => {
      it.t = ease(seg(v, it.a, it.a + it.dur));
      put(it.el, "--t", it.t);
      if (it.el.dataset.k === "deck") it.el.style.pointerEvents = it.t > 0.08 ? "auto" : "none";
    });
    ch.piles.forEach((recs) => {
      let above = 0;
      for (let i = recs.length - 1; i >= 0; i--) {
        put(recs[i].el, "--depth", above);
        above += recs[i].t;
      }
    });

    if (ch.name === "hs") {
      const p = ch.done > ENTER ? seg(v, ENTER, ch.done) : 0;
      const shift = -p * hsDistance;
      hsTrack.style.transform = `translate3d(${shift.toFixed(1)}px, 0, 0)`;
      setMeter(p);
      // coverflow: la tarjeta más cercana al centro queda al frente
      const half = innerWidth / 2;
      hitems.forEach((h) => {
        const d = Math.min(1, Math.max(-1, (h.c + shift - half) / half));
        put(h.el, "--d", d);
        put(h.el, "--k", Math.abs(d));
      });
    }
  });
  if (active) markLink(active);
}

const requestTick = () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(update);
};

// los links del menú llevan al punto del recorrido donde esa pantalla ya está completa
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || mode !== "story" || a.hash.length < 2) return;
  const target = document.querySelector(a.hash);
  const ch = chapters.find((c) => c.el.contains(target));
  if (!ch) return;
  e.preventDefault();
  // Servicios abre en la primera card (Gestión ordenada), no con la pila ya armada
  const card = ch.name === "servicios"
    ? ch.items.find((it) => it.el === target || it.el.contains(target)) ?? ch.items[0]
    : null;
  const at = card ? card.a + card.dur : ch.done;
  scrollTo({ top: ch.top + at * pinH, behavior: "smooth" });
});

// en el celular la barra del navegador dispara "resize" al scrollear:
// sólo se vuelve a medir si de verdad cambió el ancho o el alto de la pantalla
let lastW = innerWidth;
let lastH = 0;
addEventListener("resize", () => {
  if (mode !== "story") return requestTick();
  const h = chapters[0].pin.clientHeight;
  if (innerWidth === lastW && h === lastH) return;
  lastW = innerWidth;
  lastH = h;
  if (narrowMQ.matches !== narrow) build();
  measure();
});
addEventListener("scroll", requestTick, { passive: true });
addEventListener("load", measure);
document.fonts?.ready.then(measure);

if (mode === "story") build();
measure();
update();

document.getElementById("year").textContent = new Date().getFullYear();

