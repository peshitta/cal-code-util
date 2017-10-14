/** @module calCodeUtil */
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
  '&' // Hebrew Sin
];

/**
 * Base consonants + extra consonants
 * @constant
 * @type { string[] }
 */
export const allConsonants = Object.freeze(consonants.concat(extraConsonants));

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
 * Sedra/CAL diacritic name map
 * 1. qushaya: __'__ - dot above
 * 2. rukkakha: __,__ - dot below
 * 3. lineaOccultans: **_** - linea occultans
 * 4. seyame: __*__ - seyame, rebwe
 * @constant
 * @type { Object.<string, string> }
*/
export const diacriticsByName = Object.freeze(
  Object.create(null, {
    qushaya: { value: "'", enumerable: true },
    rukkakha: { value: ',', enumerable: true },
    lineaOccultans: { value: '_', enumerable: true },
    seyame: { value: '*', enumerable: true }
  })
);

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
 * Vowels and diacritics: used for consonantal only mapping
 * @constant
 * @type { Array.<string> }
 */
export const dotting = Object.freeze(vowels.concat(diacritics));

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

/**
 * Returns true if c is dotting character
 * @param { string } c input character
 * @returns { boolean } true if c is dotting
 */
export const isDotting = c => dotting.indexOf(c) > -1;

/**
 * Return true if input word has vowels or diacritics
 * @param { string } word input CAL code word
 * @returns { boolean } true if word has vowels or diacritics
 */
export const isDotted = word => {
  if (!word) {
    return false;
  }
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    if (isDotting(c)) {
      return true;
    }
  }
  return false;
};

/**
 * Remove dotting (vowels and diacritics), leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeDotting = word => {
  if (!word) {
    return word;
  }

  let hasDotting = false;
  const stack = [];
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    if (isDotting(c)) {
      hasDotting = true;
    } else {
      stack.push(c);
    }
  }
  return hasDotting ? stack.join('') : word;
};
