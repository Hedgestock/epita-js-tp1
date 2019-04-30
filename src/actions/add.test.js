import { getState } from "../store";

import { default as add } from "./add"; // why ? IDK but jest seems to want default import instead of named...

// Cannot test validateStringArray without rewiring.

test('test adding a string', () => {
    //set up
    const to_add = "string to add";
    const witness = [...getState()];
    witness.push(to_add);

    //actual test
    add(to_add);

    //checking of the result
    expect(getState().sort()).toEqual(witness.sort());
  });

test('test adding a string Array', () => {
    //set up
    const to_add = ["string to add 1","string to add 2","string to add 3"];
    const witness = getState().concat(to_add);

    //actual test
    add(to_add);

    //checking of the result
    expect(getState().sort()).toEqual(witness.sort());
  });

test('test adding a string Array', () => {
    //set up
    const to_add = 13;
    const witness = getState();

    //actual test
    add(to_add);

    //checking of the result
    expect(getState().sort()).toEqual(witness.sort());
  });
