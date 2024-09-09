import fs from 'fs';
import path from 'path';

const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(fullPath, 'utf-8');
};

export const parseFile = (filepath) => {
  const content = readFile(filepath);
  return JSON.parse(content);
};
