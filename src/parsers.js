import fs from 'fs';
import path from 'path';

const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  return content;
};

const parseJSON = (content) => JSON.parse(content);

export const parseFile = (filepath) => {
  const content = readFile(filepath);
  const extension = path.extname(filepath);

  switch (extension) {
    case '.json':
      return parseJSON(content);
    default:
      throw new Error(`Unsupported file extension: ${extension}`);
  }
};
