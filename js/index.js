for(let x=0; x<5; x++){
    if(x==2){
        continue;
    }
    console.log(x);
}

let a =10;
a = a + 5;
a -= 5;

let x = 10;
x **= 5;
console.log(x);


//Tipo fecha
const fecha = new Date("2024-05-03");
console.log(fecha);

function myFunction(p1=2,p2=4){
    return p1 * p2;
}

console.log(myFunction(4,3));




/*function otraFuncion(a,b){
    return a * b;
}
*/

//Funcion flecha - funcion mas moderna
let otraFuncion = (a, b) => {
    return a * b;
}

// let otraFuncion = (a, b) => a * b     
//console.log(otraFuncion(5,5))

console.log(otraFuncion(5,5));




//Funcion Autoejecutable, Anonima
(function(){
    console.log('Esta es una función anónima autoejecutable');
})();


//flecha
(() => console.log('Esta es una función anónima autoejecutable 2'))();



 //Variable tipo objeto, pueden almacenar funciones
let alumno = {
    nombre : "Fernanda",
    apellido : 'Ballesteros',
    matricula : 79123,

    //nombreCompleto : function(){
    //    return this.nombre + " " + this.apellido;

    nombreCompleto : (nombre, apellido) => {
        return this.nombre + " " + this.apellido;
    }


}

console.log(alumno.nombreCompleto());

