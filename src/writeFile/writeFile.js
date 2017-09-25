import { writeFile } from 'fs';
import Promise from 'promise';

/**
 * Creates a Promise to write in a file. If file exists it will be rewrited.
 * @params {string|number} [path=0] - path to file or file's descriptor to be written.
 * @params {string|Buffer} data - writing data.
 * @param {string} [encoding] - file's encoding, if encoding is not presented the
 *                              writing result is a buffer of bytes.
 * @return {Promise}
 */
export default (path = 1, data, encoding) => new Promise((resolve, reject) => {
  writeFile(path, data, encoding, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
});
