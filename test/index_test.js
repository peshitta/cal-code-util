import * as test from 'assert';
import * as sut from '../build/cal-code-util';

describe('CAL', () => {
  describe('Util', () => {
    it('Is CAL Consonant', () => {
      test.ok(sut.isConsonant('b'), 'cal.isConsonant');
      test.ok(sut.isConsonant('$'), 'cal.isConsonant');
      test.ok(sut.isConsonant(')'), 'cal.isConsonant');
      test.ok(sut.isConsonant('('), 'cal.isConsonant');
      test.ok(sut.isConsonant('g'), 'cal.isConsonant');
      test.ok(!sut.isConsonant('B'), 'cal.isConsonant');
      test.ok(!sut.isConsonant('G'), 'cal.isConsonant');
      test.ok(!sut.isConsonant('u'), 'cal.isConsonant');
    });
    it('Is CAL vowel', () => {
      test.ok(sut.isVowel('a'), 'cal.isVowel');
      test.ok(sut.isVowel('o'), 'cal.isVowel');
      test.ok(sut.isVowel('e'), 'cal.isVowel');
      test.ok(sut.isVowel('i'), 'cal.isVowel');
      test.ok(sut.isVowel('u'), 'cal.isVowel');
      test.ok(sut.isVowel('E'), 'cal.isVowel');
      test.ok(sut.isVowel('O'), 'cal.isVowel');
      test.ok(!sut.isVowel('A'), 'cal.isVowel');
      test.ok(!sut.isVowel('I'), 'cal.isVowel');
      test.ok(!sut.isVowel('U'), 'cal.isVowel');
      test.ok(!sut.isVowel(''), 'cal.isVowel');
    });
  });
});

describe('Diacretics', () => {
  it('isDiacretic', () => {
    test.ok(sut.isDiacretic("'"), 'isDiacretic');
    test.ok(sut.isDiacretic(','), 'isDiacretic');
    test.ok(sut.isDiacretic('*'), 'isDiacretic');
    test.ok(sut.isDiacretic('_'), 'isDiacretic');
    test.ok(!sut.isDiacretic(''), 'isDiacretic');
    test.ok(!sut.isDiacretic(' '), 'isDiacretic');
  });
});
