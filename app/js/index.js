/* styling */
require('styles/main.scss');
/* js */

import $ from 'jquery';
import { log, logTitle } from 'logger';

/* your imports */

logTitle('inheritance');
/* coding examples */
// callback adalah function di dalam function

class Animal {
    constructor(name, age){
        log(`${name} is an animal and was created`);
        this.name = name;
        this.age = age;
    }

    logAge() {
        log(`${this.name} is ${this.age} year old`);
    }
}

const bobby = new Animal("usep", 2);
bobby.logAge();

class Cat extends Animal{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed; 
    }

    logAge() {
        log(`${this.name} is ${this.age} year old`);
    }
}

const agus = new Animal("Agus", 2, "oke");
agus.logAge();