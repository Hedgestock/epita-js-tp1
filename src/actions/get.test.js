import { getState } from "../store";

import { default as get } from "./get"; // why ? IDK but jest seems to want default import instead of named...

test('test getting at valid indexes', () => {
    for (let index = 0; index < getState().length; index++) {
        //set up
        const witness = getState()[index];

        //checking of the result
        expect(get(index)).toEqual(witness);
    }
  });

  test('test getting at invalid indexes', () => {
    for (let index = getState().length; index < getState().length * 2; index++) {

        //checking of the result
        expect(get(index)).toEqual(undefined);
    }
  });
