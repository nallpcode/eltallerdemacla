/* =========================================================
   El Taller de Macla — Interacciones
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Íconos ---------- */
  const ICON = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    heart: '<svg viewBox="0 0 24 24" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.3-9.3C1.4 7.8 3.6 4.5 7 4.5c2.1 0 3.9 1.2 5 3 1.1-1.8 2.9-3 5-3 3.4 0 5.6 3.3 4.3 6.7-1.8 4.7-9.3 9.3-9.3 9.3z"/></svg>'
  };

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const precio = (n) => `${CONFIG.moneda} ${Number(n).toFixed(2)}`;
  const byId = (id) => PRODUCTOS.find((p) => p.id === id);
  const sinTildes = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  /* ---------- Mensajes de WhatsApp (sin emojis para que se vean bien en todos los equipos) ---------- */
  const waLink = (texto) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;

  const MSG = {
    general: () =>
      "¡Hola, Macla!\n" +
      "Vengo de su página web y me encantaron sus creaciones artesanales. " +
      "¿Me podrían brindar más información, por favor?",

    producto: (p) =>
      "¡Hola, Macla!\n" +
      `Deseo consultar sobre la *${p.nombre}* (${precio(p.precio)}).\n` +
      (p.agotado
        ? "Vi que por ahora está agotada y me encantaría saber si podrían elaborarla nuevamente para mí. "
        : "Me enamoré de esta pieza y me encantaría saber si está disponible y cómo puedo adquirirla. ") +
      "¡Muchas gracias!",

    seleccion: (items) => {
      const total = items.reduce((t, p) => t + p.precio, 0);
      return (
        "¡Hola, Macla!\n" +
        "Deseo consultar sobre estas piezas que elegí con mucho cariño en su página:\n\n" +
        items.map((p) => `- ${p.nombre}: ${precio(p.precio)}`).join("\n") +
        `\n\nTotal referencial: *${precio(total)}*\n\n` +
        "¿Me podrían confirmar su disponibilidad y la forma de entrega? ¡Muchas gracias!"
      );
    }
  };

  /* ---------- Enlaces y datos generales ---------- */
  $$("[data-wa]").forEach((a) => {
    a.href = waLink(MSG.general());
    a.target = "_blank";
    a.rel = "noopener";
  });
  $$("[data-ig]").forEach((a) => { a.href = CONFIG.instagram; a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-tt]").forEach((a) => { a.href = CONFIG.tiktok; a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-tel]").forEach((el) => (el.textContent = CONFIG.telefonoVisible));
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  $$("[data-cfg]").forEach((el) => (el.textContent = CONFIG[el.dataset.cfg] || ""));
  const CLAVES = Object.keys(COLECCIONES);

  // Enlaces a colecciones en el pie de página (se generan desde data.js)
  $$("[data-colecciones]").forEach((li) => {
    li.outerHTML = CLAVES.map((k) => `<li><a href="productos.html#${k}">${COLECCIONES[k].nombre}</a></li>`).join("");
  });

  // Tarjetas de colecciones en el Inicio
  const gridCol = $("#colecciones-grid");
  if (gridCol) {
    gridCol.innerHTML = CLAVES.map((k) => {
      const c = COLECCIONES[k];
      const e = c.encuadre || {};
      const vars = [
        e.zoom ? `--zoom:${e.zoom}` : "",
        e.origen ? `--origen:${e.origen}` : "",
        e.pos ? `--pos:${e.pos}` : ""
      ].filter(Boolean).join(";");
      return `
        <a class="collection reveal" href="productos.html#${k}">
          <div class="media"><img src="${c.portada}" alt="Colección ${c.nombre}" loading="lazy" style="${vars}"></div>
          <div class="info">
            <h3>${c.nombre}</h3>
            <p>${c.lema}</p>
            <span class="link-heart">Ver colección ${ICON.heart}</span>
          </div>
        </a>`;
    }).join("");
  }

  /* ---------- Carrusel de banners (Inicio) ---------- */
  const slider = $(".hero-slider");
  if (slider) {
    const slides = $$(".slide", slider);
    const dotsBox = $(".slider-dots", slider);
    let actual = 0;
    let timer;
    dotsBox.innerHTML = slides.map((_, i) => `<button type="button" aria-label="Ver banner ${i + 1}"></button>`).join("");
    const dots = $$("button", dotsBox);
    const mostrar = (i) => {
      actual = (i + slides.length) % slides.length;
      slides.forEach((s, j) => {
        s.classList.toggle("is-active", j === actual);
        s.setAttribute("aria-hidden", j !== actual);
        $$("a", s).forEach((a) => (a.tabIndex = j === actual ? 0 : -1));
      });
      dots.forEach((d, j) => d.setAttribute("aria-current", j === actual));
    };
    const auto = () => {
      clearInterval(timer);
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        timer = setInterval(() => mostrar(actual + 1), 6000);
      }
    };
    dots.forEach((d, i) => d.addEventListener("click", () => { mostrar(i); auto(); }));
    slider.addEventListener("mouseenter", () => clearInterval(timer));
    slider.addEventListener("mouseleave", auto);
    // Deslizar con el dedo en celulares
    let x0 = null;
    slider.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
    slider.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) { mostrar(actual + (dx < 0 ? 1 : -1)); auto(); }
      x0 = null;
    });
    mostrar(0);
    auto();
  }

  /* ---------- Header ---------- */
  const header = $(".header");
  const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const menuBtn = $(".menu-btn");
  const nav = $(".nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open);
    });
    $$("a", nav).forEach((a) => a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }));
  }

  /* ---------- Aviso breve ---------- */
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  document.body.appendChild(toast);
  let toastTimer;
  function notify(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  /* ---------- Mi selección (guardada en el navegador) ---------- */
  const KEY = "macla-seleccion";
  let seleccion = [];
  try { seleccion = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { seleccion = []; }
  seleccion = seleccion.filter(byId);
  const guardar = () => { try { localStorage.setItem(KEY, JSON.stringify(seleccion)); } catch (e) {} };
  const enSeleccion = (id) => seleccion.includes(id);

  function toggleSeleccion(id) {
    const p = byId(id);
    if (enSeleccion(id)) {
      seleccion = seleccion.filter((x) => x !== id);
      notify(`Quitaste ${p.nombre} de tu selección`);
    } else {
      seleccion.push(id);
      notify(`${p.nombre} se añadió a tu selección ♡`);
    }
    guardar();
    sync();
  }

  document.body.insertAdjacentHTML("beforeend", `
    <div class="scrim" data-close-drawer></div>
    <aside class="drawer" aria-label="Mi selección" aria-hidden="true">
      <div class="drawer-head">
        <h2>Mi selección</h2>
        <button class="icon-btn" data-close-drawer aria-label="Cerrar">${ICON.close}</button>
      </div>
      <ul class="drawer-list"></ul>
      <div class="drawer-foot">
        <div class="total"><span>Total referencial</span><strong></strong></div>
        <a class="btn btn-wa-green" target="_blank" rel="noopener">${ICON.wa} Consultar mi selección</a>
        <small>Te responderemos por WhatsApp para confirmar disponibilidad y entrega.</small>
      </div>
    </aside>`);
  const drawer = $(".drawer");
  const scrim = $(".scrim");
  function openDrawer() {
    drawer.classList.add("open");
    scrim.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    scrim.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  }
  $$("[data-close-drawer]").forEach((b) => b.addEventListener("click", closeDrawer));
  $$("[data-open-drawer]").forEach((b) => b.addEventListener("click", openDrawer));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });

  function renderDrawer() {
    const list = $(".drawer-list", drawer);
    const foot = $(".drawer-foot", drawer);
    const items = seleccion.map(byId);
    if (!items.length) {
      list.innerHTML = `<li class="drawer-empty">
        ${ICON.heart}
        Aún no has elegido piezas.<br>Toca el corazón ♡ de las que más te gusten
        y consúltalas todas juntas por WhatsApp.<br><br>
        <a class="link-arrow" href="productos.html">Ver productos</a></li>`;
      foot.style.display = "none";
      return;
    }
    foot.style.display = "";
    list.innerHTML = items.map((p) => `
      <li>
        <img src="${p.img}" alt="${p.nombre}">
        <div><h3>${p.nombre}</h3><p>${precio(p.precio)}</p></div>
        <button class="remove" data-remove="${p.id}">Quitar</button>
      </li>`).join("");
    $(".total strong", foot).textContent = precio(items.reduce((t, p) => t + p.precio, 0));
    $("a", foot).href = waLink(MSG.seleccion(items));
    $$("[data-remove]", list).forEach((b) => b.addEventListener("click", () => toggleSeleccion(b.dataset.remove)));
  }

  function sync() {
    $$(".badge").forEach((b) => {
      b.textContent = seleccion.length;
      b.classList.toggle("show", seleccion.length > 0);
    });
    $$(".fav[data-id]").forEach((b) => {
      const on = enSeleccion(b.dataset.id);
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on);
    });
    const mf = $("[data-modal-fav]");
    if (mf && modalActual) {
      mf.textContent = enSeleccion(modalActual.id) ? "♥ En tu selección (quitar)" : "♡ Añadir a mi selección";
    }
    renderDrawer();
  }

  /* ---------- Animación al hacer scroll ---------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      }), { threshold: 0.12 })
    : null;
  function observe(root = document) {
    $$(".reveal:not(.in)", root).forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
  }

  /* ---------- Tarjeta de producto ---------- */
  function cardHTML(p) {
    return `
      <article class="card reveal${p.agotado ? " is-out" : ""}">
        <div class="card-media" tabindex="0" role="button" data-open="${p.id}" aria-label="Ver detalle de ${p.nombre}">
          <img src="${p.img}" alt="${p.nombre}" loading="lazy" width="640" height="640">
          ${p.agotado ? '<span class="tag tag-out">Agotado</span>' : p.nuevo ? '<span class="tag">Nuevo</span>' : ""}
          <span class="quick">Ver detalle</span>
          <button class="fav" data-id="${p.id}" aria-label="Añadir ${p.nombre} a mi selección" aria-pressed="false">${ICON.heart}</button>
        </div>
        <h3>${p.nombre}</h3>
        <div class="meta"><span class="dot" style="background:${p.tono}"></span>${precio(p.precio)}</div>
        <a class="btn btn-ghost" href="${waLink(MSG.producto(p))}" target="_blank" rel="noopener">${ICON.wa} Consultar</a>
      </article>`;
  }

  function bindCards(root) {
    $$("[data-open]", root).forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.target.closest(".fav")) return;
        openModal(el.dataset.open);
      });
      el.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && !e.target.closest(".fav")) {
          e.preventDefault();
          openModal(el.dataset.open);
        }
      });
    });
    $$(".fav[data-id]", root).forEach((b) => b.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSeleccion(b.dataset.id);
    }));
    observe(root);
    sync();
  }

  /* ---------- Ventana de detalle ---------- */
  let modalActual = null;
  let lista = PRODUCTOS;
  let ultimoFoco = null;
  let overlay = null;

  if (document.querySelector("#destacados, #catalogo")) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="overlay" aria-hidden="true">
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button class="modal-close" aria-label="Cerrar">${ICON.close}</button>
          <div class="modal-media"><img alt=""></div>
          <div class="modal-body">
            <span class="kicker"></span>
            <h2 id="modal-title"></h2>
            <p class="price"></p>
            <p class="desc"></p>
            <dl>
              <dt>Medidas</dt><dd data-m="medidas"></dd>
              <dt>Elaboración</dt><dd>100% artesanal, pieza única</dd>
            </dl>
            <div class="modal-actions">
              <a class="btn btn-wa-green" target="_blank" rel="noopener" data-m="wa">${ICON.wa} Consultar por WhatsApp</a>
              <button class="btn btn-outline" data-modal-fav></button>
            </div>
            <div class="modal-nav">
              <button data-step="-1">← Anterior</button>
              <button data-step="1">Siguiente →</button>
            </div>
          </div>
        </div>
      </div>`);
    overlay = $(".overlay");

    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
    $(".modal-close", overlay).addEventListener("click", closeModal);
    $("[data-modal-fav]", overlay).addEventListener("click", () => modalActual && toggleSeleccion(modalActual.id));
    $$("[data-step]", overlay).forEach((b) => b.addEventListener("click", () => {
      if (!modalActual) return;
      const src = lista.some((p) => p.id === modalActual.id) ? lista : PRODUCTOS;
      const i = src.findIndex((p) => p.id === modalActual.id);
      openModal(src[(i + Number(b.dataset.step) + src.length) % src.length].id);
    }));
    document.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("open")) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") $('[data-step="1"]', overlay).click();
      if (e.key === "ArrowLeft") $('[data-step="-1"]', overlay).click();
    });
  }

  function openModal(id) {
    const p = byId(id);
    if (!p || !overlay) return;
    if (!overlay.classList.contains("open")) ultimoFoco = document.activeElement;
    modalActual = p;
    const col = COLECCIONES[p.coleccion];
    const img = $(".modal-media img", overlay);
    img.src = p.img;
    img.alt = p.nombre;
    $(".kicker", overlay).textContent = col.nombre;
    $("#modal-title").textContent = p.nombre;
    $(".price", overlay).textContent = precio(p.precio);
    $(".desc", overlay).textContent = p.descripcion;
    $('[data-m="medidas"]', overlay).textContent = p.medidas || col.medidas;
    $('[data-m="wa"]', overlay).href = waLink(MSG.producto(p));
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    sync();
    $(".modal-close", overlay).focus();
  }
  function closeModal() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    modalActual = null;
    if (ultimoFoco) ultimoFoco.focus();
  }

  /* ---------- Inicio: destacados ---------- */
  const destacados = $("#destacados");
  if (destacados) {
    let favs = PRODUCTOS.filter((p) => p.destacado);
    if (!favs.length) favs = PRODUCTOS;
    destacados.innerHTML = favs.slice(0, 8).map(cardHTML).join("");
    bindCards(destacados);
  }

  /* ---------- Página de productos ---------- */
  const catalogo = $("#catalogo");
  if (catalogo) {
    const tabsBox = $("#tabs");
    tabsBox.innerHTML =
      `<button class="tab" role="tab" data-filter="todos">Todos</button>` +
      CLAVES.map((k) => `<button class="tab" role="tab" data-filter="${k}">${COLECCIONES[k].nombre}</button>`).join("");
    const tabs = $$(".tab", tabsBox);
    const buscador = $("#buscar");
    const intro = $("#intro-coleccion");
    const params = new URLSearchParams(location.search);
    let filtro = CLAVES.includes(location.hash.slice(1)) ? location.hash.slice(1) : "todos";

    tabs.forEach((t) => {
      const c = t.dataset.filter;
      t.addEventListener("click", () => {
        filtro = c;
        history.replaceState(null, "", c === "todos" ? location.pathname + location.search : "#" + c);
        render();
      });
    });

    $$("[data-search]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      buscador.scrollIntoView({ behavior: "smooth", block: "center" });
      buscador.focus({ preventScroll: true });
    }));

    if (params.get("buscar")) buscador.value = params.get("buscar");
    buscador.addEventListener("input", render);
    if (params.has("buscar")) buscador.focus();

    function render() {
      tabs.forEach((t) => t.setAttribute("aria-selected", t.dataset.filter === filtro));
      const q = sinTildes(buscador.value.trim());
      lista = PRODUCTOS.filter((p) =>
        (filtro === "todos" || p.coleccion === filtro) &&
        (!q || sinTildes(p.nombre + " " + COLECCIONES[p.coleccion].nombre).includes(q))
      );
      if (filtro === "todos") {
        intro.innerHTML = "Cada pieza está hecha a mano, con mucho amor y especial cuidado en cada detalle. <strong>Toca una foto</strong> para ver su detalle o <strong>♡</strong> para guardarla en tu selección.";
      } else {
        const col = COLECCIONES[filtro];
        intro.innerHTML = `${col.descripcion}<br><strong>Medidas:</strong> ${col.medidas}`;
      }
      const vacio = document.createElement("p");
      vacio.className = "empty";
      vacio.textContent = `No encontramos piezas con “${buscador.value}”. Prueba con otro nombre o color.`;
      catalogo.innerHTML = lista.length ? lista.map(cardHTML).join("") : vacio.outerHTML;
      bindCards(catalogo);
    }
    window.addEventListener("hashchange", () => {
      const h = location.hash.slice(1);
      if (CLAVES.includes(h)) { filtro = h; render(); }
    });
    render();
  }

  /* ---------- Libro de Reclamaciones ---------- */
  const libro = $("#form-reclamo");
  if (libro) {
    const hoy = new Date();
    const fecha = hoy.toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit", year: "numeric" });
    const codigo = `${hoy.getFullYear()}-${String(hoy.getTime()).slice(-6)}`;
    $("#lr-fecha").textContent = fecha;
    $("#lr-codigo").textContent = codigo;

    const menor = $("#lr-menor");
    const apoderado = $("#lr-apoderado-wrap");
    menor.addEventListener("change", () => {
      apoderado.hidden = !menor.checked;
      $("input", apoderado).required = menor.checked;
    });

    libro.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!libro.reportValidity()) return;
      const d = Object.fromEntries(new FormData(libro));
      const texto =
        `LIBRO DE RECLAMACIONES - ${CONFIG.nombreComercial}\n` +
        `Hoja N.° ${codigo}\nFecha: ${fecha}\n\n` +
        `1. IDENTIFICACIÓN DEL CONSUMIDOR\n` +
        `Nombre: ${d.nombre}\n${d.tipoDoc}: ${d.documento}\n` +
        `Domicilio: ${d.domicilio}\nTeléfono: ${d.telefono}\nCorreo: ${d.correo}\n` +
        (menor.checked ? `Padre, madre o apoderado: ${d.apoderado}\n` : "") +
        `\n2. IDENTIFICACIÓN DEL BIEN CONTRATADO\n` +
        `Tipo: ${d.bien}\nMonto reclamado: ${d.monto ? precio(d.monto) : "No indica"}\n` +
        `Descripción: ${d.descripcionBien}\n\n` +
        `3. DETALLE DE LA ${d.tipo.toUpperCase()}\n${d.detalle}\n\n` +
        `Pedido del consumidor:\n${d.pedido}`;

      $("#lr-resumen").textContent = texto;
      $("#lr-enviar").href = waLink(texto);
      libro.hidden = true;
      $("#lr-ok").hidden = false;
      $("#lr-ok").scrollIntoView({ behavior: "smooth", block: "start" });
      window.open(waLink(texto), "_blank", "noopener");
    });
    $("#lr-imprimir").addEventListener("click", () => window.print());
  }

  observe();
  sync();
})();
