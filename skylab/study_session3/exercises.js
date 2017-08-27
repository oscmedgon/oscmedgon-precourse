//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.
function nombre(value){
	console.log("HOLA!!!" , value , ",como tu por aquí." )
}
nombre("Óscar");
//b) Intenta retornar los valores en lugar de usar console.log.
var name = "oscar";
var saludar = function (){
	return("HOLA!!! " + name + ", como tu por aquí." )
}
console.log(saludar());

//c) Ahora, añade tu edad y concaténala al return
var name = "oscar";
var edad = 26;
var saludar = function (){
	return( "Hola " + name + ", tienes " + edad + " años." )
}
console.log(saludar());

//d) Iguala tu función a una variable y ejecútala
var name = "oscar";
var edad = 26;
var saludar = function (){
	return( "Hola " + name + ", tienes " + edad + " años." )
}
saludar();
//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados Now, try to declare other function and assign it result to other variable called myAge, and try to print the result of both functions in one line.
var nombre = "Oscar";
var edad = 26;
var fullname = function (){
	return(nombre)
}
var age = function (){
	return(edad)
}
console.log(fullname() + " , " + age());

//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.
var random = function(){
	return(Math.floor(Math.random()*11));
}
var nombre = "Oscar";
var edad = 26;
var fullname = function (){
	return(nombre)
}
var age = function (){
	return(edad + random())
}
console.log((fullname() + " , " + age()).toString());

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones
var random = function(){
	return(Math.floor(Math.random()*11));
}
var fullname = function nombre(a1){
	return(a1)
}
var age = function edad(b1){
	return(b1 + random())
}
console.log((fullname("Óscar") + " , " + age(26)).toString());
//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas
var nombre = "";
var edad = 0;
var padre = function creador(p1, p2){
	nombre = p1;
	edad = p2;
	console.log( nombre + " , " + edad)
}
padre("Óscar" , 26)