/* styling */
require('styles/main.scss');
/* js */

import $ from 'jquery';
import { log, logTitle } from 'logger';

/* your imports */

logTitle('Lexical_this');
/* coding examples */
// callback adalah function di dalam function

const person = {
    name: 'alex',
    cars: ['toyota', 'alpha'],
        toString: function(){
            // log(`${this.name} has ${this.cars}`)
            const that = this;
            this.cars.forEach((car) => {
                log(`${that.name} has ${car}`)
            });
        }
}

person.toString();