/*
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/

import { setState, getState } from "../store";

function validateStringArray(o) {
    let isArrayOfString = Array.isArray(o);
    for (let index = 0; isArrayOfString && (index < o.length); index++) {
        isArrayOfString = (typeof(o[index]) === "string");
    }
    return isArrayOfString;
}

const add = (e) => {
    if(typeof(e) === "string") {
        let tmp = getState(); // getState().push(e) works but maybe setState does some updates IDK about ?
        tmp.push(e);
        setState(tmp);
    } else if (validateStringArray(e)) {
        setState(getState().concat(e));
    } else {
        console.error("add: parameter is not string nor string[] !");
    }
};

export default add;
