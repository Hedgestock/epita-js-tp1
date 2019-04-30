import { getState } from "../store";

import { default as list } from "./list"; // why ? IDK but jest seems to want default import instead of named...

test('test getting list', () => {
    //checking of the result
    expect(list()).toEqual(getState());
  });
