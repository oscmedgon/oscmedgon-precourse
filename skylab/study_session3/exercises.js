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
var padre = function creador(p1){
	var fullname = function(){
	return(p1)
}
var age = function(){
	return(p2)
}

	return( fullname() + " , " + age())
}
padre("Óscar")

//h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()
var nombre = "";
var edad = 0;
var padre = function creador(p1){
	var ager = function(){
		return(Math.random());
	}
	var fullname = function(){
	return(p1)
}
var age = function(){
	return(ager())
}

	return( fullname() + " , " + age())
}
padre("Óscar")

// i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50
var nombre = "";
var edad = 0;
var padre = function creador(p1){
	var ager = function(){
		edad = (Math.floor(Math.random()*51));
		return(edad)
	}
	ager();
	var fullname = function(){
	return(p1)
}
var age = function(){
	return(ager())
}
if( edad < 20){
	return( fullname() + " , " + edad + "... Estás seguro de que eres " + fullname())
} else {
	return (fullname() + " , " + edad + ". " + fullname() +  " estás un poco mayor");
}
}
padre("Óscar")

// j) Al return de la función name(), concaténale otro mensaje
var nombre = "";
var edad = 0;
var padre = function creador(p1){
	var ager = function(){
		edad = (Math.floor(Math.random()*51));
		return(edad)
	}
	ager();
	var fullname = function(){
	return(p1 + " un skylabel más en el mundo")
}
var age = function(){
	return(ager())
}
if( edad < 20){
	return( fullname() + " , " + edad + "... Estás seguro de que eres Óscar")
} else {
	return (fullname() + " , " + edad + ". " +  "Óscar estás un poco mayor");
}
}
padre("Óscar")

// k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable

var nombre = "";
var edad = 0;
var padre = function creador(p1){
	var ager = function(){
		edad = (Math.floor(Math.random()*51));
		return(edad)
	}
	ager();
	var fullname = function(){
	return(p1 + " un skylabel más en el mundo")
}
var age = function(){
	return(ager())
}
if( edad < 20){
	var edadificador = ( edad + "... Estás seguro de que eres Óscar")
} else {
	var edadificador = (edad + ". " +  "Óscar estás un poco mayor");
}
return ("The first function returns: '" + fullname() + "' , the second function returns: '" + edadificador +"'")

}
padre("Óscar")

// l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada

var nombre = "";
var edad = 0;
var padre = function creador(p1){
	var ager = function(){
		edad = (Math.floor(Math.random()*51));
		return(edad)
	}
	ager();
	var fullname = function(){
		if(p1 !== "Óscar"){
	return("The first function returns: '" + p1 + " You are not Óscar")
} else {
	return(p1 + " un skylabel más en el mundo")
}
}
var age = function(){
	return(ager())
}
if (p1 !== "Óscar"){
	return (fullname())
}
 else if( edad < 20){
	var edadificador = ( edad + "... Estás seguro de que eres Óscar")
} else  {
	var edadificador = (edad + ". " +  "Óscar estás un poco mayor");
}
return ("The first function returns: '" + fullname() + "' , the second function returns: '" + edadificador +"'")

}
padre("Óscar")

//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.
var random = function(){
	return(Math.floor(Math.random()*51));
}
var nombre = "";
var ager = 0;
var padre = function creador(p1){
	var ager = random();
	var fullname = function(){
		if(p1 !== "Óscar"){
	return("The first function returns: '" + p1 + " You are not Óscar")
} else {
	return(p1 + " un skylabel más en el mundo")
}
}
var age = function(){
	return(ager())
}
if (p1 !== "Óscar"){
	return (fullname())
}
 else if( ager < 20){
	var edadificador = ( ager + "... Estás seguro de que eres Óscar")
} else  {
	var edadificador = (ager + ". " +  "Óscar estás un poco mayor");
}ager
return ("The first function returns: '" + fullname() + "' , the second function returns: '" + edadificador +"'")

}
padre("Óscar")

//n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.
var cleanName = "";
var random = function(){
	return(Math.floor(Math.random()*51));
}
var nombre = function name(name){
	cleanName = name;
	if (name !== "Óscar"){
			return("The first function returns: '" + name + " You are not Óscar")
	} else {
	return(name + " un skylabel más en el mundo")
}
}
var age = function age(){
	var num = random();
	if(cleanName !== "Óscar"){
		return("");
	}
	else if (num < 20){
		return (( num + "... Estás seguro de que eres " + cleanName + "?"))
	} else {
		return((num + ". " + cleanName +  " estás un poco mayor"));
	}
}
var father = function(p1){
	return(nombre(p1) +", "+ age());

}
father("Óscar");

// ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.
var cleanName = "";
var arr= [];
var random = function(){
	return(Math.floor(Math.random()*51));
}
var nombre = function name(name){
	cleanName = name;
	if (name !== "Óscar"){
			arr.push("The first function returns: '" + name + " You are not Óscar")
	} else {
	arr.push(name + " un skylabel más en el mundo")
}
}
var age = function age(){
	var num = random();
	if(cleanName !== "Óscar"){
		arr.push("");
	}
	else if (num < 20){
		arr.push (( num + "... Estás seguro de que eres " + cleanName + "?"))
	} else {
		arr.push((num + ". " + cleanName +  " estás un poco mayor"));
	}
}
var father = function(p1){
	nombre(p1);
	age();
	console.log(arr[0] , arr[1]);

}
father("Óscar");
// o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.
var cleanName = "";
var arr= [];
var random = function(){
	return(Math.floor(Math.random()*51));
}
var nombre = function name(name){
	cleanName = name;
	if (name !== "Óscar"){
			arr.push("The first function returns: '" + name + " You are not Óscar")
	} else {
	arr.push(name + " un skylabel más en el mundo")
}
}
var age = function age(){
	var num = random();
	if(cleanName !== "Óscar"){
		arr.push("");
	}
	else if (num < 20){
		arr.push (( num + "... Estás seguro de que eres " + cleanName + "?"))
	} else {
		arr.push((num + ". " + cleanName +  " estás un poco mayor"));
	}
}
var father = function(p1){
	nombre(p1);
	age();
	console.log(arr[0] , arr[1] , arr[2]);

}
var dark = function(){
	arr.push("hello from the dark side...")
	father("Óscar");
}
dark();

//Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor.
//El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.
var names = ["Óscar", "Lesme" , "Rocío" , "Marisa", "Santi"] 
var newName = "";
var newNum = 0;
var lastName = "";
var arr= [];
var lastNum = 0;
var random = function(){
newNum =(Math.floor(Math.random()*51));
}
var nombre = function name(){
var ranName = function(){
return(Math.floor(Math.random()*5));
}
newName = names[ranName()];
arr.push(newName + " un skylabel más en el mundo")
}
var age = function age(){
if (newNum < 20){
arr.push (( newNum + "... Estás seguro de que eres " + newName + "?"))
} else {
arr.push((newNum + ". " + newName +  " estás un poco mayor"));
}

}
var father = function(p1){
nombre();
age();
if(p1 === 2){
console.log(arr[3] , arr[4] , arr[5]);
} else{
console.log(arr[0] , arr[1] , arr[2]);
lastNum = newNum;
lastName = newName;
}

}
var dark = function(f1){
random();
arr.push("hello from the dark side...")
father(f1);

}
dark(1);
dark(2);
if(newNum > lastNum){
console.log(newName , "con" , newNum , "años" , "es mayor que" , lastName , "con" , lastNum , "años");
} else if (newNum < lastNum){
console.log(lastName , "con" , lastNum , "años" , "es mayor que" , newName , "con" , newNum , "años");
} else if (newNum === lastNum){
console.log("Pues ya es casualiudad pero las" , newName, "y" , lastName , "tienen la misma edad con" , newNum);
}


// p1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output.
var names = ["Óscar", "Lesme" , "Rocío" , "Marisa", "Santi"] 
var firstRound = true;
var newName = "";
var newNum = 0;
var lastName = "";
var arr= [];
var lastNum = 0;
var pers1 = new Object();
var pers2 = new Object();
var random = function(){
newNum =(Math.floor(Math.random()*51));
}
var nombre = function(){
	var ranName = function(){
	return(Math.floor(Math.random()*5));
	}
newName = names[ranName()];
	if (firstRound == true){
		pers1.name = newName;
	} else {
		pers2.name = newName;
	}
}
var age = function(){
	random();
	console.log(newNum)
	if (firstRound == true){
		pers1.age = newNum;
	} else {
		pers2.age = newNum;
	}
}
var father = function(){
	nombre();
	age();
	firstRound = false;
}
father();
father();
console.log(pers1 , pers2)


//p2) Muestra los resultados de los OBJECTS recorriendolos y mostrando los valores de una forma amigable.
var names = ["Óscar", "Lesme" , "Rocío" , "Marisa", "Santi"] 
var firstRound = true;
var newName = "";
var newNum = 0;
var lastName = "";
var arr= [];
var lastNum = 0;
var pers1 = new Object();
var pers2 = new Object();
var random = function(){
newNum =(Math.floor(Math.random()*51));
}
var nombre = function(){
	var ranName = function(){
	return(Math.floor(Math.random()*5));
	}
newName = names[ranName()];
	if (firstRound == true){
		pers1.name = newName;
	} else {
		pers2.name = newName;
	}
}
var age = function(){
	random();
	if (firstRound == true){
		pers1.age = newNum;
	} else {
		pers2.age = newNum;
	}
}
var father = function(){
	nombre();
	age();
	firstRound = false;
}
var grandFather = function(){
	father();
	father();
	console.log("Hola" , pers1.name , "que tal sientan tus" , pers1.age , "años?");
	console.log("Hola" , pers2.name , "que tal sientan tus" , pers2.age , "años?");
	if( pers1.age < pers2.age){
		console.log( pers2.name , "con" , pers2.age , "años, es mayor que" , pers1.name , "con" , pers1.age , "años");
	} else if (pers1.age > pers2.age){
		console.log( pers1.name , "con" , pers1.age , "años, es mayor que" , pers2.name , "con" , pers2.age , "años");
	} else{
		console.log(pers1.name , "y" , pers2.name , "tienen la misma edad con" , pers2.age , "años");
	}
}
grandFather();