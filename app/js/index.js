/* styling */
require('styles/main.scss');
/* js */

import $ from 'jquery';
import { log, logTitle } from 'logger';

/* your imports */

logTitle('ES6 Class');
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

const bobby = new Animal("Fachrul", 2);
bobby.logAge();