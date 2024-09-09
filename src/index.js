import { parseFile } from './parsers.js';
import buildDiff from './diff.js';
import stylish from './formatters/stylish.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  console.log('Data 1:', JSON.stringify(data1, null, 2));
  console.log('Data 2:', JSON.stringify(data2, null, 2));

  const diff = buildDiff(data1, data2);
  
  console.log('Diff:', JSON.stringify(diff, null, 2));

  switch (formatName) {
    case 'stylish':
      return stylish(diff);
    default:
      throw new Error(`Unknown format: ${formatName}`);
  }
};

export default genDiff;
