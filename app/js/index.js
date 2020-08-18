/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
import { map } from 'bluebird';
/* your imports */
import * as Math from './Math';

logTitle('Import and Export');
/* coding examples */
// callback adalah function di dalam function


log(Math.add(2,2));
log(Math.PI);