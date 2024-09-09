import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('gendiff', () => {
  test('JSON files', () => {
    const expectedOutput = readFile('expected_output.txt');
    const actualOutput = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
    expect(actualOutput).toBe(expectedOutput);
  });

  test('YAML files', () => {
    const expectedOutput = readFile('expected_output.txt');
    const actualOutput = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
    expect(actualOutput).toBe(expectedOutput);
  });
});
