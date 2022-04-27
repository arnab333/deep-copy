# @arnab333/deep-copy [![NPM version](https://img.shields.io/npm/v/@arnab333/deep-copy.svg?style=flat)](https://www.npmjs.com/package/@arnab333/deep-copy)

> Recursively (deep) copy JavaScript native types, like Object, Array, RegExp, Date as well as primitives.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install @arnab333/deep-copy
```

## Usage

```js
const deepCopy = require('@arnab333/deep-copy');
// OR
const { deepCopy } = require('@arnab333/deep-copy');
// OR
import { deepCopy } from '@arnab333/deep-copy';
// OR
import deepCopy from '@arnab333/deep-copy';

let obj = { a: 'b' };
let arr = [obj];
let copy = deepCopy(arr);
obj.c = 'd';

console.log(copy);
//=> [{ a: 'b' }]

console.log(arr);
//=> [{ a: 'b', c: 'd' }]
```
