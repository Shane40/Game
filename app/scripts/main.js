console.log('The Iron Yard Rocks');
console.log("This is the scary game");

// TIC TAC TOE HELL
// var c = document.getElementById("Canvas1");
// var ctx = c.getContext("2d");
// ctx.font = "60px Raleway, sans-serif";
// ctx.strokeText("X",10,50);

// //Function that pops up the Blatt names at the push of a button
// function greetings() {
//        alert("Mike, Bindy, Shane, Chance and Tara");
//       }

// function myFunction() {
//     document.getElementById("move1").innerHTML = ('X');
// }
// function myFunction() {
//     document.getElementById("move2").innerHTML = ('X');
// }
// function myFunction() {
//     document.getElementById("move3").innerHTML = ('X');
// }




// Set up variables and player elements

var catHealth = $('#catHealth'),
	attackBTN1 = $('#catAttack'),
	catDamage;

var catHealth = $('#catHealth'),
	attackBTN2 = $('#catBigAttack'),
	catDamage;

var dogHealth =  $('#dogHealth'),
	attackBTN3 = $('#dogAttack'),
	dogDamage;

var dogHealth =  $('#dogHealth'),
	attackBTN4 = $('#dogBigAttack'),
	dogDamage;

// Set up the constructors for the cat and dog

var Cat  = function (options){
	var options = options || {};
	this.name = options.name;
	this.health = 100;
	this.attack = function (target) {
		target.health = target.health - 10;
	};
	this.bigattack = function (target) {
		target.health = target.health - Math.round(2.5);
	};
	this.elem = options.elem;
};

var Dog  = function (options){
	var options = options || {};
	this.name = options.name;
	this.health = 100;
	this.attack = function (target) {
		target.health = target.health - 10;
	};
	this.attack = function (target) {
		target.health = target.health - Math.round(2.5);
	};
	this.elem = options.elem;
};

//Set up instances when cat and dog fight;
var fifi = new Cat  ({
	name: "Fifi",
	elem: $('.cat')
	});

var fido = new Dog ({
	name: "Fido",
	elem: $('.dog')
	});

//TO ATTACK DOG OR THE CAT

var health = 
	catDamage;
	dogDamage;


attackBTN1.on('click', function () {
  	fifi.attack(fido);
});

attackBTN2.on('click', function () {
  	fifi.attack(fido);
});

attackBTN3.on('click', function () {
  	fido.attack(fifi);
});

attackBTN4.on('click', function () {
  	fido.attack(fifi);
});

var attack = function (cat, dog) {
};

attackBTN1.prop("disabled", false).next("Next turn");



// var dog.health -=
// 	dogDamage;


// if (attackee.health > 0) {
// 	attackee.elem.find('input').value(attackee.health);
// }

// if (attackee instanceofCat){
// 	_.delay(process.attack,1000, attackee, attacker);
// }

// }else{
// 	if(attackee instanceofPlayer) }
// 		"You lose"
// 	$('body').empty().css('background', green);

 	



