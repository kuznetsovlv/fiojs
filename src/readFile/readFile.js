import { readFile } from 'fs';
import Promise from 'promise';

/**
 * Creates a Promise to read file.
 * @params {string|number} [path = 0] - path to file or file's descriptor to be read.
 * @param {string} [encoding] - file's encoding, if encoding is not presented the
 *                              reading result is a buffer of bytes.
 * @return {Promise} - reading file promise which fulfilled gets argument with file's data
 */
export default (path = 0, encoding) => new Promise((resolve, reject) => {
  const callback = (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  };

  if (typeof encoding === 'string') {
    readFile(path, encoding, callback);
  } else {
    readFile(path, callback);
  }
});
