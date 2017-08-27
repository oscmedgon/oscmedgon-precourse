//EJERCICIOS DE STRINGS
var myName = "Óscar Medina";
var myString = (myName.indexOf(" "));
console.log("Your first last name starts on position " + myString);
// Solo nombre
var myName = "Óscar Medina"
var myString = (myName.indexOf(" "));
console.log(myName.substr(0,myString));
// Solo apellido
var myName = "Óscar Medina";
var myString = (myName.indexOf(" "));
console.log(myName.substr(myString+1,myName.length));

//EN plan james bond
var myName = "Óscar Medina"
var myString = (myName.indexOf(" ")
console.log(myName +", " + myName.substr(myString+1,myName.length));
//Saludo formal
var myName = "Mr. Medina"
var myString = (myName.indexOf(" "));
console.log("Hello, " + myName);
//Solo apellido en mayusculas
var myName = "Óscar Medina";
var myString = (myName.indexOf(" "));
var mySuperString = myName.substr(myString+1,myName.length);
console.log(mySuperString.toUpperCase())
//piropeando al programador
var myName = "Óscar Medina"
var myString = (myName.indexOf(" "));
var newName = (myName.substr(0,myString) + " is awesome")
console.log(newName);
//Iniciales
var myName = "Óscar Medina"
var myString = (myName.indexOf(" "));
var newName = (myName.substr(0,1) + "." + (myName[myString + 1]));
console.log(newName);

//EJERCICIOS DE ARRAYS
var myName = "Óscar Medina";
var res = myName.split("");
console.log(res.join("/"))
//Solo apellido
var myName = "Óscar Medina";
var res = myName.split("");
var newName = res.join("/");
var Index = newName.indexOf(" ");
var last = newName.length;
console.log(newName.slice(Index,last))
//Posiciones nombre
var myName = "Óscar Medina";
var newName = (myName.toUpperCase())
var res = newName.split("");
var Index = res.indexOf(" ");
for (var i = 0 ; i <= (Index -1); i++) {
	console.log ((i +1 ) + "º " +newName[i]);
}
//Posiciones apellido
var myName = "Óscar Medina";
var newName = (myName.toUpperCase())
var res = newName.split("");
var Index = res.indexOf(" ");
var last = res.length;
for (var i = (Index +1) ; i <= (last -1); i++) {
	console.log ((i +1 ) + "º " +newName[i]);
}
//Mostrar iniciales
var myName = "Óscar Medina";
var newName = (myName.toUpperCase())
var res = newName.split("");
var Index = res.indexOf(" ");
console.log(res[0] + "." + res[(Index + 1)])


//Nombre y edad
var myName = ["ÓSCAR", "Medina", 26];
console.log("Hola me llamo " + myName[0] + " y tengo " + myName[2] + " años")


//Añadiendo la ciudad
var myName = ["ÓSCAR", "Medina", 26];
var cityAdd = function (city){
	myName.push(city);
	console.log("City added to array! => " + myName);
};
cityAdd("Pamplona");
//Eliminando la ciudad
var myName = ["ÓSCAR", "Medina", 26, "Pamplona"];
var cityAdd = function (city){
	myName.push(city);
	console.log("City added to array! => " + myName);
};
var cityDel = function(){
	myName.splice(3,1);
	console.log("City deleted from array! => " + myName);
};
cityDel();

//Eliminando el nombre
var myName = ["ÓSCAR", "Medina", 26, "Pamplona"];
var nameDel = function(){
	myName.shift();
	console.log("Name deleted from array! => " + myName);
};
nameDel();
//Restaurando el nombre
var myName = ["ÓSCAR", "Medina", 26, "Pamplona"];
var nameAdd = function (name){
	myName.unshift(name);
	console.log("Name added to array! => " + myName);
};
var nameDel = function(){
	myName.shift();
	console.log("Name deleted from array! => " + myName);
};
nameAdd("ÓSCAR");

//Multiplicatr 2000
var numbers = [1,2,3,4,5,6,7,8,9,10];
var multByTwo = numbers.map(function(x){
 return x * 2;
  });
console.log(multByTwo);
//Multiplicatr 5000
var num = 3;
var numbers = [1,2,3,4,5,6,7,8,9,10];
var multByNumber = numbers.map(function (x){
 return x * num;
  });
console.log(multByNumber);
//Del reves
var num = 3;
var numbers = [1,2,3,4,5,6,7,8,9,10];
var multByNumber = numbers.map(function (x){
 return x * num;
  });
multByNumber.sort(function (a,b){return(b-a)});

//NUMBERS
//A
var hora = 10.52;
var horaString = hora.toString();
var myString = ("It's around " + horaString + " of morning.")
console.log(myString);
//B
var hora = 10.52;
var newHora = Math.floor(hora);
var horaString = newHora.toString();
var myString = ("It's around " + horaString + " of morning.")
console.log(myString);
//C
var hora = 10.52;
var newHora = Math.round(hora);
var horaString = newHora.toString();
var myString = (horaString + "!")
console.log(myString);
//D
var num1 = 7;
var num2 = 3;
var res = (num1 + num2);
var sum = ("The sum of " + num1 + "+" + num2 + " is " + res);
console.log(sum);
//D1
var num1 = 7;
var num2 = 3;
var reSum = (num1 + num2);
var Rest = (num1 - num2);
var sum = ("The sum and rest of " + num1 + " and " + num2 + " is " + reSum + " and " + Rest);
console.log(sum);
//D2
var num1 = 7;
var num2 = 3;
var reSum = (num1 + num2);
var Rest = (num1 - num2);
var resMult = (num1 * num2);
var sum = (reSum + ", " + Rest + " and " + resMult);
console.log(sum);
//D3
var num1 = 7;
var num2 = 3;
var reSum = (num1 + num2);
var Rest = (num1 - num2);
var resMult = (num1 * num2);
var Div = (num1 / num2);
var resDiv = Div.toFixed(1);
var res = (reSum + ", " + Rest  +", "+ resMult + " and " + resDiv);
console.log(res);
//D4
var num1 = 10;
var num2 = "hour";
var res = (num1 * num2);
if (isNaN(res) === true) {
	console.log("You can't do this operation!");
} else {
	console.log(res);
}
