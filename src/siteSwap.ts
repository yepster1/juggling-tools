export interface siteSwap {
  sequence: juggle[];
}

export interface hands {
  left: juggle[];
  right: juggle[];
}

export interface juggle {
  siteSwap: number;
  cross?: "x";
}

export function createSiteSwapFromString(str: string): siteSwap {
  str = stripUnimportantCharacters(str);
  var Juggles: juggle[] = [];
  var splits = str.split("x");
  for (var i = 0; i < splits.length; i++) {
    var sequence = splits[i].split("");
    for (var n = 0; n < sequence.length; n++) {
      var juggle: juggle = { siteSwap: parseInt(sequence[n]) };
      if (i < splits.length - 1 && n == sequence.length - 1) {
        juggle.cross = "x";
      }
      Juggles.push(juggle);
    }
  }
  return { sequence: Juggles };
}

function stripUnimportantCharacters(str: string) {
  str = str.replace(/\(/g, "");
  str = str.replace(/\)/g, "");
  str = str.replace(/,/g, "");
  return str;
}

//function to take a siteSwap as an input and return whether it is possible
export function isSiteSwapPossible(siteSwap: siteSwap): boolean {
  return false;
}

//function to take a siteSwap and convert it to the throws each hand makes
export function siteSwapToHands(siteSwap: siteSwap): hands {
  return null;
}

export function convertToAsync(siteSwap: siteSwap): siteSwap {
  return null;
}

export function convertToSync(siteSwap: siteSwap): siteSwap[] {
  return null;
}

export function shiftLeft(siteSwap: siteSwap): siteSwap {
  return null;
}

export function shiftRight(siteSwap: siteSwap): siteSwap {
  return null;
}
