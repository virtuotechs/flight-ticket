import React,{Component} from 'react';
import {getLocalFlights} from '../api';
const Test = (flights) =>
{
console.log(flights);
//Comparer Function
// const GetSortOrder = (prop) => {  
//     return function(a, b) {  
//          console.log(typeof a[prop]);
//           var aVal = parseInt(a[prop]), bVal = parseInt(b[prop])
//         if (aVal > bVal) {  
//             return 1;  
//         } else if (aVal < bVal) {  
//             return -1;  
//         }  
//         return 0;  
//     }  
// }  
  
// array.sort(GetSortOrder("Experience")); //Pass the attribute to be sorted on
// console.log("Sorted Employee Experience : ");  
//    console.log(array);

return (
    <h1>Testing</h1>
)
}

Test.getInitialProps = async ({req}) =>
{
    const res = await getLocalFlights()
    const json = await res;
    console.log(json);
    return {
        flights: json
    }  
}
export default Test;

