// ===== PUNTOS POR EJE DEL RADAR =====
// Cada opción suma a uno o dos ejes (de 1 a 3 puntos):
//   CUR = Curiosidad · RES = Responsabilidad · SOC = Sociabilidad · AMB = Amabilidad · EST = Estabilidad
// La clave es el TEXTO EXACTO de la opción. Si cambiás el texto de una opción en script.js,
// cambialo también acá (la consola te avisa si alguna opción no tiene ejes).
// Las preguntas 1 a 4 (elemento, aldea, habilidad, invocación) no suman al radar:
// son de ambientación y no dicen nada real de la personalidad.

const ejesPorOpcion = {

    // 1 a 4: preguntas de ambientación, no suman al radar (vacío a propósito)
    "Fuego": { }, "Agua": { }, "Rayo": { }, "Tierra": { }, "Viento": { }, "Taijutsu": { },
    "Aldea de la hoja": { }, "Aldea de la arena": { }, "Aldea de la nube": { },
    "Aldea de la roca": { }, "Aldea de la niebla": { }, "Aldea de la lluvia": { },
    "Sharingan": { }, "Byakugan": { }, "Elemento Madera": { }, "Elemento Lava": { },
    "Elemento Hielo": { }, "Elemento Polvo": { },
    "🐸 Sapos": { }, "🐍 Serpientes": { }, "🐌 Babosas": { }, "🐕 Perros": { },
    "🐒 Monos": { }, "🐦‍⬛ Cuervos": { },

    // 5. ¿Qué harías ante una situación difícil?
    "Seguir adelante aunque sea difícil.":                              { RES: 2, EST: 1 },
    "Analizar la situación antes de actuar.":                           { EST: 2, RES: 1 },
    "Buscar una forma de superar mis límites.":                         { RES: 2, CUR: 1 },
    "Paralizarme y abandonar la situación.":                            { },

    // 6. Si la misión se pone difícil, ¿qué decisión tomarías?
    "Priorizar el éxito de la misión.":                                 { RES: 2 },
    "Priorizar la supervivencia del equipo.":                           { AMB: 3, SOC: 1 },
    "Separar el equipo en dos, uno avanza, el otro regresa.":           { EST: 2, RES: 1 },
    "Retrasar la misión para crear una estrategia que beneficie a todos.": { CUR: 2, AMB: 2 },

    // 7. ¿Qué es lo que más valoras en una persona?
    "Que nunca abandone a quienes quiere.":                             { AMB: 2, SOC: 1 },
    "Que sea capaz de mantener la calma en cualquier situación.":       { EST: 3 },
    "Que tenga una meta y esté dispuesto a hacer lo necesario para alcanzarla.": { RES: 3 },
    "Que pueda entender a los demás incluso cuando no dicen lo que sienten.":    { AMB: 2, CUR: 1 },

    // 8. Después de sufrir una derrota importante, ¿qué harías?
    "Volvería a intentarlo hasta conseguirlo.":                         { RES: 3 },
    "Analizaría mis errores antes de volver a intentarlo.":             { EST: 2, RES: 1 },
    "Me obsesionaría con superar a quien me derrotó.":                  { RES: 1 },
    "Intentaría aprender algo de la derrota y seguir adelante.":        { CUR: 2, EST: 1 },

    // 9. ¿Qué papel sueles tomar cuando trabajas con otras personas?
    "El que mantiene al grupo unido y anima a los demás.":              { SOC: 3, AMB: 2 },
    "El que observa la situación y decide cuándo intervenir.":          { EST: 2, CUR: 1 },
    "El que prefiere encargarse de su parte por su cuenta.":            { RES: 2 },
    "El que intenta enseñar o aconsejar a los demás.":                  { SOC: 2, AMB: 1 },

    // 10. Si descubrieras que alguien cercano te ha estado ocultando una verdad importante...
    "Intentaría entender por qué decidió ocultármelo.":                 { AMB: 3 },
    "Mantendría la calma y buscaría toda la información antes de reaccionar.": { EST: 3, CUR: 1 },
    "Me sentiría traicionado y exigiría saber toda la verdad.":         { SOC: 1 },
    "Probablemente ya sospecharía que había algo detrás.":              { CUR: 1, EST: 1 },

    // 11. Si tuvieras que elegir una sola forma de mejorar...
    "Entrenar hasta superar mis propios límites.":                      { RES: 3 },
    "Aprender de personas con más experiencia que yo.":                 { CUR: 2, SOC: 2 },
    "Estudiar mis debilidades y desarrollar una estrategia para compensarlas.": { RES: 2, CUR: 1 },
    "Encontrar mi propio camino, aunque tenga que hacerlo solo.":       { CUR: 2 },

    // 12. ¿Qué hacés cuando alguien subestima tus capacidades?
    "Sigo esforzándome hasta demostrarme que puedo hacerlo":            { RES: 3 },
    "No necesito demostrar nada; dejo que mis resultados hablen":       { EST: 3 },
    "Uso esa duda como motivación para superar mis límites":            { RES: 2, EST: 1 },
    "Me molesta, pero intento no dejar que me afecte":                  { EST: 2 },

    // 13. ¿Qué es lo más importante para vos al formar parte de un equipo?
    "Saber que podemos confiar unos en otros":                          { AMB: 2, SOC: 1 },
    "Que cada persona cumpla su función y aporte lo mejor":             { RES: 3 },
    "Que nadie se quede atrás cuando las cosas se complican":           { AMB: 3 },
    "Que podamos resolver cualquier problema trabajando juntos":        { SOC: 2, CUR: 1, AMB: 1 },

    // 14. Si tuvieras la oportunidad de aprender algo prohibido...
    "Lo investigaría a fondo, aunque otros no comprendan mi interés":   { CUR: 3 },
    "Intentaría descubrir sus secretos, pero sin poner a otros en peligro": { CUR: 2, AMB: 2 },
    "Me preguntaría por qué está prohibido antes de decidir":           { CUR: 2, EST: 1 },
    "No lo haría si existe la posibilidad de perjudicar a alguien":     { AMB: 3 },

    // 15. Cuando alguien que querés comete un error grave...
    "Lo ayudo a afrontar las consecuencias y a mejorar":                { AMB: 2, RES: 1, SOC: 1 },
    "Intento comprender qué lo llevó a actuar así":                     { AMB: 2, CUR: 1 },
    "Le digo la verdad, aunque sea difícil de escuchar":                { SOC: 2, RES: 1 },
    "Me quedo a su lado, pero dejo que decida cómo seguir":             { AMB: 3 },

    // 16. ¿Qué estarías dispuesto a sacrificar para alcanzar un objetivo importante?
    "Mi comodidad y mi tiempo, pero no mis principios":                 { RES: 3 },
    "Mi propia felicidad si eso protege a las personas importantes":    { AMB: 3 },
    "Casi cualquier cosa, si el conocimiento que obtengo lo justifica": { CUR: 3 },
    "Nada que me impida seguir siendo fiel a mí mismo":                 { EST: 2, RES: 1 },

    // 17. ¿Cómo solés darte cuenta de que algo no está bien?
    "Noto pequeños detalles que los demás suelen pasar por alto":       { CUR: 2, RES: 1 },
    "Percibo cambios en el ánimo o la actitud de las personas":         { AMB: 2, SOC: 1 },
    "Analizo los hechos hasta encontrar qué no encaja":                 { CUR: 1, RES: 1, EST: 1 },
    "Me doy cuenta cuando alguien necesita ayuda, aunque no lo diga":   { AMB: 3 },

    // 18. Cuando algo te sale mal a pesar de haberlo intentado todo...
    "Reviso mis errores y busco una forma mejor de hacerlo":            { RES: 2, CUR: 1 },
    "Me tomo un tiempo para recuperarme y vuelvo a intentarlo":         { EST: 2, RES: 1 },
    "Cambio de estrategia; insistir no siempre es la solución":         { CUR: 2, EST: 1 },
    "Busco entender por qué ocurrió, aunque la respuesta sea incómoda": { CUR: 2, EST: 1 }
};


