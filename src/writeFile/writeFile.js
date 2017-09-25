import { writeFile } from 'fs';
import Promise from 'promise';

export default (path = 1, data, encoding) => new Promise((resolve, reject) => {
  writeFile(path, data, encoding, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
});
