/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

import { setState, getState } from "../store";

const update = (e, i) => {
    let tmp = getState();
    if (i < tmp.length && (-i > -tmp.length)) {
        tmp.splice(i, 1, e);
        setState(tmp);
    } else {
        console.error("update: index out of range");
    }
};

export default update;
