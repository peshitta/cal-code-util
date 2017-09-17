/** @module cal */
/**
 * CAL consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  // abgad
  ')',
  'b',
  'g',
  'd',

  // hawaz
  'h',
  'w',
  'z',

  // ḥaṭy
  'x',
  'T',
  'y',

  // kalman
  'k',
  'l',
  'm',
  'n',

  // saʿpac
  's',
  '(',
  'p',
  'c',

  // qarshat
  'q',
  'r',
  '$',
  't'
]);

/**
 * Extra CAL consonants specific to Palestinian or Hebrew
 * @constant
 * @type { string[] }
 */
export const extraConsonants = [
  'P', // Palestinian Syriac P
  '&' // Hebrew Shin
];

/**
 * Base consonants + extra consonants
 */
export const allConsonants = consonants.concat(extraConsonants);

/**
 * CAL common vowels
 * @constant
 * @type { string[] }
*/
export const commonVowels = Object.freeze(['a', 'o', 'e', 'i', 'u']);

/**
 * CAL eastern/hebrew only vowels
 * @constant
 * @type { string[] }
*/
export const easternVowels = Object.freeze(['E', 'O']);

/**
 * CAL vowels including Eastern/Hebrew ones
 * @constant
 * @type { string[] }
*/
export const vowels = Object.freeze(commonVowels.concat(easternVowels));

/**
 * Sedra/CAL diacritic characters:
 * 1. __'__ dot above, Qushaya
 * 2. __,__ dot below, Rukkakha
 * 3. **_** line under
 * 4. __*__ Seyame
 * @constant
 * @type { string[] }
*/
export const diacritics = Object.freeze(["'", ',', '_', '*']);

/**
 * Is character c a CAL consonant
 * @param { string } c input character
 * @returns { boolean } true if c is CAL consonant
 */
export const isConsonant = c => allConsonants.indexOf(c) > -1;

/**
 * Is character c a CAL vowel
 * @param { string } c input character
 * @returns { boolean } true if c is CAL vowel
 */
export const isVowel = c => vowels.indexOf(c) > -1;

/**
 * Is character c a diacritic? Same characters used for both Sedra 3 and CAL.
 * @param { string } c input character
 * @returns { boolean } true if c is a diacritic
 */
export const isDiacritic = c => diacritics.indexOf(c) > -1;
