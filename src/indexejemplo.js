const persona = {
  nombre: "Daniela",
  caminar: function(){},
  hablar(){}
}; 
persona.hablar();
persona['nombre'] = "Alejandra";

const nombreobjetivo = "nombre";
persona[nombreobjetivo.value] = "Patricia";

var log = function(mensaje){
  console.log(mensaje);
}

var log2 = mensaje => {
  console.log(mensaje);
};

const dentroFn = ingreso => {
    ingreso("Pueden ser enviados como argumentos");
}

const mensajes = [
  "Pueden ser insertados en arreglos",
  log,
  log("Hola mundo"),
  log2
];

const crearMayus = function(registro) {
    return function(mensaje) {
        registro(mensaje.toUpperCase()+"!!!!");
    }
}

const enfasis = crearMayus(mensaje=>console.log(mensaje));

log("Hola mundo");
log2("Hola mundo 2");
mensajes[1](mensajes[0]);
mensajes[3](mensajes[0]);
dentroFn(mensaje => console.log(mensaje));
enfasis("enfasis 1");
enfasis("enfasis 2");
enfasis("enfasis 3");