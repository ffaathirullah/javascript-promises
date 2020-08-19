/* styling */
require('styles/main.scss');
/* js */

import $ from 'jquery';
import { log, logTitle } from 'logger';

/* your imports */

logTitle('Function_Default_Parameters');
/* coding examples */
// callback adalah function di dalam function

const calculatePay = (yearSalary , bonus ={
    teamBonus:0,
    employeeBonus: 0
}) => {
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}

log(calculatePay(11000, {teamBonus: 10000, employeeBonus:6000}));