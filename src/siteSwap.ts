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
  if (siteSwap.sequence.length % 2 == 1) {
    throw new Error("siteSwap must have an even length");
  }
  var hands: hands = { left: [], right: [] };
  for (var i = 0; i < siteSwap.sequence.length; i++) {
    if (i % 2 == 0) {
      hands.left.push(siteSwap.sequence[i]);
    } else {
      hands.right.push(siteSwap.sequence[i]);
    }
  }
  return hands;
}

export function handsToSiteSwap(hands: hands): siteSwap {
  var siteSwap: siteSwap = { sequence: [] };
  for (var i = 0; i < hands.left.length; i++) {
    siteSwap.sequence.push(hands.left[i]);
    siteSwap.sequence.push(hands.right[i]);
  }
  return siteSwap;
}

export function convertToAsync(siteSwap: siteSwap): siteSwap {
  return null;
}

export function convertToSync(siteSwap: siteSwap): siteSwap[] {
  return null;
}

export function shiftLeft(siteSwap: siteSwap): siteSwap {
  const hands: hands = siteSwapToHands(siteSwap);
  for (var i = 0; i < hands.left.length; i++) {
    if (hands.left[i].siteSwap % 2 == 1) {
      hands.left[i].siteSwap--;
      hands.left[i].cross = "x";
    }
  }
  for (var i = 0; i < hands.right.length; i++) {
    if (hands.right[i].siteSwap % 2 == 1) {
      hands.right[i].siteSwap++;
      hands.right[i].cross = "x";
    }
  }
  return handsToSiteSwap(hands);
}
function siteSwapHands(siteSwap: siteSwap): siteSwap {
  const hands: hands = siteSwapToHands(siteSwap);
  const temp = hands.left;
  hands.left = hands.right;
  hands.right = temp;
  return handsToSiteSwap(hands);
}

export function shiftRight(siteSwap: siteSwap): siteSwap {
  siteSwap.sequence.unshift(siteSwap.sequence.pop());
  const hands: hands = siteSwapToHands(siteSwap);
  for (var i = 0; i < hands.left.length; i++) {
    if (hands.left[i].siteSwap % 2 == 1) {
      hands.left[i].siteSwap++;
      hands.left[i].cross = "x";
    }
  }
  for (var i = 0; i < hands.right.length; i++) {
    if (hands.right[i].siteSwap % 2 == 1) {
      hands.right[i].siteSwap--;
      hands.right[i].cross = "x";
    }
  }
  return handsToSiteSwap(hands);
}

//In general my stuff needs to be improved a lot haha
export function siteSwapToString(siteSwap: siteSwap): string {
  var str: string = "";
  for (var i = 0; i < siteSwap.sequence.length - 1; i += 2) {
    if (siteSwap.sequence[i].cross || siteSwap.sequence[i + 1].cross) {
      str +=
        "(" +
        siteSwap.sequence[i].siteSwap +
        siteSwap.sequence[i].cross +
        "," +
        siteSwap.sequence[i + 1].siteSwap +
        siteSwap.sequence[i + 1].cross +
        ")";
    } else {
      str +=
        siteSwap.sequence[i].siteSwap + "" + siteSwap.sequence[i + 1].siteSwap;
    }
    if (siteSwap.sequence.length % 2 == 1) {
      str += siteSwap.sequence[i].siteSwap;
    }
  }
  return str;
}
