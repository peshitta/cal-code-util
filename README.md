# cal-code-util

[![npm version](https://badge.fury.io/js/cal-code-util.svg)](https://badge.fury.io/js/cal-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/cal-code-util.svg)](https://www.npmjs.org/package/cal-code-util)
[![Build Status](https://travis-ci.org/peshitta/cal-code-util.svg?branch=master)](https://travis-ci.org/peshitta/cal-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/cal-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/cal-code-util.svg)](https://david-dm.org/peshitta/cal-code-util)
[![devDependencies Status](https://david-dm.org/peshitta/cal-code-util/dev-status.svg)](https://david-dm.org/peshitta/cal-code-util?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/cal-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/cal-code-util?branch=master)

Utility library for CAL code Aramaic transliteration

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install cal-code-util --save
```

Following bundles are available:
* `cal-code-util.js` - UMD ES5 version for use in browser, node, etc.
* `cal-code-util.min.js` - minified version of `cal-code-util.js`
* `cal-code-util.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/cal-code-util/-/cal-code-util-1.0.4.tgz](https://registry.npmjs.org/cal-code-util/-/cal-code-util-1.0.4.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/cal-code-util/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/cal-code-util/issues).
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [cal](#module_cal)
    * [.consonants](#module_cal.consonants) : <code>Array.&lt;string&gt;</code>
    * [.extraConsonants](#module_cal.extraConsonants) : <code>Array.&lt;string&gt;</code>
    * [.allConsonants](#module_cal.allConsonants)
    * [.commonVowels](#module_cal.commonVowels) : <code>Array.&lt;string&gt;</code>
    * [.easternVowels](#module_cal.easternVowels) : <code>Array.&lt;string&gt;</code>
    * [.vowels](#module_cal.vowels) : <code>Array.&lt;string&gt;</code>
    * [.diacritics](#module_cal.diacritics) : <code>Array.&lt;string&gt;</code>
    * [.isConsonant](#module_cal.isConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_cal.isVowel) ⇒ <code>boolean</code>
    * [.isDiacritic](#module_cal.isDiacritic) ⇒ <code>boolean</code>

<a name="module_cal.consonants"></a>

### cal.consonants : <code>Array.&lt;string&gt;</code>
CAL consonants

**Kind**: static constant of [<code>cal</code>](#module_cal)  
<a name="module_cal.extraConsonants"></a>

### cal.extraConsonants : <code>Array.&lt;string&gt;</code>
Extra CAL consonants specific to Palestinian or Hebrew

**Kind**: static constant of [<code>cal</code>](#module_cal)  
<a name="module_cal.allConsonants"></a>

### cal.allConsonants
Base consonants + extra consonants

**Kind**: static constant of [<code>cal</code>](#module_cal)  
<a name="module_cal.commonVowels"></a>

### cal.commonVowels : <code>Array.&lt;string&gt;</code>
CAL common vowels

**Kind**: static constant of [<code>cal</code>](#module_cal)  
<a name="module_cal.easternVowels"></a>

### cal.easternVowels : <code>Array.&lt;string&gt;</code>
CAL eastern/hebrew only vowels

**Kind**: static constant of [<code>cal</code>](#module_cal)  
<a name="module_cal.vowels"></a>

### cal.vowels : <code>Array.&lt;string&gt;</code>
CAL vowels including Eastern/Hebrew ones

**Kind**: static constant of [<code>cal</code>](#module_cal)  
<a name="module_cal.diacritics"></a>

### cal.diacritics : <code>Array.&lt;string&gt;</code>
Sedra/CAL diacritic characters:
1. __'__ dot above, Qushaya
2. __,__ dot below, Rukkakha
3. **_** line under
4. __*__ Seyame

**Kind**: static constant of [<code>cal</code>](#module_cal)  
<a name="module_cal.isConsonant"></a>

### cal.isConsonant ⇒ <code>boolean</code>
Is character c a CAL consonant

**Kind**: static constant of [<code>cal</code>](#module_cal)  
**Returns**: <code>boolean</code> - true if c is CAL consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_cal.isVowel"></a>

### cal.isVowel ⇒ <code>boolean</code>
Is character c a CAL vowel

**Kind**: static constant of [<code>cal</code>](#module_cal)  
**Returns**: <code>boolean</code> - true if c is CAL vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_cal.isDiacritic"></a>

### cal.isDiacritic ⇒ <code>boolean</code>
Is character c a diacritic? Same characters used for both Sedra 3 and CAL.

**Kind**: static constant of [<code>cal</code>](#module_cal)  
**Returns**: <code>boolean</code> - true if c is a diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

