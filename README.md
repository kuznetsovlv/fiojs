# fio
File input-output api

## [Content](#user-content-content "Conten")
- [GitHub.](#user-content-github "Link to GitHub repository")
- [Install.](#user-content-install "Install")
- [Usage.](#user-content-usege "Usage")
  - [readFile](#user-content-readFile "readFile")
  - [writeFile](#user-content-writeFile "writeFile")
  - [getFileInfo](#user-content-getFileInfo "getFileInfo")
  - [Example](#user-content-example "Example")
- [License](#user-content-license "License")

## GitHub.
[Progect on GitHub.](https://github.com/kuznetsovlv/fcronjs "Link to GitHub repository")

## Install.
```bash
npm install fiojs --save
```

## Usage.
Import `fio` form package:
```javascript
  import { readFile, writeFile } from 'fio';
```

and use:

### readFile
Import form package:
```javascript
  import { readFile } from 'fio';
```

Method `readFile` creates a Promise to read file. It has parameters:
  * {string|number} [path = 0] - path to file or file's descriptor to be read.
  * {string} [encoding] - file's encoding, if encoding is not presented the reading result is a buffer of bytes.
The `fulfilled` gets argument whit file's content.

### writeFile
Import form package:
```javascript
  import { writeFile } from 'fio';
```

Mehod `writeFile` creates a Promise to write in a file. If file exists it will be rewrited. Method has parameters:
 * {string|number} [path=0] - path to file or file's descriptor to be written.
 * {string|Buffer} data - writing data.
 * {string} [encoding] - file's encoding, if encoding is not presented the writing result is a buffer of bytes.
 The `fulfilled` has no arguments.

### getFileInfo
Import form package:
```javascript
  import { getFileInfo } from 'fio';
```

Method `getFileInfo` creates promise to combine info about file.
 * {string} - path to file.
The `fulfilled` gets argument whit cumulative info about file.

## Examlpe:
```javascript
  import { getFileInfo, readFile, writeFile } from 'fio';

  const ENCODING = 'utf8';

  const path = 'package.json';
  const copy = 'package.json.copy';

  getFileInfo(path)
  .then((data) => {
    console.log(`Got info about ${path}:`);
    console.log(data);
    return readFile(path, ENCODING)
  })
  .then(data => writeFile(copy, data, ENCODING))
  .then(data => readFile(copy, ENCODING))
  .then(data => console.log(data), error => console.log(error));
```

The result is:
_Got info about package.json:_
```javascript
{ root: '',
  dir: '',
  base: 'package.json',
  ext: '.json',
  name: 'package',
  dev: 2081,
  mode: 33188,
  nlink: 1,
  uid: 1000,
  gid: 1000,
  rdev: 0,
  blksize: 4096,
  ino: 37620585,
  size: 1292,
  blocks: 8,
  atimeMs: 1506462399114.9612,
  mtimeMs: 1506462399102.9612,
  ctimeMs: 1506462399102.9612,
  birthtimeMs: 1506462399102.9612,
  atime: 2017-09-26T21:46:39.115Z,
  mtime: 2017-09-26T21:46:39.103Z,
  ctime: 2017-09-26T21:46:39.103Z,
  birthtime: 2017-09-26T21:46:39.103Z,
  path: 'package.json',
  normalized: 'package.json',
  normalizedArr: [ 'package.json' ],
  exists: true,
  fileType: 'regular file',
  mime: 'json',
  relative: 'package.json',
  absolute: '/home/leonid/Documents/projects/fiojs/package.json',
  absoluteArr: 
   [ '',
     'home',
     'leonid',
     'Documents',
     'projects',
     'fiojs',
     'package.json' ] }
{
  "name": "fiojs",
  "version": "1.0.1",
  "description": "File input-output api",
  "main": "dist/index.js",
  "scripts": {
    "clear": "rm -rf dist",
    "dist-clear": "npm run clear && rm -f test/index*",
    "product": "NODE_ENV=product webpack",
    "dev": "NODE_ENV=development webpack",
    "build": "npm run clear && npm run product",
    "start": "npm run dev",
    "test": "babel-node ./test/test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/kuznetsovlv/fiojs.git"
  },
  "keywords": [
    "file",
    "input",
    "output"
  ],
  "author": "Kuznetsov Leonid (kuznetsovlv1981@gmail.com)",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/kuznetsovlv/fiojs/issues"
  },
  "homepage": "https://github.com/kuznetsovlv/fiojs#readme",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-eslint": "^7.2.3",
    "babel-loader": "6.2.0",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-decorators-legacy": "^1.3.4",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-1": "^6.24.1",
    "eslint": "^4.6.1",
    "eslint-loader": "^1.9.0",
    "webpack": "^1.14.0"
  },
  "dependencies": {
    "promise": "^8.0.1"
  }
}
```

Copy _/etc/fstab_ into _/etc/fstab.copy_ and output content of _/e.tc/fstab.copy_

## License
[MIT](./LICENSE "MIT") Copyright (c) 2017 Kuznetsov Leonid.
