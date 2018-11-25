# liquid-filters [![NPM version](https://img.shields.io/npm/v/liquid-filters.svg?style=flat)](https://www.npmjs.com/package/liquid-filters) [![NPM monthly downloads](https://img.shields.io/npm/dm/liquid-filters.svg?style=flat)](https://npmjs.org/package/liquid-filters) [![NPM total downloads](https://img.shields.io/npm/dt/liquid-filters.svg?style=flat)](https://npmjs.org/package/liquid-filters) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/liquid-filters.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/liquid-filters)

> Liquid filters, for any javascript template engine (including handlebars and lodash).

Please consider following this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save liquid-filters
```

## Heads up!

This library is a work-in-progress and should not be used in production yet!

## Usage

```js
// the main export is a function that must be called
const filters = require('liquid-filters');

console.log(filters());
console.log(filters('math'));
console.log(filters(['math', 'string']));
```

## Attribution

Some of these filters were lifted from TinyLiquid by [Zongmin Lei](leizongmin@gmail.com).

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

<details>
<summary><strong>Building docs</strong></summary>

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

</details>

### Author

**Jon Schlinkert**

* [GitHub Profile](https://github.com/jonschlinkert)
* [Twitter Profile](https://twitter.com/jonschlinkert)
* [LinkedIn Profile](https://linkedin.com/in/jonschlinkert)

### License

Copyright © 2018, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.8.0, on November 25, 2018._