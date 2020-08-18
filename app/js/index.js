/* styling */
require('styles/main.scss');
/* js */

import $ from 'jquery';
import { log, logTitle } from 'logger';

/* your imports */

logTitle('Spread_Array_withObject');
/* coding examples */
// callback adalah function di dalam function

const address = {
    city : "Bandung",
    country : "Indonesia"
}

const name = {
    nama : "Fachrul",
    umur : 21
}

const person = {...address, ...name};

log(JSON.stringify(person, null, 2));