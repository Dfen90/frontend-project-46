import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(fullPath, 'utf-8');
};

const parseJSON = (content) => JSON.parse(content);
const parseYAML = (content) => yaml.load(content);

export const parseFile = (filepath) => {
  const content = readFile(filepath);
  const extension = path.extname(filepath).toLowerCase();

  switch (extension) {
    case '.json':
      return parseJSON(content);
    case '.yml':
    case '.yaml':
      return parseYAML(content);
    default:
      throw new Error(`Unsupported file extension: ${extension}`);
  }
};
