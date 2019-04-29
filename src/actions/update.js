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
    tmp.splice(i, 1, e);
    setState(tmp);
};

export default update;
