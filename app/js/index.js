/* styling */
require('styles/main.scss');
/* js */

import $ from 'jquery';
import { log, logTitle } from 'logger';

/* your imports */

logTitle('Array_Destructuring');
/* coding examples */
// callback adalah function di dalam function

const getUser = () => {
    return {
      name: 'John',
      surname: 'Doe',
      gender: 'male',
      address: {
        country: 'United States',
        city: 'California',
        postCode: 'CA',
        fullAddress: {
          doorNumber: 22,
          street: 'LA st'
        }
      },
      age: 29
    }
  };
  
  const user = getUser();
  
//   const name = user.name;
//   const age = user.age;
//   const country = user.address.country;
//   const doorNumber = user.address.fullAddress.doorNumber;
  
const {name, age, address : {country : theCountry }} = user;
const {address : {fullAddress : {doorNumber : number}}} = user;

  log(name);
  log(age);
  log(theCountry);
  log(number);
  