const personajes = {
    Naruto: 0,
    Sasuke: 0,
    Kakashi: 0,
    Gaara: 0,
    Shikamaru: 0,
    Jiraiya: 0,
    Orochimaru: 0,
    Tsunade: 0,
    Sakura: 0,
    Hiruzen: 0,
    Itachi: 0,
    Rock_Lee: 0,
    Neji: 0,
    Hinata: 0,
    Choji: 0,
    Shino: 0
};

const fondos = [
    "sasuback.jpg",
    "leeback.jpg",
    "naruback.jpg",
    "itaback.jpg",
    "jiraback.jpg",
    "kashiback.jpg"
];

const preguntas = [
    {
        pregunta: "¿Qué elemento te gustaría usar en combate?",
        opciones: [
            {
                texto: "Fuego",
                puntos: {
                    Sasuke: 3,
                    Jiraiya: 2
                }
            },
            {
                texto: "Agua",
                puntos: {
                    Hinata: 3,
                    Neji: 2
                }
            },
            {
                texto: "Rayo",
                puntos: {
                    Kakashi: 3,
                    Sasuke: 2
                }
            },
            {
                texto: "Tierra",
                puntos: {
                    Choji: 2,
                    Sakura: 1,
                    Tsunade: 2
                }
            },
            {
                texto: "Viento",
                puntos: {
                    Naruto: 3,
                    Rock_Lee: 2
                }
            },
            {
                texto: "Taijutsu",
                puntos: {
                    Rock_Lee: 5
                }
            }
        ]
    },

        {
        pregunta: "¿A qué aldea te gustaría pertenecer?",
        opciones: [
            {
                texto: "Aldea de la hoja",
                puntos: {
                    Naruto: 2,
                    Jiraiya: 1,
                    Hiruzen: 2
                }
            },
            {
                texto: "Aldea de la arena",
                puntos: {
                    Gaara: 5
                }
            },
            {
                texto: "Aldea de la nube",
                puntos: {
                    Sasuke: 2,
                    Sakura: 2
                }
            },
            {
                texto: "Aldea de la roca",
                puntos: {
                    Rock_Lee: 3,
                    Kakashi: 2
                }
            },
            {
                texto: "Aldea de la niebla",
                puntos: {
                    Orochimaru: 5
                }
            },
            {
                texto: "Aldea de la lluvia",
                puntos: {
                    Orochimaru: 3,
                    Sasuke: 2
                }
            }
        ]
    },

            {
        pregunta: "¿Qué habilidad sanguínea te gustaría poseer?",
        opciones: [
            {
                texto: "Sharingan",
                puntos: {
                    Itachi: 3,
                    Sasuke: 2
                }
            },
            {
                texto: "Byakugan",
                puntos: {
                    Neji: 3,
                    Hinata: 2
                }
            },
            {
                texto: "Elemento Madera",
                puntos: {
                    Tsunade: 3,
                    Rock_Lee: 2
                }
            },
            {
                texto: "Elemento Lava",
                puntos: {
                    Sasuke: 5
                }
            },
            {
                texto: "Elemento Hielo",
                puntos: {
                    Hiruzen: 5
                }
            },
            {
                texto: "Elemento Polvo",
                puntos: {
                    Gaara: 5
                }
            }
        ]
    },

    {
            pregunta: "¿Qué pacto de invocación elegirías?",
        opciones: [
            {
                texto: "🐸 Sapos",
                puntos: {
                    Naruto: 3,
                    Jiraiya: 2
                }
            },
            {
                texto: "🐍 Serpientes",
                puntos: {
                    Orochimaru: 3,
                    Sasuke: 2
                }
            },
            {
                texto: "🐌 Babosas",
                puntos: {
                    Tsunade: 3,
                    Sakura: 2
                }
            },
            {
                texto: "🐕 Perros",
                puntos: {
                    Kakashi: 5
                }
            },
            {
                texto: "🐒 Monos",
                puntos: {
                    Hiruzen: 5
                }
            },
            {
                texto: "🐦‍⬛ Cuervos",
                puntos: {
                    Itachi: 5
                }
            }
        ]
    },

    {
        pregunta: "¿Qué harías ante una situación difícil?",
        opciones: [
            {
                texto: "Seguir adelante aunque sea difícil.",
                puntos: {
                    Naruto: 3,
                    Gaara: 1,
                    Hinata: 1
                }
            },
            {
                texto: "Analizar la situación antes de actuar.",
                puntos: {
                    Shikamaru: 3,
                    Kakashi: 1,
                    Shino: 1
                }
            },
            {
                texto: "Buscar una forma de superar mis límites.",
                puntos: {
                    Rock_Lee: 3,
                    Sasuke: 1,
                    Neji: 1
                }
            },
            {
                texto: "Paralizarme y abandonar la situación.",
                puntos:{ 
                    Hinata: 2,
                    Sakura: 2,
                    Hiruzen: 1
                }
            }
        ]
    },

    {
        pregunta: "Si la misión se pone difícil, ¿qué decisión tomarías?",
        opciones: [
            {
                texto: "Priorizar el éxito de la misión.",
                puntos: {
                    Neji: 2,
                    Gaara: 1,
                    Itachi: 2
                }
            },
            {
                texto: "Priorizar la supervivencia del equipo.",
                puntos: {
                    Naruto: 2,
                    Choji: 2,
                    Tsunade: 1
                }
            },
            {
                texto: "Separar el equipo en dos, uno avanza, el otro regresa.",
                puntos: {
                    Kakashi: 2,
                    Shikamaru: 3
                }
            },
            {
                texto: "Retrasar la misión para crear una estrategia que beneficie a todos.",
                puntos: {
                    Hiruzen: 3,
                    Shikamaru: 2
                }
            }
        ]
    },

    {
        pregunta: "¿Qué es lo que más valoras en una persona?",
        opciones: [
            {
                texto: "Que nunca abandone a quienes quiere.",
                puntos: {
                    Naruto: 2,
                    Choji: 2,
                    Hinata: 1
                }
            },
            {
                texto: "Que sea capaz de mantener la calma en cualquier situación.",
                puntos: {
                    Kakashi: 2,
                    Hinata: 2,
                    Shino: 1
                }
            },
            {
                texto: "Que tenga una meta y esté dispuesto a hacer lo necesario para alcanzarla.",
                puntos: {
                    Sasuke: 3,
                    Orochimaru: 2
                }
            },
            {
                texto: "Que pueda entender a los demás incluso cuando no dicen lo que sienten.",
                puntos: {
                    Hiruzen: 2,
                    Jiraiya: 2,
                    Hinata: 1
                }
            }
        ]
    },

    {
        pregunta: "Después de sufrir una derrota importante, ¿qué harías?",
        opciones: [
            {
                texto: "Volvería a intentarlo hasta conseguirlo.",
                puntos: {
                    Naruto: 2,
                    Rock_Lee: 2,
                    Sakura: 1
                }
            },
            {
                texto: "Analizaría mis errores antes de volver a intentarlo.",
                puntos: {
                    Shino: 2,
                    Kakashi: 2,
                    Shikamaru: 1
                }
            },
            {
                texto: "Me obsesionaría con superar a quien me derrotó.",
                puntos: {
                    Sasuke: 3,
                    Neji: 1,
                    Rock_Lee: 1
                }
            },
            {
                texto: "Intentaría aprender algo de la derrota y seguir adelante.",
                puntos: {
                    Gaara: 2,
                    Hiruzen: 2,
                    Jiraiya: 1
                }
            }
        ]
    },

    {
        pregunta: "¿Qué papel sueles tomar cuando trabajas con otras personas?",
        opciones: [
            {
                texto: "El que mantiene al grupo unido y anima a los demás.",
                puntos: {
                    Naruto: 2,
                    Choji: 2,
                    Rock_Lee: 1
                }
            },
            {
                texto: "El que observa la situación y decide cuándo intervenir.",
                puntos: {
                    Kakashi: 3,
                    Shino: 2,
                    Hinata: 1
                }
            },
            {
                texto: "El que prefiere encargarse de su parte por su cuenta.",
                puntos: {
                    Sasuke: 2,
                    Neji: 2,
                    Gaara: 1
                }
            },
            {
                texto: "El que intenta enseñar o aconsejar a los demás.",
                puntos: { 
                    Tsunade: 2,
                    Hiruzen: 2,
                    Hinata: 1
                }
            }
        ]
    },

    {
        pregunta: "Si descubrieras que alguien cercano te ha estado ocultando una verdad importante, ¿qué harías?",
        opciones: [
            {
                texto: "Intentaría entender por qué decidió ocultármelo.",
                puntos: { 
                    Hinata: 3,
                    Hiruzen: 1,
                    Choji: 1
                }
            },
            {
                texto: "Mantendría la calma y buscaría toda la información antes de reaccionar.",
                puntos: {
                    Kakashi: 3,
                    Shino: 2,
                    Shikamaru: 1
                }
            },
            {
                texto: "Me sentiría traicionado y exigiría saber toda la verdad.",
                puntos: {
                    Sasuke: 3,
                    Sakura: 2
                }
            },
            {
                texto: "Probablemente ya sospecharía que había algo detrás.",
                puntos: {
                    Itachi: 2,
                    Orochimaru: 2,
                    Kakashi: 1
                }
            }
        ]
    },

    {
        pregunta: "Si tuvieras que elegir una sola forma de mejorar, ¿cuál escogerías?",
        opciones: [
            {
                texto: "Entrenar hasta superar mis propios límites.",
                puntos: {
                    Rock_Lee: 3,
                    Naruto: 2
                }
            },
            {
                texto: "Aprender de personas con más experiencia que yo.",
                puntos: {
                    Sakura: 3,
                    Rock_Lee: 2
                }
            },
            {
                texto: "Estudiar mis debilidades y desarrollar una estrategia para compensarlas.",
                puntos: {
                    Shikamaru: 3,
                    Shino: 2
                }
            },
            {
                texto: "Encontrar mi propio camino, aunque tenga que hacerlo solo.",
                puntos: {
                    Sasuke: 2,
                    Itachi: 2,
                    Gaara: 1
                }
            }
        ]
    },

    {
        pregunta: "¿Qué hacés cuando alguien subestima tus capacidades?",
        opciones: [
            {
                texto: "Sigo esforzándome hasta demostrarme que puedo hacerlo",
                puntos: {
                    Hinata: 3,
                    Sakura: 3,
                    Rock_Lee: 2
                }
            },
            {
                texto: "No necesito demostrar nada; dejo que mis resultados hablen",
                puntos: {
                    Shino: 3,
                    Itachi: 2,
                    Kakashi: 1
                }
            },
            {
                texto: "Uso esa duda como motivación para superar mis límites",
                puntos: {
                    Sakura: 3,
                    Naruto: 2,
                    Hinata: 2
                }
            },
            {
                texto: "Me molesta, pero intento no dejar que me afecte",
                puntos: {
                    Choji: 3,
                    Hinata: 2,
                    Tsunade: 1
                }
            }
        ]
    },

    {
        pregunta: "¿Qué es lo más importante para vos al formar parte de un equipo?",
        opciones: [
            {
                texto: "Saber que podemos confiar unos en otros",
                puntos: {
                    Choji: 3,
                    Hinata: 3,
                    Naruto: 2
                }
            },
            {
                texto: "Que cada persona cumpla su función y aporte lo mejor",
                puntos: {
                    Shino: 3,
                    Sakura: 2,
                    Kakashi: 2
                }
            },
            {
                texto: "Que nadie se quede atrás cuando las cosas se complican",
                puntos: {
                    Hinata: 3,
                    Choji: 2,
                    Tsunade: 2
                }
            },
            {
                texto: "Que podamos resolver cualquier problema trabajando juntos",
                puntos: {
                    Sakura: 3,
                    Shino: 2,
                    Tsunade: 2
                }
            }
        ]
    },

    {
        pregunta: "Si tuvieras la oportunidad de aprender algo prohibido, ¿qué harías?",
        opciones: [
            {
                texto: "Lo investigaría a fondo, aunque otros no comprendan mi interés",
                puntos: {
                    Orochimaru: 4,
                    Shino: 2
                }
            },
            {
                texto: "Intentaría descubrir sus secretos, pero sin poner a otros en peligro",
                puntos: {
                    Shino: 3,
                    Sakura: 2,
                    Itachi: 1
                }
            },
            {
                texto: "Me preguntaría por qué está prohibido antes de decidir",
                puntos: {
                    Itachi: 3,
                    Tsunade: 2,
                    Kakashi: 1
                }
            },
            {
                texto: "No lo haría si existe la posibilidad de perjudicar a alguien",
                puntos: {
                    Hinata: 3,
                    Choji: 2,
                    Tsunade: 2
                }
            }
        ]
    },
    {
        pregunta: "Cuando alguien que querés comete un error grave, ¿cómo reaccionás?",
        opciones: [
            {
                texto: "Lo ayudo a afrontar las consecuencias y a mejorar",
                puntos: {
                    Tsunade: 3,
                    Sakura: 3,
                    Choji: 1
                }
            },
            {
                texto: "Intento comprender qué lo llevó a actuar así",
                puntos: {
                    Itachi: 3,
                    Hinata: 2,
                    Shino: 1
                }
            },
            {
                texto: "Le digo la verdad, aunque sea difícil de escuchar",
                puntos: {
                    Tsunade: 3,
                    Sakura: 2,
                    Shino: 2
                }
            },
            {
                texto: "Me quedo a su lado, pero dejo que decida cómo seguir",
                puntos: {
                    Choji: 3,
                    Hinata: 3,
                    Itachi: 1
                }
            }
        ]
    },
    {
        pregunta: "¿Qué estarías dispuesto a sacrificar para alcanzar un objetivo importante?",
        opciones: [
            {
                texto: "Mi comodidad y mi tiempo, pero no mis principios",
                puntos: {
                    Sakura: 3,
                    Tsunade: 2,
                    Hinata: 2
                }
            },
            {
                texto: "Mi propia felicidad si eso protege a las personas importantes",
                puntos: {
                    Itachi: 4,
                    Tsunade: 2
                }
            },
            {
                texto: "Casi cualquier cosa, si el conocimiento que obtengo lo justifica",
                puntos: {
                    Orochimaru: 4,
                    Shino: 1
                }
            },
            {
                texto: "Nada que me impida seguir siendo fiel a mí mismo",
                puntos: {
                    Choji: 3,
                    Hinata: 2,
                    Naruto: 2
                }
            }
        ]
    },
    {
        pregunta: "¿Cómo solés darte cuenta de que algo no está bien?",
        opciones: [
            {
                texto: "Noto pequeños detalles que los demás suelen pasar por alto",
                puntos: {
                    Shino: 4,
                    Itachi: 2
                }
            },
            {
                texto: "Percibo cambios en el ánimo o la actitud de las personas",
                puntos: {
                    Hinata: 3,
                    Sakura: 2,
                    Choji: 2
                }
            },
            {
                texto: "Analizo los hechos hasta encontrar qué no encaja",
                puntos: {
                    Shino: 3,
                    Sakura: 2,
                    Tsunade: 2
                }
            },
            {
                texto: "Me doy cuenta cuando alguien necesita ayuda, aunque no lo diga",
                puntos: {
                    Hinata: 3,
                    Choji: 3,
                    Tsunade: 1
                }
            }
        ]
    },
    {
        pregunta: "Cuando algo te sale mal a pesar de haberlo intentado todo, ¿qué hacés?",
        opciones: [
            {
                texto: "Reviso mis errores y busco una forma mejor de hacerlo",
                puntos: {
                    Sakura: 3,
                    Tsunade: 3,
                    Shino: 1
                }
            },
            {
                texto: "Me tomo un tiempo para recuperarme y vuelvo a intentarlo",
                puntos: {
                    Hinata: 3,
                    Choji: 2,
                    Sakura: 2
                }
            },
            {
                texto: "Cambio de estrategia; insistir no siempre es la solución",
                puntos: {
                    Shino: 3,
                    Tsunade: 2,
                    Kakashi: 2
                }
            },
            {
                texto: "Busco entender por qué ocurrió, aunque la respuesta sea incómoda",
                puntos: {
                    Orochimaru: 3,
                    Itachi: 2,
                    Sakura: 1
                }
            }
        ]
    }
];

