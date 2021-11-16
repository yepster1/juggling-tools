import { expect } from "chai";
import { createSiteSwapFromString, siteSwap, juggle } from "../src/siteSwap";

describe("createSiteSwapFromString", function () {
  it("correctly creates a siteswap from a valid string", function () {
    const expectedResult: siteSwap = { sequence: [{ siteSwap: 3 }] };
    let result = createSiteSwapFromString("3");
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });

  it("correctly creates a siteswap from a valid string", function () {
    const expectedResult: siteSwap = {
      sequence: [{ siteSwap: 4 }, { siteSwap: 4 }],
    };
    let result = createSiteSwapFromString("44");
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });

  it("correctly creates a siteswap from a valid sync string", function () {
    const expectedResult: siteSwap = {
      sequence: [{ siteSwap: 4, cross: "x" }, { siteSwap: 4 }],
    };
    let result = createSiteSwapFromString("4x4");
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });

  it("correctly creates a siteswap from a valid sync string", function () {
    const expectedResult: siteSwap = {
      sequence: [
        { siteSwap: 4, cross: "x" },
        { siteSwap: 4 },
        { siteSwap: 4, cross: "x" },
        { siteSwap: 4 },
      ],
    };
    let result = createSiteSwapFromString("(4x4)(4x4)");
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });
});
