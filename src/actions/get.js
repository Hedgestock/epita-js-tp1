/*
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import { getState } from "../store";

const get = (index) => {
    return getState()[index];
};

export default get;
