import { adjectives, nouns } from "@/lib/data";

export const getRandomElement = (array: string[], previous: string) => {
  let result;
  do {
    result = array[Math.floor(Math.random() * array.length)];
  } while (result === previous);
  return result;
};

export const generateCodename = (prevAdj: string, prevNoun: string) => {
  const adj = getRandomElement(adjectives, prevAdj);
  const noun = getRandomElement(nouns, prevNoun);
  return {
    codename: `${adj}-${noun}-${Math.floor(Math.random() * 1000)}`,
    adj,
    noun,
  };
};
