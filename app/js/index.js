/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';

/* your imports */

logTitle('Import and Export');
/* coding examples */
// callback adalah function di dalam function

const Person = {};

Person["name"] = "Maria";

log(Person.name);

const array = [];
array.push("Maria di Array");

log(array[0]);