let preguntaActual = 0;

const elementoPregunta = document.getElementById("pregunta");
const elementoRespuestas = document.getElementById("respuestas");
const elementoResultado = document.getElementById("resultado");

function sumarPuntos(puntos) {
    for (const personaje in puntos) {
        personajes[personaje] += puntos[personaje];
    }
}

function mostrarResultado() {
    let ganador = "";
    let mayorPuntaje = -1;

    for (const personaje in personajes) {
        if (personajes[personaje] > mayorPuntaje) {
            mayorPuntaje = personajes[personaje];
            ganador = personaje;
        }
    }

    document.querySelector(".contenedor").style.display = "none";

    elementoResultado.innerHTML = `
        <h2>¡Tu personalidad es similar a la de ${ganador}!</h2>
        <img src="./media/personajes/${ganador}.png" alt="${ganador}" loading="lazy" decoding="async">
    `;
}

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];

    const fondoAleatorio = fondos[Math.floor(Math.random() * fondos.length)];

    elementoPregunta.textContent = pregunta.pregunta;

    elementoPregunta.classList.remove("animar");
    void elementoPregunta.offsetWidth;
    elementoPregunta.classList.add("animar");

    elementoRespuestas.style.backgroundImage = `
        linear-gradient(rgba(58, 58, 58, 0.4), rgba(8, 8, 8, 0.4)),
        url("./media/${fondoAleatorio}")
    `;

    elementoRespuestas.innerHTML = "";

    pregunta.opciones.forEach(opcion => {
        const boton = document.createElement("button");

        boton.textContent = opcion.texto;

        boton.addEventListener("click", () => {
            sumarPuntos(opcion.puntos);

            preguntaActual++;

            if (preguntaActual < preguntas.length) {
                mostrarPregunta();
            } else {
                mostrarResultado();
            }
        });

        elementoRespuestas.appendChild(boton);
    });
}

mostrarPregunta();