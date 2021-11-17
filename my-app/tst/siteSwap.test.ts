import { expect } from "chai";
import {
  createSiteSwapFromString,
  siteSwapToHands,
  hands,
  siteSwap,
  handsToSiteSwap,
  shiftLeft,
  shiftRight,
  siteSwapToString,
  convertStringToSync,
} from "../src/tools/siteSwap";

describe("createSiteSwapFromString", function () {
  it("correctly creates a siteswap from a valid string", function () {
    const expectedResult: siteSwap = { sequence: [{ siteSwap: 3 }] };
    let result = createSiteSwapFromString("3");
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });

  it("correctly creates a siteswap from a valid string 4", function () {
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

  it("correctly creates a siteswap from a valid sync string 4x44x4", function () {
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

describe("siteSwapToHands", function () {
  it("converts siteSwapToHands", function () {
    const expectedResult: hands = {
      left: [{ siteSwap: 4, cross: "x" }],
      right: [{ siteSwap: 4 }],
    };
    let result = siteSwapToHands({
      sequence: [{ siteSwap: 4, cross: "x" }, { siteSwap: 4 }],
    });
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });

  it("converts siteSwapToHands 4x4x", function () {
    const expectedResult: hands = {
      left: [
        { siteSwap: 4, cross: "x" },
        { siteSwap: 4, cross: "x" },
      ],
      right: [{ siteSwap: 4 }, { siteSwap: 4 }],
    };
    let result = siteSwapToHands({
      sequence: [
        { siteSwap: 4, cross: "x" },
        { siteSwap: 4 },
        { siteSwap: 4, cross: "x" },
        { siteSwap: 4 },
      ],
    });
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });
});

describe("siteHandsToSiteswap", function () {
  it("converts siteHandsToSiteSwap 2", function () {
    const expectedResult: siteSwap = {
      sequence: [{ siteSwap: 4, cross: "x" }, { siteSwap: 4 }],
    };
    let result = handsToSiteSwap({
      left: [{ siteSwap: 4, cross: "x" }],
      right: [{ siteSwap: 4 }],
    });
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });

  it("converts siteHandsToSiteSwap 4", function () {
    const expectedResult: siteSwap = {
      sequence: [
        { siteSwap: 4, cross: "x" },
        { siteSwap: 4 },
        { siteSwap: 4, cross: "x" },
        { siteSwap: 4 },
      ],
    };
    let result = handsToSiteSwap({
      left: [
        { siteSwap: 4, cross: "x" },
        { siteSwap: 4, cross: "x" },
      ],
      right: [{ siteSwap: 4 }, { siteSwap: 4 }],
    });
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });
});

describe("shiftLeft", function () {
  it("shift a siteswap left 7445", function () {
    const expectedResult: siteSwap = {
      sequence: [
        { siteSwap: 6, cross: "x" },
        { siteSwap: 4 },
        { siteSwap: 4 },
        { siteSwap: 6, cross: "x" },
      ],
    };
    let result = shiftLeft({
      sequence: [
        { siteSwap: 7 },
        { siteSwap: 4 },
        { siteSwap: 4 },
        { siteSwap: 5 },
      ],
    });
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });

  it("shift a siteswap left 7531", function () {
    const expectedResult: siteSwap = {
      sequence: [
        { siteSwap: 6, cross: "x" },
        { siteSwap: 6, cross: "x" },
        { siteSwap: 2, cross: "x" },
        { siteSwap: 2, cross: "x" },
      ],
    };
    let result = shiftLeft({
      sequence: [
        { siteSwap: 7 },
        { siteSwap: 5 },
        { siteSwap: 3 },
        { siteSwap: 1 },
      ],
    });
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });
});

describe("shiftRight", function () {
  it("shift a siteswap right 7445", function () {
    const expectedResult: siteSwap = {
      sequence: [
        { siteSwap: 6, cross: "x" },
        { siteSwap: 6, cross: "x" },
        { siteSwap: 4 },
        { siteSwap: 4 },
      ],
    };
    let result = shiftRight({
      sequence: [
        { siteSwap: 7 },
        { siteSwap: 4 },
        { siteSwap: 4 },
        { siteSwap: 5 },
      ],
    });
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });

  it("shift a siteswap right 7531", function () {
    const expectedResult: siteSwap = {
      sequence: [
        { siteSwap: 2, cross: "x" },
        { siteSwap: 6, cross: "x" },
        { siteSwap: 6, cross: "x" },
        { siteSwap: 2, cross: "x" },
      ],
    };
    let result = shiftRight({
      sequence: [
        { siteSwap: 7 },
        { siteSwap: 5 },
        { siteSwap: 3 },
        { siteSwap: 1 },
      ],
    });
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });
});

describe("convert siteSwapToString", function () {
  it("convert Normal even length", function () {
    const expectedResult: string = "4444";
    let result = siteSwapToString({
      sequence: [
        { siteSwap: 4 },
        { siteSwap: 4 },
        { siteSwap: 4 },
        { siteSwap: 4 },
      ],
    });
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });

  it("convert with x", function () {
    const expectedResult: string = "(2x,6x)(6x,2x)";
    let result = siteSwapToString({
      sequence: [
        { siteSwap: 2, cross: "x" },
        { siteSwap: 6, cross: "x" },
        { siteSwap: 6, cross: "x" },
        { siteSwap: 2, cross: "x" },
      ],
    });
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });

  it("convert with length 3", function () {
    const expectedResult: string = "333";
    let result = siteSwapToString({
      sequence: [{ siteSwap: 3 }, { siteSwap: 3 }, { siteSwap: 3 }],
    });
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });
});

describe("convert string to async", function () {
  it("convert 7531 to async", function () {
    const expectedResult: string[] = ["(6x,6x)(2x,2x)", "(2x,6x)(6x,2x)"];
    let result = convertStringToSync("7531");
    expect(JSON.stringify(result)).equal(JSON.stringify(expectedResult));
  });
});