// ===== SUMA Y CÁLCULO =====

const ejesUsuario = { CUR: 0, RES: 0, SOC: 0, AMB: 0, EST: 0 };

// se llama cada vez que el usuario elige una opción
function sumarEjes(opcion) {
    const ejes = ejesPorOpcion[opcion.texto];
    if (!ejes) {
        console.warn("Opción sin ejes (revisá ejes.js):", opcion.texto);
        return;
    }
    for (const eje in ejes) {
        ejesUsuario[eje] += ejes[eje];
    }
}

// devuelve { CUR, RES, SOC, AMB, EST } de 0 a 10, listo para dibujarRadar()
function calcularRadar() {
    const resultado = {};
    for (const eje in ejesUsuario) {
        // máximo posible del eje: la mejor opción de cada pregunta, sumadas
        let maximo = 0;
        preguntas.forEach(p => {
            let mejor = 0;
            p.opciones.forEach(o => {
                const e = ejesPorOpcion[o.texto];
                if (e && e[eje] > mejor) mejor = e[eje];
            });
            maximo += mejor;
        });
        // nadie puede sacar el máximo en todos los ejes a la vez, así que el "techo"
        // es una parte del máximo (así el radar aprovecha todo el rango)
        const techo = maximo * FACTOR_TECHO;
        resultado[eje] = techo > 0 ? Math.min(10, (ejesUsuario[eje] / techo) * 10) : 0;
    }
    return resultado;
}

const FACTOR_TECHO = 0.7;