const test = require('assert');
const sut = require('../build/cal-code-util');

describe('CAL', () => {
  describe('Util', () => {
    it('Is CAL Consonant', () => {
      test.ok(sut.isConsonant('b'), 'b  isConsonant');
      test.ok(sut.isConsonant('$'), '$ isConsonant');
      test.ok(sut.isConsonant(')'), ') isConsonant');
      test.ok(sut.isConsonant('('), '( isConsonant');
      test.ok(sut.isConsonant('g'), 'g isConsonant');
      test.ok(sut.isConsonant('P'), 'P isConsonant');
      test.ok(sut.isConsonant('&'), '& isConsonant');
      test.ok(!sut.isConsonant('B'), 'B isConsonant');
      test.ok(!sut.isConsonant('G'), 'G isConsonant');
      test.ok(!sut.isConsonant('u'), 'u isConsonant');
    });
    it('Is CAL vowel', () => {
      test.ok(sut.isVowel('a'), 'a isVowel');
      test.ok(sut.isVowel('o'), 'o isVowel');
      test.ok(sut.isVowel('e'), 'e isVowel');
      test.ok(sut.isVowel('i'), 'i isVowel');
      test.ok(sut.isVowel('u'), 'u isVowel');
      test.ok(sut.isVowel('E'), 'E isVowel');
      test.ok(sut.isVowel('O'), 'O isVowel');
      test.ok(!sut.isVowel('A'), 'A isVowel');
      test.ok(!sut.isVowel('I'), 'I isVowel');
      test.ok(!sut.isVowel('U'), 'U isVowel');
      test.ok(!sut.isVowel(''), "'' isVowel");
    });
  });
});

describe('Diacritics', () => {
  it(' isDiacritic', () => {
    test.ok(sut.isDiacritic("'"), "' isDiacritic");
    test.ok(sut.isDiacritic(','), ', isDiacritic');
    test.ok(sut.isDiacritic('*'), '* isDiacritic');
    test.ok(sut.isDiacritic('_'), '_ isDiacritic');
    test.ok(!sut.isDiacritic(''), "'' isDiacritic");
    test.ok(!sut.isDiacritic(' '), "' ' isDiacritic");
  });
});
describe('CAL', () => {
  const { removeDotting } = sut;

  describe('removeDotting', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = removeDotting('lmtb(');
      const vocalised = removeDotting("lmet,b'a(");
      const wordExpected = 'lmtb(';
      test.strictEqual(word, wordExpected, 'removeDotting_generic consonant');
      test.strictEqual(
        vocalised,
        wordExpected,
        'removeDotting_generic vocalised'
      );
    });
    it('General case usage, un-mapped symbols', () => {
      const word = removeDotting('<l)dnh>');
      const vocalised = removeDotting('<le)d,neh>');
      const wordExpected = '<l)dnh>';
      test.strictEqual(
        word,
        wordExpected,
        'removeDotting consonant with unmapped'
      );
      test.strictEqual(
        vocalised,
        wordExpected,
        'removeDotting vocalised with unmapped'
      );
    });
    it('Another one-to-one mapping', () => {
      const word = removeDotting(')bhwhy');
      const vocalised = removeDotting(')ab,ohawh_y');
      const wordExpected = ')bhwhy';
      test.strictEqual(word, wordExpected, 'removeDotting_wu consonant');
      test.strictEqual(vocalised, wordExpected, 'removeDotting_wu vocalised');
    });
    it('Word with (i;) => (yi) mapping', () => {
      const word = removeDotting('dylydwth');
      const vocalised = removeDotting("d'yilyid,wut,eh");
      const wordExpected = 'dylydwth';
      test.strictEqual(word, wordExpected, 'removeDotting_yi consonant');
      test.strictEqual(vocalised, wordExpected, 'removeDotting_yi vocalised');
    });
    it('Word with (uO) => (wu) mapping', () => {
      const word = removeDotting('lb(ldbbykwn');
      const vocalised = removeDotting("lab,(eld'b,ob,ayk'wun");
      const wordExpected = 'lb(ldbbykwn';
      test.strictEqual(word, wordExpected, 'removeDotting_wu consonant');
      test.strictEqual(vocalised, wordExpected, 'removeDotting_wu vocalised');
    });
    it('Word with (oO) => (wO) mapping', () => {
      const word = removeDotting('btslwnyq)');
      const vocalised = removeDotting("b't,esalwOniyqi)");
      const wordExpected = 'btslwnyq)';
      test.strictEqual(word, wordExpected, 'removeDotting_wO consonant');
      test.strictEqual(vocalised, wordExpected, 'removeDotting_wO vocalised');
    });
    it('Blank word returns blank', () => {
      const word = removeDotting('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'removeDotting_blank');
    });
    it('Null word returns null', () => {
      const word = removeDotting(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'removeDotting_null');
    });
    it('Undefined word returns undefined', () => {
      const word = removeDotting(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'removeDotting_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = removeDotting(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'removeDotting_zero');
    });
  });
});
describe('removeDotting', () => {
  const { removeDotting } = sut;
  it('Check consonantal and vocalised', () => {
    const word = 'dqsry)-dpylypws';
    const expected = removeDotting('dqsry)-dpylypws');
    const vocalised = removeDotting("d'qesariya)-d,p,yilyip'wOs");
    test.strictEqual(word, expected, 'removeDotting consonant only');
    test.strictEqual(vocalised, expected, 'removeDotting vocalised');
  });
});
describe('isDotted', () => {
  const { isDotted } = sut;
  it('Consonantal and vocalised isDotted', () => {
    const empty = isDotted('');
    const consonant = isDotted('dqsry)-dpylypws');
    const vocalised = isDotted("d'qesariya)-d,p,yilyip'wOs");
    test.strictEqual(empty, false, 'isDotted empty');
    test.strictEqual(consonant, false, 'isDotted consonant only');
    test.strictEqual(vocalised, true, 'isDotted vocalised');
  });
});
describe('Punctuation', () => {
  const { isPunctuation } = sut;
  it('isPunctuation', () => {
    test.strictEqual(isPunctuation(''), false, 'empty');
    test.strictEqual(
      isPunctuation(','),
      false,
      'comma highjacked for diacritics'
    );
    test.strictEqual(isPunctuation('.'), true, 'point - end of sentence');
    test.strictEqual(isPunctuation('?'), true, 'question mark');
    test.strictEqual(isPunctuation('!'), true, 'exclamation mark');
    test.strictEqual(isPunctuation(';'), true, 'semicolon');
  });
});
describe('isBdwlPrefix', () => {
  const { isBdwlPrefix } = sut;
  it('Consonantal and vocalised isBdwlPrefix', () => {
    let word = ')b)';
    let check = isBdwlPrefix(word, 0);
    test.strictEqual(check, false, 'zero index non');
    check = isBdwlPrefix(word, 2);
    test.strictEqual(check, false, 'two index non');
    word = "d'la)b,o)";
    check = isBdwlPrefix(word, 2);
    test.strictEqual(check, true, 'two index set');
  });
});
