# fio
File input-output api

## [Content](#user-content-content "Conten")
- [GitHub.](#user-content-github "Link to GitHub repository")
- [Install.](#user-content-install "Install")
- [Usage.](#user-content-usege "Usage")
  - [readFile](#user-content-readFile "readFile")
  - [writeFile](#user-content-writeFile "writeFile")
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
Import `fio` form package:
```javascript
  import { readFile } from 'fio';
```

Method readFile creates a Promise to read file. It has parameters:
  * {string|number} [path = 0] - path to file or file's descriptor to be read.
  * {string} [encoding] - file's encoding, if encoding is not presented the reading result is a buffer of bytes.

### writeFile
Import `fio` form package:
```javascript
  import { writeFile } from 'fio';

Mehod writeFile creates a Promise to write in a file. If file exists it will be rewrited. Method has parameters:
 * {string|number} [path=0] - path to file or file's descriptor to be written.
 * {string|Buffer} data - writing data.
 * {string} [encoding] - file's encoding, if encoding is not presented the writing result is a buffer of bytes.

## Examlpe:
```javascript
  import { readFile } from 'fio';

  const ENCODING = 'utf8';

  const path = '/etc/fstab';
  const copy = '/etc/fstab.copy';

  readFile(path, ENCODING)
    .then(data => writeFile(copy, data, ENCODING))
    .then(data => readFile(copy, ENCODING))
    .then((data) => {
      console.log(data)
    })
    .catch(error => console.log(error));
```

Copy _/etc/fstab_ into _/etc/fstab.copy_ and output content of _/e.tc/fstab.copy_

## License
[MIT](./LICENSE "MIT") Copyright (c) 2017 Kuznetsov Leonid.
