/* styling */
require('styles/main.scss');
/* js */

import $ from 'jquery';
import { log, logTitle } from 'logger';

/* your imports */

logTitle('Template Literal');
/* coding examples */
// callback adalah function di dalam function

const name = "Anna";
const asal = "Bandung";
const umur = 19;

log(`Nama ${name.length} asal ${asal} umur ${umur}`);

