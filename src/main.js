/** @module cal */
/**
 * CAL consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  ')',
  'b',
  'g',
  'd',
  'h',
  'w',
  'z',
  'x',
  'T',
  'y',
  'k',
  'l',
  'm',
  'n',
  's',
  '(',
  'p',
  'c',
  'q',
  'r',
  '$',
  't'
]);

/**
 * CAL vowels
 * @constant
 * @type { string[] }
*/
export const vowels = Object.freeze(['a', 'o', 'e', 'i', 'u', 'E', 'O']);

/**
 * Sedra/CAL diacretic characters:
 * 1. __'__ dot above, Qushaya
 * 2. __,__ dot below, Rukkakha
 * 3. **_** line under
 * 4. __*__ Seyame
 * @constant
 * @type { string[] }
*/
export const diacretics = Object.freeze(["'", ',', '_', '*']);

/**
 * Is character c a CAL consonant
 * @param { string } c input character
 * @returns { boolean } true if c is CAL consonant
 */
export const isConsonant = c => consonants.indexOf(c) > -1;

/**
 * Is character c a CAL vowel
 * @param { string } c input character
 * @returns { boolean } true if c is CAL vowel
 */
export const isVowel = c => vowels.indexOf(c) > -1;

/**
 * Is character c a diacretic? Same characters used for both Sedra 3 and CAL.
 * @param { string } c input character
 * @returns { boolean } true if c is a diacretic
 */
export const isDiacretic = c => diacretics.indexOf(c) > -1;
