// ===== RADAR DE PERSONALIDAD (5 ejes, SVG puro, sin librerías) =====
const ejesRadar = [
    { sigla: "CUR", nombre: "Curiosidad",       desc: "ganas de probar cosas nuevas" },
    { sigla: "RES", nombre: "Responsabilidad",  desc: "constancia y disciplina" },
    { sigla: "SOC", nombre: "Sociabilidad",     desc: "comodidad con la gente" },
    { sigla: "AMB", nombre: "Amabilidad",       desc: "empatía y cuidado por los demás" },
    { sigla: "EST", nombre: "Estabilidad",      desc: "calma bajo presión" }
];

// valores: { CUR: 0-10, RES: 0-10, SOC: 0-10, AMB: 0-10, EST: 0-10 }
function dibujarRadar(valores, contenedor = document.querySelector(".res-radar")) {
    const C = 200, R = 120, NIVELES = 5, MAX = 10;   // centro, radio máximo, anillos, valor máximo
    const n = ejesRadar.length;
    // ángulo de cada eje: arranca arriba y avanza en sentido horario
    const punto = (i, radio) => {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
        return [C + radio * Math.cos(a), C + radio * Math.sin(a)];
    };
    const poligono = (radio) =>
        ejesRadar.map((_, i) => punto(i, radio).join(",")).join(" ");

    let svg = `<svg viewBox="0 45 400 300" role="img" aria-label="Radar de personalidad" xmlns="http://www.w3.org/2000/svg">`;

    // anillos de fondo
    for (let k = 1; k <= NIVELES; k++) {
        svg += `<polygon points="${poligono((R * k) / NIVELES)}" class="radar-anillo"/>`;
    }
    // ejes
    ejesRadar.forEach((_, i) => {
        const [x, y] = punto(i, R);
        svg += `<line x1="${C}" y1="${C}" x2="${x}" y2="${y}" class="radar-eje"/>`;
    });
    // forma del usuario
    const pts = ejesRadar.map((e, i) => {
        const v = Math.max(0, Math.min(MAX, valores[e.sigla] || 0));
        return punto(i, (R * v) / MAX);
    });
    svg += `<polygon points="${pts.map(p => p.join(",")).join(" ")}" class="radar-forma"/>`;
    pts.forEach(([x, y]) => { svg += `<circle cx="${x}" cy="${y}" r="4" class="radar-punto"/>`; });
    // siglas
    ejesRadar.forEach((e, i) => {
        const [x, y] = punto(i, R + 26);
        svg += `<text x="${x}" y="${y}" class="radar-sigla" text-anchor="middle" dominant-baseline="middle">${e.sigla}</text>`;
    });
    svg += `</svg>`;

    // leyenda
    const leyenda = ejesRadar
        .map(e => `<li><strong>${e.sigla}:</strong> ${e.nombre}, ${e.desc}</li>`)
        .join("");

    contenedor.innerHTML = svg + `<ul class="radar-leyenda">${leyenda}</ul>`;

    ajustarDuplaMovil();
}

// En celular la dupla ideal se muestra siempre abierta (no hace falta tocar nada);
// en escritorio vuelve a ser el botón desplegable.
function ajustarDuplaMovil() {
    const dupla = document.querySelector(".res-dupla");
    const movil = window.matchMedia("(max-width: 600px)");
    dupla.open = movil.matches;
    movil.addEventListener("change", (e) => { dupla.open = e.matches; });
}