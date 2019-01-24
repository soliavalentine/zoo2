var animalPopulation = 0;
var ANIMALS = [];
$(document).ready(function(){
    var Tigger = new Tiger("Tigger");
    var Pooh = new Bear("Pooh");
    var Rarity = new Unicorn("Rarity");
    var Gemma = new Giraffe("Gemma");
    var Stinger = new Bee("Stinger");
    ANIMALS.push(Tigger,Pooh,Rarity,Gemma,Stinger);
});
function startGame() {
    var animal;
    var name = $("#Name").val();
    var selectAnimal = $("#Animal").val();
    switch (parseInt(selectAnimal)) {
        case 0:
            animal = 0;
            break;
        case 1:
            animal = new Tiger(name);
            break;
        case 2:
            animal = new Bear(name);
            break;
        case 3:
            animal = new Unicorn(name);
            break;
        case 4:
            animal = new Giraffe(name);
            break;
        case 5:
            animal = new Bee(name);
            break;
    }
        if(animal==0){
            $("#all").append("Please choose an animal <br>");
        }else {
            ANIMALS.push(animal);
            $("#all").append(name + "the " + animal.constructor.name + " was created <br>");
        }
}
function deleteAnimal() {
    var name = $("#Delete1").val();
    for(var i= 0;i<ANIMALS.length; i++){
        if(ANIMALS[i].name==name){
            var num = ANIMALS.indexOf(ANIMALS[i]);
            ANIMALS.splice(num,1);
        }
    }
    $("#all").append(name + " was deleted. <br>");
}
function feedAnimal() {
    $("#all").empty();
    var you = new Zookeeper("You");
    you.feedAnimals();
}
function seeAnimal(){
    $("#barn").empty();
    for(var i = 0; i< ANIMALS.length; i++){
        $("#barn").append(ANIMALS[i].name + " the " + ANIMALS[i].constructor.name + "s' favorite food is " + ANIMALS[i].favoriteFood + "<br>");
    }
}
class Animal {
    constructor(name,food){
        this.name = name;
        this.favoriteFood=food;
        animalPopulation++;
    }
    sleep() {
        $("#all").append(this.name + " sleeps for 8 hours. ");
    }
    eat(food) {
        $("#all").append(this.name +" eats " + food + ". <br>");
        food==this.favoriteFood ? $("#all").append("Yum!!" + this.name + " wants more " + food + ".<br>") : this.sleep();
    }
    static getPopulation() {
        return animalPopulation;
    }
}

class Tiger extends Animal{

    constructor(name) {
        super(name, "meat");
        this.name = name;
        this.favoriteFood = "meat";
    }

    sleep() {
        $("#all").append(this.name + " sleeps for 8 hours. <br>");
    }

    eat(food) {
        console.log(this.name +" eats " + food);
        food==this.favoriteFood ? $("#all").append("Yum!!" + this.name + " wants more " + food + ". <br>") : this.sleep();
    }
}
class Bear extends Animal{

    constructor(name) {
        super(name,"fish    ");
        this.name = name;
        this.favoriteFood = "fish";
    }

    sleep() {
        $("#all").append(this.name + " hibernates for 4 months.<br>");
    }

    eat(food) {
        $("#all").append(this.name +" eats " + food + ".");
        food==this.favoriteFood ? $("#all").append("Yum!!" + this.name + " wants more " + food) : this.sleep();
    }
}
class Unicorn extends Animal{
    constructor(name){
        super(name,"marshmallows");
        this.name = name;
        this.favfood = "marshmallows";
    }
    sleep(){
        $("#all").append(this.name + " sleeps in a cloud. " );
    }eat(food){
        $("#all").append(this.name + " eats " + food + ". <br>");
        food == this.favfood ? $("#all").append("Yum!!," + this.name + " wants more " + this.favfood) + this.sleep(): "";
    }
}
class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
        this.name = name;
    }
    eat(food){
        food == "leaves" ? super.eat('leaves') + super.sleep() : $("#all").append("YUCK!!!" + this.name + " will not eat " + food + ". <br>");
    }
}
class Bee extends Animal{
    constructor(name){
        super(name, "pollen");
        this.name = name;
    }
    sleep(){
        $("#all").append(this.name + " never sleeps.");
    }
    eat(food){
        food == "pollen" ? super.eat('pollen') + this.sleep() : $("#all").append("YUCK!!!" + this.name + " will not eat " + food + ". <br>");
    }
}
class Zookeeper{
    constructor(name){
        this.name = name;

    }
    feedAnimals(){
        var food = $("#feed").val();
        $("#all").append(this.name + " are feeding " + food + " to " + ANIMALS.length + " animals <br>");
        for(var i = 0; i < ANIMALS.length; i++){
            ANIMALS[i].eat(food);
        }
    }
}
