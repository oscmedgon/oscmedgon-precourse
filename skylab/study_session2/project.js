//BASIC PROJECT
//INTRO
// This is a example of array of objects... each position of array contains one object...
var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]
//CODE GOES HERE
var scales = 0;
var price = 0;
var dest = []
var user = prompt("Introduzca su nombre de usuario");
console.log("Bienvenido a  Skylab Airlines" , user);
for (var i = 0 ; i < flights.length; i++) {
	if (flights[i].scale) {
		var scaleText = "El vuelo hace escala.";
		scales += 1;
	} else {
		var scaleText = "El vuelo no hace ninguna escala";
	}
	console.log("El vuelo con origen", flights[i].from , "y destino" , flights[i].to , "tiene un precio de" , flights[i].cost + "€." , scaleText )
	price += flights[i].cost;
}
price /= flights.length;
console.log("El precio medio de los vuelos actualmente es de" , price + "€")
console.log("hay un total de" , flights.length, "vuelos actualmente, de los cuales" , scales , "hacen escala.")
for (var i = flights.length; i >= 5; i--) {
	dest[i - 5] = flights[i - 1].to;
}
console.log("Si eres de los que viajan tarde, esto son los destinos de los últimos vuelos del día:" , dest)