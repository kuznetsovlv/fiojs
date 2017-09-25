import { readFile } from 'fs';
import Promise from 'promise';



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
