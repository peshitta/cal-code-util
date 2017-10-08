# cal-code-util

[![npm version](https://badge.fury.io/js/cal-code-util.svg)](https://badge.fury.io/js/cal-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/cal-code-util.svg)](https://www.npmjs.org/package/cal-code-util)
[![Build Status](https://travis-ci.org/peshitta/cal-code-util.svg?branch=master)](https://travis-ci.org/peshitta/cal-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/cal-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/cal-code-util.svg)](https://david-dm.org/peshitta/cal-code-util)
[![devDependencies Status](https://david-dm.org/peshitta/cal-code-util/dev-status.svg)](https://david-dm.org/peshitta/cal-code-util?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/cal-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/cal-code-util?branch=master)

Aramaic CAL code transliteration utilities

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
[https://registry.npmjs.org/cal-code-util/-/cal-code-util-1.0.7.tgz](https://registry.npmjs.org/cal-code-util/-/cal-code-util-1.0.7.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/cal-code-util/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
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

* [calCodeUtil](#module_calCodeUtil)
    * [.consonants](#module_calCodeUtil.consonants) : <code>Array.&lt;string&gt;</code>
    * [.extraConsonants](#module_calCodeUtil.extraConsonants) : <code>Array.&lt;string&gt;</code>
    * [.allConsonants](#module_calCodeUtil.allConsonants) : <code>Array.&lt;string&gt;</code>
    * [.commonVowels](#module_calCodeUtil.commonVowels) : <code>Array.&lt;string&gt;</code>
    * [.easternVowels](#module_calCodeUtil.easternVowels) : <code>Array.&lt;string&gt;</code>
    * [.vowels](#module_calCodeUtil.vowels) : <code>Array.&lt;string&gt;</code>
    * [.diacritics](#module_calCodeUtil.diacritics) : <code>Array.&lt;string&gt;</code>
    * [.dotting](#module_calCodeUtil.dotting) : <code>Array.&lt;string&gt;</code>
    * [.isConsonant](#module_calCodeUtil.isConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_calCodeUtil.isVowel) ⇒ <code>boolean</code>
    * [.isDiacritic](#module_calCodeUtil.isDiacritic) ⇒ <code>boolean</code>
    * [.isDotting](#module_calCodeUtil.isDotting) ⇒ <code>boolean</code>
    * [.removeDotting](#module_calCodeUtil.removeDotting) ⇒ <code>string</code>

<a name="module_calCodeUtil.consonants"></a>

### calCodeUtil.consonants : <code>Array.&lt;string&gt;</code>
CAL consonants

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
<a name="module_calCodeUtil.extraConsonants"></a>

### calCodeUtil.extraConsonants : <code>Array.&lt;string&gt;</code>
Extra CAL consonants specific to Palestinian or Hebrew

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
<a name="module_calCodeUtil.allConsonants"></a>

### calCodeUtil.allConsonants : <code>Array.&lt;string&gt;</code>
Base consonants + extra consonants

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
<a name="module_calCodeUtil.commonVowels"></a>

### calCodeUtil.commonVowels : <code>Array.&lt;string&gt;</code>
CAL common vowels

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
<a name="module_calCodeUtil.easternVowels"></a>

### calCodeUtil.easternVowels : <code>Array.&lt;string&gt;</code>
CAL eastern/hebrew only vowels

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
<a name="module_calCodeUtil.vowels"></a>

### calCodeUtil.vowels : <code>Array.&lt;string&gt;</code>
CAL vowels including Eastern/Hebrew ones

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
<a name="module_calCodeUtil.diacritics"></a>

### calCodeUtil.diacritics : <code>Array.&lt;string&gt;</code>
Sedra/CAL diacritic characters:
1. __'__ dot above, Qushaya
2. __,__ dot below, Rukkakha
3. **_** line under
4. __*__ Seyame

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
<a name="module_calCodeUtil.dotting"></a>

### calCodeUtil.dotting : <code>Array.&lt;string&gt;</code>
Vowels and diacritics: used for consonantal only mapping

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
<a name="module_calCodeUtil.isConsonant"></a>

### calCodeUtil.isConsonant ⇒ <code>boolean</code>
Is character c a CAL consonant

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
**Returns**: <code>boolean</code> - true if c is CAL consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_calCodeUtil.isVowel"></a>

### calCodeUtil.isVowel ⇒ <code>boolean</code>
Is character c a CAL vowel

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
**Returns**: <code>boolean</code> - true if c is CAL vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_calCodeUtil.isDiacritic"></a>

### calCodeUtil.isDiacritic ⇒ <code>boolean</code>
Is character c a diacritic? Same characters used for both Sedra 3 and CAL.

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
**Returns**: <code>boolean</code> - true if c is a diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_calCodeUtil.isDotting"></a>

### calCodeUtil.isDotting ⇒ <code>boolean</code>
Returns true if c is dotting character

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
**Returns**: <code>boolean</code> - true if c is dotting  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_calCodeUtil.removeDotting"></a>

### calCodeUtil.removeDotting ⇒ <code>string</code>
Remove dotting (vowels and diacritics), leaving consonantal word only.

**Kind**: static constant of [<code>calCodeUtil</code>](#module_calCodeUtil)  
**Returns**: <code>string</code> - consonantal word  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word to be processed |

