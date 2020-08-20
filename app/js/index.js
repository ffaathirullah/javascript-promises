/* styling */
require('styles/main.scss');
/* js */

import $, { data } from 'jquery';
import { log, logTitle } from 'logger';
import { resolve } from 'bluebird';

/* your imports */

logTitle('Promise.all');
/* coding examples */
// callback adalah function di dalam function

const namesPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
            resolve(["Anna", "Jones", "Ali", "Jake"]);
        }, 3000);

    setTimeout(() => {
        reject("no data back to the server")
    }, 5000);
});

const surnamesPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
            resolve(["Mabrur", "Ucok", "baba", "ali"]);
        }, 3000);

    setTimeout(() => {
        reject("no data back to the server")
    }, 5000);
});



// promise.then(response => {
//     log(response);
// }).catch(error => {
//     log(error);
// });


Promise.all([namesPromise, surnamesPromise]).then(data => {
    const [names, surnames] = data;
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const surname = surnames[i];
        log(`${name} ${surname}`);
    }
}).catch(error => {
    log(error);
});