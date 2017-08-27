//STUDY SESSION 2 JAVASCRIPT
//PREAMBULOS
var SideS = 4;
var SideB = 4;
var SideC = 2;

function getArea(a,b,c){
	var semiperimeter = (( a + b + c) / 2);
	var calc = semiperimeter * (semiperimeter - a) *(semiperimeter - b) * (semiperimeter - c);
	return Math.sqrt(calc);
}
getArea(SideA,SideB,SideC)

//TRABAJANDO CON OBJETOS
//A
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
console.log(Object.keys(avenger))
//B
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
console.log(avenger.name , avenger.class, avenger.id)
//C
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

function newClass(clase){
	var newClass = clase
	var text = "New class = ";
	avenger.class = newClass

	return text + avenger.class
}
newClass("XI")
//D
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
function delProp(){
	delete avenger.id
	console.log("Id No longer exist", avenger.id)
}
delProp();
//E
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 ,
    city : "New York"
};
console.log("City =>", avenger.city)
//F
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 ,
    city : "New York"
};
var length = Object.keys(avenger);
console.log("There are", length.length , "info fields")
//G
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 ,
    city : "New York"
};
function renameProp(){
	avenger.fullName = avenger.name + " Stark";
	delete avenger.name;
	console.log(avenger.fullName)
}
renameProp()
//H
var avenger = {
    fullName : "Tony Stark", 
    class : "XI", 
    id : 1 ,
    city : "New York"
};
console.log("Hi, i'm",avenger.fullName, "from", avenger.city, "my class is", avenger.class, "and my id is", avenger.id)
//H1
var avenger = {
    fullName : "Tony Stark",
    class : "XI", 
    city : "New York",
    country : "United States Of America",
    studies : "MIT",
    job : "Ingeniero y millonetis guaperas"
};
console.log("Hi, i'm",avenger.fullName, "from", avenger.city, "my class is", avenger.class, "my country is", avenger.country, ". I studied at", avenger.studies, "and my job is", avenger.job)

