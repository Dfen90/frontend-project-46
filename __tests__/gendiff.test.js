import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff JSON', () => {
  const expectedOutput = readFile('expected_output.txt');
  const actualOutput = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  expect(actualOutput).toBe(expectedOutput);
});
