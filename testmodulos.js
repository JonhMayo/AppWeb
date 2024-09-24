function changeColor(){
    const elementos = document.getElementsByClassName("e1");
    console.log(elementos);
    for(let i = 0; i < elementos.length; i++){
        elementos[i].style.backgroundColor = "red";
    }
    
}
console.log("Hola mundo");
console.log("Hola mundo");
let s ="nuevo"
console.log("Hola "+s+" Mundo");
console.log(2+3*4);
console.log(Infinity*1);
console.log(Infinity-Infinity);
console.log(typeof s);
console.log(typeof 5.9);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(1<=2);
console.log(typeof true);
console.log(1>2);
console.log(1 == 1);

let num = 2;
console.log(num === 2);
num="2";
console.log(num == 2);
console.log(num === 2);     
console.log(9 * null);
console.log("5" - 1);
console.log("5" + 1);
console.log("cinco" * 2);
console.log(false == 0);
console.log(0 == "0");
console.log(0 == []);
//let n = prompt("Ingrese cantidad de números a generar:  ");
let n = 10;
let i = 0;
let ale = 0;
let countMax = 0;
let countMin = 0;
for(i; i<n; i++){
    ale = Math.random();
    if(ale<0.5){
        countMin++;
    } else {
        countMax++;
    }
    console.log(ale);
}
console.log("Se generaron "+n+" números")
console.log("Cantidad de números mayores o iguales a 0.5: "+(countMax*100/n)+"%");
console.log("Cantidad de números menores a 0.5: "+(countMin*100/n)+"%");
const elements = [
    "agua",
    "tierra",
    "fuego",
    "aire"
];
console.log("For");
for(let i=0; i<elements.length; i++){
    console.log(elements[i]);
}
console.log("For in");
for(let x in elements){
    console.log(elements[x]);
}
console.log("forEach function");
elements.forEach(function(e){
    console.log(e);
});
console.log("forEach e =>");
elements.forEach( e => {
    console.log(e);
});
console.log("forEach e,i");
elements.forEach( (e,i) =>{
    console.log(`${i} - ${e}`);
});
const despliegaElemento = function (e){
    console.log(e);
}
console.log("variable");
elements.forEach(despliegaElemento);
console.log("llamado a funcion");
elements.forEach(otraFormaDeDesplegarElemento);

function otraFormaDeDesplegarElemento(e){
    console.log(e);
}
//Arreglos
console.log(typeof elements);   
console.log(elements);  
console.log(elements.length);
console.log(elements.push("LeeLoo"));
console.log(elements);
console.log(elements.pop());
console.log(elements);
console.log(elements.unshift("LeeLoo"));
console.log(elements);
console.log(elements.shift());
console.log(elements);

const letra =  ["a","A"];
//Propio
const filtro = elements.filter(n => {
    const inicial = n.charAt(0).toLowerCase();
    return letra.includes(inicial);
});
console.log(filtro);
//ejemplo
const filtrados = elements.filter(elemento => elemento.startsWith("a"));
console.log(filtrados);
const mayus = elements.map(element => element.charAt(0).toUpperCase()+element.substr(1).toLowerCase());
console.log(mayus);
//const reducidos = elements.reduce((acumulador,elemento) => !elemento.startsWith("a") ? acumulador+1 : acumulador+0
const estudiante = {
    nombre : "Juan",
    apellido: "Camaney",
    promedio: 79.9,
    semestre: 6,
    status: "rojo",
    tutor: {
        nombre: "Lupita Pérez",
        correo: "lalupe@chido.com"
    }
};
console.log(estudiante);
console.log(estudiante.nombre);
console.log(estudiante["nombre"]);
console.log(estudiante.tutor.correo);
console.log(estudiante.tutor["correo"]);

for(let [llave,valor] of Object.entries(estudiante)){
    console.log(`${llave}: ${valor}`);
}
const proc1 = new Object();
proc1.nombre = "proc1";
proc1.codigo = ["a=1+2","console.log('1+2')","console.log(a)"];

proc1.fn = function(a,b){
    return a+b;
}
console.log(proc1);
console.log(proc1["fn"](1,3));
console.log(proc1.fn(1,3));
let resultado = eval(proc1.codigo[1]);
console.log(resultado);

//Serialización
let serializado = JSON.stringify(proc1);
console.log(proc1);
console.log(serializado);
console.log(typeof serializado);
let objetoDeNuevo = JSON.parse(serializado);
console.log(objetoDeNuevo);
console.log(typeof objetoDeNuevo);
let suma = function(a,b){
    return  a+b;
}

let repetir = function(n, action){
    let tot = 0;
    for(let i = 0; i<n ; i++){
        tot = tot + action(i,tot);
    }
    console.log(tot);
}
repetir(3,suma);
