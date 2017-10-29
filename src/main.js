/** @module calCodeUtil */
import { hasDotting, clearDotting } from 'aramaic-mapper';

/**
 * CAL consonant name to value map
 * @constant
 * @type { Object.<string, string> }
*/
export const consonantsByName = Object.freeze(
  Object.create(null, {
    alaph: { value: ')', enumerable: true },
    beth: { value: 'b', enumerable: true },
    gamal: { value: 'g', enumerable: true },
    dalath: { value: 'd', enumerable: true },

    he: { value: 'h', enumerable: true },
    waw: { value: 'w', enumerable: true },
    zayn: { value: 'z', enumerable: true },

    heth: { value: 'x', enumerable: true },
    teth: { value: 'T', enumerable: true },
    yod: { value: 'y', enumerable: true },

    kaph: { value: 'k', enumerable: true },
    lamadh: { value: 'l', enumerable: true },
    mim: { value: 'm', enumerable: true },
    nun: { value: 'n', enumerable: true },

    semkath: { value: 's', enumerable: true },
    e: { value: '(', enumerable: true },
    pe: { value: 'p', enumerable: true },
    sadhe: { value: 'c', enumerable: true },

    qoph: { value: 'q', enumerable: true },
    resh: { value: 'r', enumerable: true },
    shin: { value: '$', enumerable: true },
    taw: { value: 't', enumerable: true },

    peReversed: { value: 'P', enumerable: true },
    sin: { value: '&', enumerable: true }
  })
);

const l = consonantsByName;
/**
 * CAL consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  // abgad
  l.alaph,
  l.beth,
  l.gamal,
  l.dalath,

  // hawaz
  l.he,
  l.waw,
  l.zayn,

  // ḥaṭy
  l.heth,
  l.teth,
  l.yod,

  // kalman
  l.kaph,
  l.lamadh,
  l.mim,
  l.nun,

  // saʿpac
  l.semkath,
  l.e,
  l.pe,
  l.sadhe,

  // qarshat
  l.qoph,
  l.resh,
  l.shin,
  l.taw
]);

/**
 * Extra CAL consonants specific to Palestinian or Hebrew
 * @constant
 * @type { string[] }
 */
export const extraConsonants = [
  l.peReversed, // Palestinian Syriac P
  l.sin // Hebrew Sin
];

/**
 * Base consonants + extra consonants
 * @constant
 * @type { string[] }
 */
export const allConsonants = Object.freeze(consonants.concat(extraConsonants));

/**
 * CAL vowel name to value map
 * @constant
 * @type { Object.<string, string> }
*/
export const vowelsByName = Object.freeze(
  Object.create(null, {
    pthaha: { value: 'a', enumerable: true },
    zqapha: { value: 'o', enumerable: true },
    rbasa: { value: 'e', enumerable: true },
    hbasa: { value: 'i', enumerable: true },
    esasa: { value: 'u', enumerable: true },

    zlama: { value: 'E', enumerable: true },
    rwaha: { value: 'O', enumerable: true }
  })
);

const v = vowelsByName;
/**
 * CAL common vowels
 * @constant
 * @type { string[] }
*/
export const commonVowels = Object.freeze([
  v.pthaha,
  v.zqapha,
  v.rbasa,
  v.hbasa,
  v.esasa
]);

/**
 * CAL eastern/hebrew only vowels
 * @constant
 * @type { string[] }
*/
export const easternVowels = Object.freeze([v.zlama, v.rwaha]);

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

const d = diacriticsByName;
/**
 * Sedra/CAL diacritic characters:
 * 1. __'__ dot above, Qushaya
 * 2. __,__ dot below, Rukkakha
 * 3. **_** line under
 * 4. __*__ Seyame
 * @constant
 * @type { string[] }
*/
export const diacritics = Object.freeze([
  d.qushaya,
  d.rukkakha,
  d.lineaOccultans,
  d.seyame
]);

/**
 * Common punctuation
 * @constant
 * @type { Array.<string> }
 */
export const punctuation = Object.freeze([';', '?', '!', '.', '-', ':']);

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
 * Is character c a common punctuation char?
 * @param { string } c input character
 * @returns { boolean } true if c is common punctuation
 */
export const isPunctuation = c => punctuation.indexOf(c) > -1;

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
export const isDotted = hasDotting(isDotting);

/**
 * Remove dotting (vowels and diacritics), leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeDotting = clearDotting(isDotting);
