//PROYECTO CALCULADORA JAVASCRIPT
var num1STR = prompt("Introduzca el primer número");
var num2STR =  prompt("Introduzca el segundo número, deje el campo en blanco si quiere mostrar la raçiz cuadrada del primer valor");
var num1 = Number(num1STR);
var num2 = Number(num2STR);
var reSum = (num1 + num2);
var Rest = (num1 - num2);
var resMult = (num1 * num2);
var Div = (num1 / num2);
var resDiv = Div.toFixed(3);
var res = [reSum,Rest,resMult,resDiv];
console.log(res)
if (isNaN(reSum) === true) {
	console.log("You can't do this operation!");
} else if(num2 === "" && !isNaN(num1)) {
	console.log(Math.sqrt(num1));
} else{
	console.log(
		"This are the results:"
		 + num1 + "+" + num2 + "=" + res[0] + " | "
		 + num1 + "-" + num2 + "=" + res[1] + " | "
		 + num1 + "*" + num2 + "=" + res[2] + " | "
		 + num1 + "/" + num2 + "=" + res[3] + " | "
		);
}


//PROYECTO CALCULADORA PRO JAVASCRIPT
var reSum = 0;
var Rest = 0;
var resMult = 1;
var resDiv = 0;
var calculator = 0;
function sum(){
	 for (n = 0; n < arguments.length; n++){
      reSum += sum.arguments[n];
  }
}

function res(){
	Rest = res.arguments[0] *2
	 for (n = 0; n < arguments.length; n++){
      Rest -= res.arguments[n];
  }
}

function mult(){
	 for (n = 0; n < arguments.length; n++){
      resMult *= mult.arguments[n];
  }
}
mult(3,5,7)
function div(){
	resDiv = div.arguments[0] * div.arguments[0]
	 for (n = 0; n < arguments.length; n++){
      resDiv /= div.arguments[n];
  }
}
sum(50,3,14)
res(50,3,14)
mult(50,3,14)
div(50,3,14)

  console.log("Estos son los resultados de las operaciones " + reSum + " | " + Rest + " | " + resMult + " | " + resDiv)