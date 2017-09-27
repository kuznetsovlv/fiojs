import { lstat, realpath } from 'fs';
import { sep, parse, normalize, relative } from 'path';
import Promise from 'promise';

/**
 * Returns file's type
 * @param {Stats} stats - describing file stats.
 * @return {string} - file type
 */
const getFileType = (stats) => {
  if (stats.isDirectory()) {
    return 'directory';
  }

  if (stats.isBlockDevice()) {
    return 'block device';
  }

  if (stats.isCharacterDevice()) {
    return 'character device';
  }

  if (stats.isSymbolicLink()) {
    return 'symbol link';
  }

  if (stats.isFIFO()) {
    return 'fifo';
  }

  if (stats.isSocket()) {
    return 'socket';
  }

  if (stats.isFile()) {
    return 'regular file';
  }

  return null;
};

/**
 * Creates promise to combine info about file
 * @param {string} - path to file.
 * @return {Object} - cumulative info about file.
 */
export default path => new Promise ((resolve, reject) => {
  const parsed = parse(path);
  const { ext } = parsed;
  const mime = ext.replace('.', '');
  const normalized = normalize(path);
  const normalizedArr = normalized.split(sep);

  lstat(normalized, (err, stats) => {
    if (err) {
      const { code } = err;

      if (code === 'ENOENT') {
        resolve({
          ...parsed,
          exists: false,
          path,
          normalized,
          normalizedArr,
          mime
        });
      } else {
        reject(err);
      }
    } else {
      const fileType = getFileType(stats) || '';
      const exists = !!fileType;

      resolve({
        ...parsed,
        ...stats,
        path,
        normalized,
        normalizedArr,
        exists,
        fileType,
        mime
      });
    }
  });
})
  .then(data => new Promise((resolve, reject) => {
    realpath(path, (err, absolute) => {
      if (err) {
        const { code } = err;

        if (code === 'ENOENT') {
          resolve({ ...data, exists: false });
        } else {
          reject(err);
        }
      } else {
        const absoluteArr = absolute.split(sep);
        const relativePath = relative(process.cwd(), absolute);

        resolve({
          ...data,
          relative: relativePath,
          absolute,
          absoluteArr
        });
      }
    });
  }));
