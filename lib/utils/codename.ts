import { adjectives, nouns } from "@/lib/data";

// Track last N generated items to avoid repetition
const HISTORY_SIZE = 5;
const recentAdjs = new Set<string>();
const recentNouns = new Set<string>();

export const getRandomElement = (
  array: string[],
  previous: string,
  recentSet: Set<string>,
) => {
  let result;
  do {
    // Using a more uniform distribution method
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    const randomNumber = randomBuffer[0] / (0xffffffff + 1);
    result = array[Math.floor(randomNumber * array.length)];
  } while (result === previous || recentSet.has(result));

  // Update recent items
  recentSet.add(result);
  if (recentSet.size > HISTORY_SIZE) {
    recentSet.delete(recentSet.values().next().value);
  }

  return result;
};

export const generateCodename = (prevAdj: string, prevNoun: string) => {
  let adj, noun;
  do {
    adj = getRandomElement(adjectives, prevAdj, recentAdjs);
    noun = getRandomElement(nouns, prevNoun, recentNouns);
  } while (adj === noun);

  return {
    codename: `${adj}-${noun}-${Math.floor(Math.random() * 1000)}`,
    adj,
    noun,
  };
};
