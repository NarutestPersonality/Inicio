const personajes = {
    Naruto: 0,
    Sasuke: 0,
    Kakashi: 0,
    Gaara: 0,
    Shikamaru: 0,
    Jiraiya: 0,
    Minato: 0,
    Orochimaru: 0,
    Kabuto: 0,
    Tsunade: 0,
    Sakura: 0,
    Kiba: 0,
    Hiruzen: 0,
    Itachi: 0,
    Shisui: 0,
    Guy: 0
};

const preguntas = [
    {
        pregunta: "¿Qué pacto de invocación elegirías?",
        opciones: [
            {
                texto: "🐸 Sapos",
                puntos: {
                    Naruto: 2,
                    Jiraiya: 2,
                    Minato: 1
                }
            },
            {
                texto: "🐍 Serpientes",
                puntos: {
                    Orochimaru: 3,
                    Kabuto: 1,
                    Sasuke: 1
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
                    Kakashi: 3,
                    Kiba: 2
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
                    Itachi: 3,
                    Shisui: 2
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
                    Sasuke: 1
                }
            },
            {
                texto: "Analizar la situación antes de actuar.",
                puntos: {
                    Shikamaru: 3,
                    Kakashi: 2
                }
            },
            {
                texto: "Buscar una forma de superar mis límites.",
                puntos: {
                    Sasuke: 2,
                    Naruto: 2,
                    Gaara: 1
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
                    Sasuke: 2,
                    Gaara: 1,
                    Itachi: 2
                }
            },
            {
                texto: "Priorizar la supervivencia del equipo.",
                puntos: {
                    Naruto: 2,
                    Minato: 2,
                    Guy: 1
                }
            },
            {
                texto: "Separar el equipo en dos, uno avanza, el otro regresa.",
                puntos: {
                    Kakashi: 2,
                    Naruto: 2,
                    Shikamaru: 1
                }
            },
            {
                texto: "Retrasar la misión para crear una estrategia que beneficie a todos.",
                puntos: {
                    Itachi: 2,
                    Shikamaru: 3
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
                Naruto: 3,
                Jiraiya: 2
            }
        },
        {
            texto: "Que sea capaz de mantener la calma en cualquier situación.",
            puntos: {
                Kakashi: 3,
                Itachi: 2
            }
        },
        {
            texto: "Que tenga una meta y esté dispuesto a hacer lo necesario para alcanzarla.",
            puntos: {
                Sasuke: 4,
                Itachi: 1
            }
        },
        {
            texto: "Que pueda entender a los demás incluso cuando no dicen lo que sienten.",
            puntos: {
                Itachi: 2,
                Jiraiya: 2,
                Kakashi: 1
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
                Naruto: 4,
                Jiraiya: 1
            }
        },
        {
            texto: "Analizaría mis errores antes de volver a intentarlo.",
            puntos: {
                Kakashi: 3,
                Itachi: 2
            }
        },
        {
            texto: "Me obsesionaría con superar a quien me derrotó.",
            puntos: {
                Sasuke: 4,
                Naruto: 1
            }
        },
        {
            texto: "Intentaría aprender algo de la derrota y seguir adelante.",
            puntos: {
                Jiraiya: 3,
                Kakashi: 2
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
                Naruto: 4,
                Jiraiya: 1
            }
        },
        {
            texto: "El que observa la situación y decide cuándo intervenir.",
            puntos: {
                Kakashi: 3,
                Itachi: 2
            }
        },
        {
            texto: "El que prefiere encargarse de su parte por su cuenta.",
            puntos: {
                Sasuke: 4,
                Itachi: 1
            }
        },
        {
            texto: "El que intenta enseñar o aconsejar a los demás.",
            puntos: {
                Jiraiya: 4,
                Kakashi: 1
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
                Naruto: 3,
                Jiraiya: 2
            }
        },
        {
            texto: "Mantendría la calma y buscaría toda la información antes de reaccionar.",
            puntos: {
                Kakashi: 3,
                Itachi: 2
            }
        },
        {
            texto: "Me sentiría traicionado y exigiría saber toda la verdad.",
            puntos: {
                Sasuke: 4,
                Naruto: 1
            }
        },
        {
            texto: "Probablemente ya sospecharía que había algo detrás.",
            puntos: {
                Itachi: 3,
                Kakashi: 2
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
                Naruto: 3,
                Jiraiya: 2
            }
        },
        {
            texto: "Aprender de personas con más experiencia que yo.",
            puntos: {
                Jiraiya: 3,
                Kakashi: 2
            }
        },
        {
            texto: "Estudiar mis debilidades y desarrollar una estrategia para compensarlas.",
            puntos: {
                Kakashi: 3,
                Itachi: 2
            }
        },
        {
            texto: "Encontrar mi propio camino, aunque tenga que hacerlo solo.",
            puntos: {
                Sasuke: 4,
                Itachi: 1
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
        <img src="./media/personajes/${ganador}.png" alt="${ganador}">
    `;
}

function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];

    elementoPregunta.textContent = pregunta.pregunta;

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