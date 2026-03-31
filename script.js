//complete this code
class Animal {
	constructor(species){
		this.species=species;
		// this.string=string;
	}
	species(){
		return this.species;
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
	
}

class Dog extends Animal {

	purr(){
		console.log("woof");
	}
	
}

class Cat extends Animal {

	bark(){
		console.log("purr");
	}
	
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
