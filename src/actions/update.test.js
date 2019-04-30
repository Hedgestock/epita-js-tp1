import { getState } from "../store";

import { default as update } from "./update"; // why ? IDK but jest seems to want default import instead of named...

// Cannot test validateStringArray without rewiring.

test('test updating at valid indexes', () => {
    //set up
    const updated = "updated string "
    for (let index = 0; index < getState().length; index++) {
        let witness = getState();
        witness.splice(index, 1, updated + index);

        //actual test
        update(index, updated);

        //checking of the result
        expect(getState().sort()).toEqual(witness.sort());
    }
  });

test('test updating at invalid indexes', () => {
    for (let index = getState().length; index < getState().length * 2; index++) {
        //set up
        const witness = getState();
        const updated = "updated string "

        
        //actual test
        update(index, updated);

        //checking of the result
        expect(getState().sort()).toEqual(witness.sort());
    }
  });