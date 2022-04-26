# @arnab333/deepcopy [![NPM version](https://img.shields.io/npm/v/@arnab333/deepcopy.svg?style=flat)](https://www.npmjs.com/package/@arnab333/deepcopy)

> Recursively (deep) copy JavaScript native types, like Object, Array, RegExp, Date as well as primitives.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install @arnab333/deepcopy
```

## Usage

```js
const deepCopy = require('@arnab333/deepcopy');
const { deepCopy } = require('@arnab333/deepcopy');
import { deepCopy } from '@arnab333/deepcopy';
import deepCopy from '@arnab333/deepcopy';

let obj = { a: 'b' };
let arr = [obj];
let copy = deepCopy(arr);
obj.c = 'd';

console.log(copy);
//=> [{ a: 'b' }]

console.log(arr);
//=> [{ a: 'b', c: 'd' }]
```
