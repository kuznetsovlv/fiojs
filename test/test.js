import { join } from 'path';
import { readFile, writeFile, getFileInfo } from './index';

const args = process.argv;
console.log(args);
const [interpretator, scriptName, input = join(__dirname, 'index.js'), output] = args;

const ENCODING = 'utf8';

console.log('Tes File Input - Output package started.');

console.log(`Reading from ${input}.`);

if (!output) {
  readFile(input, ENCODING).then((data) => {
    console.log(`Use encoding "${ENCODING}":`);
    console.log(data);
  }, error => console.log(error));

  readFile(input).then((data) => {
    console.log('Without encoding:');
    console.log(data);
  }, error => console.log(error));
} else {
  console.log(`Writing into ${output}`);

  readFile(input, ENCODING)
    .then(data => writeFile(output, data, ENCODING))
    .then(data => readFile(output, ENCODING))
    .then((data) => {
      console.log(`Use encoding "${ENCODING}":`);
      console.log(data)
    })
    .catch(error => console.log(error));

  readFile(input)
    .then(data => writeFile(output, data))
    .then(data => readFile(output))
    .then((data) => {
      console.log('Without encoding:');
      console.log(data)
    })
    .catch(error => console.log(error));
}


getFileInfo(input).then((data) => {
  console.log(`Got info about ${input}:`);
  console.log(data);
}, error => {
  console.log(`Error of getting info about ${input}:`);
  console.log(typeof error);
});