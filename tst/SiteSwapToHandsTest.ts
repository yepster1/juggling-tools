import { expect } from "chai";
import {
  createSiteSwapFromString,
  siteSwap,
  juggle,
} from "../src/siteSwapToHand";

describe("createSiteSwapFromString", function () {
  it("correctly creates a siteswap from a valid string", function () {
    const expectedResult: siteSwap = { sequence: [{ siteSwap: 3 }] };
    let result = createSiteSwapFromString("3");
    expect(result).equal(expectedResult);
  });

  it("correctly creates a siteswap from a valid string", function () {
    const expectedResult: siteSwap = {
      sequence: [{ siteSwap: 4 }, { siteSwap: 4 }],
    };
    let result = createSiteSwapFromString("44");
    expect(result).equal(expectedResult);
  });

  it("correctly creates a siteswap from a valid sync string", function () {
    const expectedResult: siteSwap = {
      sequence: [{ siteSwap: 4, cross: "x" }, { siteSwap: 4 }],
    };
    let result = createSiteSwapFromString("4x4");
    expect(result).equal(expectedResult);
  });
});
