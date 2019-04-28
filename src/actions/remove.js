/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import { setState, getState } from "../store";

const remove = (i) => {
    let tmp = getState();
    tmp.splice(i, 1);
    setState(tmp);
    console.log(getState());
};

export default remove;
