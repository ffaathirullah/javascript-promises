/* styling */
require('styles/main.scss');
/* js */

import $ from 'jquery';
import { log, logTitle } from 'logger';

/* your imports */

logTitle('Array Destructuring');
/* coding examples */
// callback adalah function di dalam function

const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];
// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

const [oke, mariam , joe, ...sisanya] = names;
log(`${oke} ${mariam} ${joe} ${sisanya}`);