//G
function avenger(fullName, classroom, city, job, studies, markAv){
	this.fullName = fullName;
	this.classroom = classroom;
	this.city 	  =	city;
	this.job	  = job;
	this.studies  = studies;
	this.markAv	  = markAv;
}
var tonyStark = new avenger("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
console.log(tonyStark.fullName);
//H
function avenger(fullName, classroom, city, job, studies, markAv){
    this.fullName = fullName;
    this.classroom = classroom;
    this.city     = city;
    this.job      = job;
    this.studies  = studies;
    this.markAv   = markAv;
}
var tonyStark = new avenger("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
console.log("Hi there, i'm" , tonyStark.fullName , "my classroom was" , tonyStark.classroom , "I live in" , tonyStark.city , ". I studied" , tonyStark.studies , "my markAv is" , tonyStark.markAv);

//I
function avenger(fullName, classroom, city, job, studies, markAv){
    this.fullName = fullName;
    this.classroom = classroom;
    this.city     = city;
    this.job      = job;
    this.studies  = studies;
    this.markAv   = markAv;
}
var oscraker = new avenger("Oscar Medina", "XI", "Pamplona", "Developer", "MIT", "Over 9000")
console.log (oscraker);
//K
function avenger(fullName, classroom, city, job, studies, markAv){
    this.fullName = fullName;
    this.classroom = classroom;
    this.city     = city;
    this.job      = job;
    this.studies  = studies;
    this.markAv   = markAv;
    this.listPropierties = function(){
        console.log(this.fullName + ", " + this.classroom + ", " + this.city + ", " + this.job + ", " + this.studies + ", " + this.markAv )
    }
}
var oscraker = new avenger("Oscar Medina", "XI", "Pamplona", "Developer", "MIT", "Over 9000")
oscraker.listPropierties()
//I
function avenger(fullName, classroom, city, job, studies, markAv){
    this.fullName = fullName;
    this.classroom = classroom;
    this.city     = city;
    this.job      = job;
    this.studies  = studies;
    this.markAv   = markAv;
}
var tonyStark = new avenger("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 8)
var Hulk = new avenger("Bruce banner", "XI", "NYC", "Ingeneer", "MIT", 10)
var Thor = new avenger("Thor", "XI", "Valhalla", "Ingeneer", "MIT", 9)
var Hawkeye = new avenger("Clint Barton", "XI", "NYC", "Ingeneer", "MIT", 7)
var CaptainAmerica = new avenger("Steve Rogers", "XI", "Vive por ahí", "Ingeneer", "MIT", 8)
var BlackWidow = new avenger("Natasha Romanoff", "XI", "Moscow", "Ingeneer", "MIT", 7)
var names = function names(){
    console.log(tonyStark.fullName + ", " + Hulk.fullName + ", " + Thor.fullName + ", " + Hawkeye.fullName + ", " + CaptainAmerica.fullName + ", " + BlackWidow.fullName)
}
names();
//M
var filtered = [];
var avengers = [
{name: "Tony Stark", city: "NYC", job: "Ingeneer", markAv: 8},
{name:"Bruce banner",city: "NYC", job: "Ingeneer",markAv: 10},
{name:"Thor",city: "Valhalla", job: "Ingeneer",markAv: 9},
{name:"Clint Barton",city: "NYC", job: "Ingeneer",markAv: 7},
{name:"Steve Rogers",city: "Somewhere", job: "Ingeneer",markAv: 8},
{name:"Natasha Romanoff",city: "Moscow", job: "Ingeneer",markAv: 7},
]
var counter = 0;
    for (var i = 0; i < (avengers.length); i++) {
        if (avengers[i].city === "NYC" ) {
            counter += 1;
            filtered.push(avengers[i].name)
            console.log(avengers[i].city , counter)


        }
    }
console.log("Are" , counter , "avengers living in NYC:" , filtered)
alert(filtered)

//N
var avengers = [
{name: "Tony Stark", city: "NYC", job: "Ingeneer", markAv: 8},
{name:"Bruce banner",city: "NYC", job: "Ingeneer",markAv: 10},
{name:"Thor",city: "Valhalla", job: "Ingeneer",markAv: 9},
{name:"Clint Barton",city: "NYC", job: "Ingeneer",markAv: 7},
{name:"Steve Rogers",city: "Somewhere", job: "Ingeneer",markAv: 8},
{name:"Natasha Romanoff",city: "Moscow", job: "Ingeneer",markAv: 7},
{name: "Óscar Medina", city: "Pamplona", job: "Future developer", markAv: 10}
]
var media = 0;
var counter = 0;
var calc = function calc(){    
    for (var i = 0; i < (avengers.length); i++) {
        media +=avengers[i].markAv
        }
        console.log(media / avengers.length)
    }
calc();

//Ñ
var avengers = [
{id: 1, name: "Tony Stark", city: "NYC", job: "Ingeneer", markAv: 8},
{id: 2, name:"Bruce banner",city: "NYC", job: "Ingeneer",markAv: 10},
{id: 3, name:"Thor",city: "Valhalla", job: "Ingeneer",markAv: 9},
{id: 4, name:"Clint Barton",city: "NYC", job: "Ingeneer",markAv: 7},
{id: 5, name:"Steve Rogers",city: "Somewhere", job: "Ingeneer",markAv: 8},
{id: 6, name:"Natasha Romanoff",city: "Moscow", job: "Ingeneer",markAv: 7},
]
var pareja1 = [0 , 1];
var pareja2 = [2 , 3];
var pareja3 = [4 , 5];
var res1 = 0;
var out1 = "";
var res2 = 0;
var out2 = "";
var res3 = 0;
var out3 = "";
function compare(){
    //COMPARACIÓN 1
    res1 = (avengers[pareja1[0]].markAv - avengers[pareja1[1]].markAv)
    if (res1 === 0) {
        out1 = (avengers[pareja1[0]].name + " VS " + avengers[pareja1[1]].name) + " => DRAW!! "  
    } 
    else if (res1 > 0) {out1 = avengers[pareja1[0]].name + " VS " + avengers[pareja1[1]].name + " => " + avengers[pareja1[0]].name + " is better!!"}
    else {out1 = avengers[pareja1[0]].name + " VS " + avengers[pareja1[1]].name + " => " + avengers[pareja1[1]].name + " is better!!"}

    //COMPARACIÓN 2
    res2 = (avengers[pareja2[0]].markAv - avengers[pareja2[1]].markAv)
    if (res2 === 0) {
        out2 = (avengers[pareja2[0]].name + " VS " + avengers[pareja2[1]].name) + " => DRAW!! "  
    } 
    else if (res2 > 0) {out2 = avengers[pareja2[0]].name + " VS " + avengers[pareja2[1]].name + " => " + avengers[pareja2[0]].name + " is better!!"}
    else {out2 = avengers[pareja2[0]].name + " VS " + avengers[pareja2[1]].name + " => " + avengers[pareja2[1]].name + " is better!!"}   
 
    //COMPARACIÓN 3
    res3 = (avengers[pareja3[0]].markAv - avengers[pareja3[1]].markAv)
    if (res3 === 0) {
        out3 = (avengers[pareja3[0]].name + " VS " + avengers[pareja3[1]].name) + " => DRAW!! "  
    } 
    else if (res3 > 0) {out3 = avengers[pareja3[0]].name + " VS " + avengers[pareja3[1]].name + " => " + avengers[pareja3[0]].name + " is better!!"}
    else {out3 = avengers[pareja3[0]].name + " VS " + avengers[pareja3[1]].name + " => " + avengers[pareja3[1]].name + " is better!!"}
        console.log(out1 , out2 , out3);
}
compare();

//Ñ SUPREMA
var avengers = [
{id: 1, name: "Tony Stark", city: "NYC", job: "Ingeneer", markAv: 8},
{id: 2, name:"Bruce banner",city: "NYC", job: "Ingeneer",markAv: 10},
{id: 3, name:"Thor",city: "Valhalla", job: "Ingeneer",markAv: 9},
{id: 4, name:"Clint Barton",city: "NYC", job: "Ingeneer",markAv: 7},
{id: 5, name:"Steve Rogers",city: "Somewhere", job: "Ingeneer",markAv: 8},
{id: 6, name:"Natasha Romanoff",city: "Moscow", job: "Ingeneer",markAv: 7},
]
//SHUFFLER
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var random = [0,1,2,3,4,5];
random = shuffle(random);
console.log(random);

//END SHUFFLER
var pareja1 = [random[0] , random[1]];
var pareja2 = [random[2] , random[3]];
var pareja3 = [random[4] , random[5]];
var res1 = 0;
var out1 = "";
var res2 = 0;
var out2 = "";
var res3 = 0;
var out3 = "";
function compare(){
    //COMPARACIÓN 1
    res1 = (avengers[pareja1[0]].markAv - avengers[pareja1[1]].markAv)
    if (res1 === 0) {
        out1 = (avengers[pareja1[0]].name + " VS " + avengers[pareja1[1]].name) + " => DRAW!! "  
    } 
    else if (res1 > 0) {out1 = avengers[pareja1[0]].name + " VS " + avengers[pareja1[1]].name + " => " + avengers[pareja1[0]].name + " is better!!"}
    else {out1 = avengers[pareja1[0]].name + " VS " + avengers[pareja1[1]].name + " => " + avengers[pareja1[1]].name + " is better!!"}

    //COMPARACIÓN 2
    res2 = (avengers[pareja2[0]].markAv - avengers[pareja2[1]].markAv)
    if (res2 === 0) {
        out2 = (avengers[pareja2[0]].name + " VS " + avengers[pareja2[1]].name) + " => DRAW!! "  
    } 
    else if (res2 > 0) {out2 = avengers[pareja2[0]].name + " VS " + avengers[pareja2[1]].name + " => " + avengers[pareja2[0]].name + " is better!!"}
    else {out2 = avengers[pareja2[0]].name + " VS " + avengers[pareja2[1]].name + " => " + avengers[pareja2[1]].name + " is better!!"}   
 
    //COMPARACIÓN 3
    res3 = (avengers[pareja3[0]].markAv - avengers[pareja3[1]].markAv)
    if (res3 === 0) {
        out3 = (avengers[pareja3[0]].name + " VS " + avengers[pareja3[1]].name) + " => DRAW!! "  
    } 
    else if (res3 > 0) {out3 = avengers[pareja3[0]].name + " VS " + avengers[pareja3[1]].name + " => " + avengers[pareja3[0]].name + " is better!!"}
    else {out3 = avengers[pareja3[0]].name + " VS " + avengers[pareja3[1]].name + " => " + avengers[pareja3[1]].name + " is better!!"}
        console.log(out1 , out2 , out3);
}
compare();