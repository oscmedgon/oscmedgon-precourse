var lines = 0;
var line1 = 0;
var line2 = 0;
var line3 = 0;
var max = 30;
var player = prompt("Hola jugador, ¿Cual es tu nombre?")
console.log("Hola" , player , "vamos a jugar");
var newNum = 0;
var turno = 0;
var repe = false;
var numbArr = [];
var bingoCard = [];
var matched = [false , false, false , false , false , false , false, false , false , false , false , false, false , false , false];
var i = 0;
var f = 0;
var bombo = []; 
var start = true;
var bomboGen = function(){
	while (f < max) {
	generator()
	if (f=== 0) {
		bombo.push(newNum);
		f++;
	} else if(repeChechBombo(newNum) === -1){
			bombo.push(newNum);
			f++;
	}
	}

}
var linea = function(){
	if ( lines === 0){
		if(matched.indexOf(false) > 4){
			line1 = true;
			lines = 1;
			console.log("LINEA!!!!!!! " + lines)
		}
		else if(matched.indexOf(false, 5) > 9){
			line2 = true;
			lines = 1;
			console.log("LINEA!!!!!!! " + lines)
		}
		else if(matched.indexOf(false, 10) === -1){
			line3 = true;
			lines = 1;
			console.log("LINEA!!!!!!! " + lines)

		}
	} else if (lines === 1){
		if(line1 === true){
			if(matched.indexOf(false, 5) > 9){
			line2 = true;
			lines = 2;
			console.log("LINEA!!!!!!! " + lines)
		} else if(matched.indexOf(false, 10) === -1){
			line3 = true;
			lines = 2;
			console.log("LINEA!!!!!!! " + lines)
		}
		} else if(line2 === true){
			if(matched.indexOf(false) > 4){
			line1 = true;
			lines = 2;
			console.log("LINEA!!!!!!! " + lines)
		} else if(matched.indexOf(false, 10) === -1){
			line3 = true;
			lines = 2;
			console.log("LINEA!!!!!!! " + lines)
		}else if(line3 === true){
			if(matched.indexOf(false) > 4){
			line1 = true;
			lines = 2;
			console.log("LINEA!!!!!!! " + lines)
		} else if(matched.indexOf(false, 5) > 9){
			line2 = true;
			lines = 2;
			console.log("LINEA!!!!!!! " + lines)
		
	}
}
}
}
}
var theEnd = function(){
	for(var x = 0 ; x < 16 ; x++){
		if(numbArr[x] === "X"){
			matched[x] = true
		if( matched.indexOf(false) === -1){
			alert("BINGO!!!!!!")
			alert(name + " has GANADO, y solo has tardado " + turno + " turnos")
			x = 16
			console.log("BINGO!!!!!!")
			console.log(name + " has GANADO, y solo has tardado " + turno + " turnos")
			start = false;
			var restart = confirm(player + " ¿Te apetece volver a jugar?")
			if( restart === true){
				alert("De acuerdo " + name + " ahí va una nueva ronda de bingo!!!!!!")
				gameRestart()
			} else{
				alert("De acuerdo " + name + " nos vemos pronto!!!!!!")
			}
		}
		}
	}
}
var bingo = function(){
	i = numbArr.indexOf(newNum)
	return(numbArr.indexOf(newNum))
}
var generator = function(){
	newNum = (Math.floor((Math.random()*max)+1));	
}	
var repeChech = function(p1){
	 return(numbArr.indexOf(p1));
	}
	var repeChechBombo = function(p1){
	 return(bombo.indexOf(p1));
	}
var cardGenerator = function (){
	while (i < 15) {
	generator()
	if (i=== 0) {
		numbArr.push(newNum);
		i++;
	} else if(repeChech(newNum) === -1){
			numbArr.push(newNum);
			i++;
	}
	}
}
var myCard =function(){
	console.log("_______________________")
	console.log("First line");
	console.log(numbArr[0] + " , " + numbArr[1] + " , " + numbArr[2] + " , " + numbArr[3] + " , " + numbArr[4])
	console.log("Second line");
	console.log(numbArr[5] + " , " + numbArr[6] + " , " + numbArr[7] + " , " + numbArr[8] + " , " + numbArr[9])
	console.log("Third line");
	console.log(numbArr[10] + " , " + numbArr[11] + " , " + numbArr[12] + " , " + numbArr[13] + " , " + numbArr[14])
	console.log("_______________________")
}
var gameRestart = function(){
line1 = 0;
line2 = 0;
line3 = 0;

console.log("Hola" , player , "nos volvemos a ver, vamos a jugar");
lines = 0;
newNum = 0;
turno = 0;
repe = false;
numbArr = [];
bingoCard = [];
matched = [false , false, false , false , false , false , false, false , false , false , false , false, false , false , false];
i = 0;
f = 0;
bombo = []; 
start = true;
gameStart();
}
var gameStart = function(){ 
cardGenerator();
	start =confirm(player + " Comienza el juego, tome asiento.");
bomboGen();
while(start === true){
	start = confirm("Turno número " + turno);
	newNum = bombo[turno]
	if (bingo() !== -1){
		numbArr[i] = "X";
	}
	myCard();
	console.log("Turno número " + turno)
	console.log("El número que ha sacado el bombo esta ronda es " + newNum )
	theEnd();
	linea();
	turno += 1
}
}
gameStart();