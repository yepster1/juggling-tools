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
  return null;
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

export function shifRight(siteSwap: siteSwap): siteSwap {
  return null;
}
