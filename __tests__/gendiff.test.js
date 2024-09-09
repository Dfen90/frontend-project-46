import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

describe('gendiff', () => {
  const expectedStylish = readFile('expected_stylish.txt');
  const expectedPlain = readFile('expected_plain.txt');

  test('JSON files (stylish)', () => {
    const actualOutput = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
    expect(actualOutput).toBe(expectedStylish);
  });

  test('YAML files (stylish)', () => {
    const actualOutput = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
    expect(actualOutput).toBe(expectedStylish);
  });

  test('JSON files (plain)', () => {
    const actualOutput = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain');
    expect(actualOutput).toBe(expectedPlain);
  });

  test('YAML files (plain)', () => {
    const actualOutput = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain');
    expect(actualOutput).toBe(expectedPlain);
  });
});
