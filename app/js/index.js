/* styling */
require('styles/main.scss');
/* js */

import $, { data } from 'jquery';
import { log, logTitle } from 'logger';
import { resolve } from 'bluebird';

/* your imports */

logTitle('Promises_Fetch_API');
/* coding examples */
// callback adalah function di dalam function

const getRandomUsers = n => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
    fetchRandomUsers.then(data => {
        data.json().then(randomUsers => {
            log(JSON.stringify(randomUsers.results.length));
            randomUsers.results.forEach(user =>{
                const {gender, email} = user;
                log(`${gender} - ${email}`);
            })
        })
    });
}

getRandomUsers(10);