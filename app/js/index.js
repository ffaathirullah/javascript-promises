/* styling */
require('styles/main.scss');
/* js */

import $ from 'jquery';
import { log, logTitle } from 'logger';

/* your imports */

logTitle('Spread_Array');
/* coding examples */
// callback adalah function di dalam function


const array1 = ["Fcahrul", "Faathir", "Rullah"];
const array2 = ["agus", "asep", "udin"];

const concatArray = [...array1, ...array2];

concatArray.forEach(function(name){
    log(name);
});

const name = "fachrul";

const namanya = [...name];

namanya.forEach(function(namew){
    log(namew);
})

const addNumbers = function(n1,n2,n3){
    return n1 + n2 + n3;
}

const number = [1,2,4];

const addition= addNumbers(...number);

log(addition);