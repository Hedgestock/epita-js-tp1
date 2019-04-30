import { getState } from "../store";

import { default as remove } from "./remove"; // why ? IDK but jest seems to want default import instead of named...

// Cannot test validateStringArray without rewiring.

test('test removing at valid index', () => {
    //set up
    const index = 2;
    const witness = [...getState()];
    witness.splice(index, 1);

    //actual test
    remove(index);

    //checking of the result
    expect(getState().sort()).toEqual(witness.sort());
  });

test('test removing at invalid index', () => {
    //set up
    const index = 18;
    const witness = [...getState()];
    witness.splice(index, 1);

    //actual test
    remove(index);

    //checking of the result
    expect(getState().sort()).toEqual(witness.sort());
  });