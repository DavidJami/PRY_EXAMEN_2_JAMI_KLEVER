var tareas = [{tituloTarea: "Estudiar JS", estado: true,},
  {tituloTarea: "HACER DEBER DE WEB", estado: false,},
  {tituloTarea: "Leer APUNTES",estado: true,},
];

var tabla_tareas = document.getElementById('tabla_tareas');
var txt_resultado = document.getElementById('txt_resultado');
var btn_contar = document.getElementById('btn_contar');

function mostrarTareas() {tabla_tareas.innerHTML = "";
    tareas.forEach(function (tarea) {
var fila = document.createElement('tr');
var col_titulo = document.createElement('td');
    col_titulo.textContent = tarea.tituloTarea;
var col_estado = document.createElement('td');
    if (tarea.estado === true) {
        col_estado.textContent = "COMPLETADO";
        col_estado.classList.add('text-success');
    } else {
        col_estado.textContent = "PENDIENTE";
        col_estado.classList.add('text-warning');
    }
    fila.appendChild(col_titulo);
    fila.appendChild(col_estado);
    tabla_tareas.appendChild(fila);

    });
}

function contarPendientes() {
    var contador = 0;

    tareas.forEach(function (tarea) {
        if (tarea.estado === false) {
            contador++;
        }
    });

    return contador;
}

function contarCompletadas() {
    var contador = 0;
    tareas.forEach(function (tarea) {
        if (tarea.estado === true) {
            contador++;
        }
    });

    return contador;
}

btn_contar.addEventListener('click', function () {
    var completadas=contarCompletadas();
    var pendientes=contarPendientes();

    txt_resultado.textContent = `Tareas completadas: ${completadas}, Tareas pendientes: ${pendientes}`;
});

mostrarTareas();
