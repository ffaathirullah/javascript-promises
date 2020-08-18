/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
import { map } from 'bluebird';
/* your imports */
import {add, PI} from './Math';

logTitle('Import and Export');
/* coding examples */
// callback adalah function di dalam function


log(add(2,2));
log(PI);