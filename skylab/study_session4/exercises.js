//a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...),
// además, cada elemento de la pareja deberá estar multiplicada por 2.
var nums = [1,2,3,4,5,6,7,8,9];
function showNums(){
	for (var i = 0; i < nums.length - 1; i++) {
		console.log((i+1) + "ª pareja " + nums[i]*2 + " - " + (nums[i]+1)*2)
	}
}
console.log("Output =>")
showNums();

// a 1 - 2) La funcion debería aceptar la array a tratar como argumento.
function showNums(num1,num2,num3,num4,num5,num6,num7,num8,num9,multiplo){
	var nums = [num1,num2,num3,num4,num5,num6,num7,num8,num9];
	console.log("El número seleccionado como múltiplo es el: " + multiplo)
	for (var i = 0; i < nums.length - 1; i++) {
		console.log((i+1) + "ª pareja " + nums[i]*multiplo + " - " + (nums[i]+1)*multiplo)
	}
}
console.log("Output =>")
showNums(1,2,3,4,5,6,7,8,9,12);
// a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.
function showNums(num1,num2,num3,num4,num5,num6,num7,num8,num9,multiplo,maxPair){
	var nums = [num1,num2,num3,num4,num5,num6,num7,num8,num9];
	console.log("El número seleccionado como múltiplo es el: " + multiplo)
	for (var i = 0; i < maxPair; i++) {
		console.log((i+1) + "ª pareja " + nums[i]*multiplo + " - " + (nums[i]+1)*multiplo)
	}
}
console.log("Output =>")
showNums(1,2,3,4,5,6,7,8,9,12,3);

//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?
var nums = [0 , 1]
function fibo(){
 for (var i = 0; i < 10; i++) {
 	nums.push(nums[i] + nums[i + 1])
 }
 console.log(nums)
}
fibo();

//
var nums = [0 , 1]
function fibo(pos){
 for (var i = 0; i < pos - 1; i++) {
 	nums.push(nums[i] + nums[i + 1])
 }
 console.log("El número en la " + pos + "ª posición es el: " + nums.pop())
}
fibo(6);

//b5)
var nums = [0]
function fibo(pos){
	console.log(nums);
	nums.push(1)
 for (var i = 0; i < pos; i++) {
 	console.log(nums)
 	nums.push(nums[i] + nums[i + 1])
 	}
 	for (var i = nums.length ; i > 0; i--) {
 	 	console.log(nums)
 	nums.pop()

 	}
}
fibo(6);

// c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código

var counter = 1;
var code = 3712;
var newcode = 0;
var codeTwo = code.toString();
for (i = 0 ; i < codeTwo.length ; i++){
	codeSplit.push(codeTwo.charAt(i))
}
var encrypt = function(){
	if(counter === 1){
		console.log(codeTwo[1] + codeTwo[2] + codeTwo[3] + codeTwo[0])
	} else if (counter === 2){
		console.log(codeTwo[2] + codeTwo[3] + codeTwo[0] + codeTwo[1])
	} else if(counter === 3){
		console.log(codeTwo[3] + codeTwo[0] + codeTwo[1] + codeTwo[2])
	}
}
function codeScript(){
	if (counter === 4){
		console.log(code)
		counter=1;
	} else {
		encrypt();
	counter += 1;
	}

}
codeScript();
codeScript();
codeScript();
codeScript();

// 2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)
var encrypt = function(p1, p2){
var codeOne = p1.toString()
var codeTwo = p2.toString()
var encrypted = [[codeOne[1],codeOne[2],codeOne[3],codeOne[0]],[codeTwo[1],codeTwo[2],codeTwo[3],codeTwo[0]]]
console.log(encrypted[0] , encrypted[1])
} 

function codeScript(code1 , code2){
	encrypt(code1,code2)
}
codeScript(3712 , 2864)

// c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. 
// (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)
var encrypt = function(p1){
var codeOne = p1.toString()
var i = 2;
var encrypted = [[codeOne[1] *i ,codeOne[2] *i ,codeOne[3] *i ,codeOne[0] * i]]
console.log(encrypted[0])
} 

function codeScript(code1){
	encrypt(code1)
}
codeScript(3341)

//c4)Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado
var code1 = 3341;
var code2 = 2431;
var dec1 = 0;
var dec2 = 0;
var encryptKey = 2;

var encrypt = function(p1 , p2){
	var codeOne = p1.toString()
	var codeTwo = p2.toString()
	var encrypted = [[codeOne[1] *encryptKey ,codeOne[2] *encryptKey ,codeOne[3] *encryptKey ,codeOne[0] * encryptKey] , [codeTwo[1] *encryptKey ,codeTwo[2] *encryptKey ,codeTwo[3] *encryptKey ,codeTwo[0] * encryptKey]]
	console.log(encrypted[0] , encrypted[1])
	dec1 = encrypted[0].join("");
	dec2 = encrypted[1].join("");
} 

var decrypt = function (dec1 , dec2){
	var code1 = dec1.toString()
	var code2 = dec2.toString()
	var decrypted = [[code1[3] / encryptKey , code1[0] / encryptKey , code1[1] / encryptKey , code1[2] / encryptKey] , [code2[3] / encryptKey , code2[0] / encryptKey , code2[1] / encryptKey , code2[2] / encryptKey]]
	console.log(decrypted[0] , decrypted[1])
}

function codeScript(code1 , code2){
	encrypt(code1 , code2)
}

var secGuy = function(){
	codeScript(code1 , code2)
	decrypt(dec1 , dec2)
}
secGuy();

//c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.

var dictionary = {
    0: ['A', 'K', 'T'],
    1: ['B', 'L', 'U'],
    2: ['C', 'M', 'V'],
    3: ['D', 'N', 'W'],
    4: ['E', 'Ñ', 'X'],
    5: ['F', 'O', 'Y'],
    6: ['G', 'P', 'Z'],
    7: ['H', 'Q', '.'],
    8: ['I', 'R', ','],
    9: ['J', 'S', ' ']
}
console.log(dictionary[0])