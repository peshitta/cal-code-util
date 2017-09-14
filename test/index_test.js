import * as test from 'assert';
import * as sut from '../build/cal-code-util';

describe('CAL', () => {
  describe('Util', () => {
    it('Is CAL Consonant', () => {
      test.ok(sut.isConsonant('b'), 'b  isConsonant');
      test.ok(sut.isConsonant('$'), '$ isConsonant');
      test.ok(sut.isConsonant(')'), ') isConsonant');
      test.ok(sut.isConsonant('('), '( isConsonant');
      test.ok(sut.isConsonant('g'), 'g isConsonant');
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
