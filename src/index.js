import { parseFile } from './parsers.js';
import buildDiff from './diff.js';

const formatDiff = (diff) => {
  const lines = diff.map((item) => {
    switch (item.type) {
      case 'added':
        return `  + ${item.key}: ${JSON.stringify(item.value)}`;
      case 'removed':
        return `  - ${item.key}: ${JSON.stringify(item.value)}`;
      case 'changed':
        return `  - ${item.key}: ${JSON.stringify(item.oldValue)}\n  + ${item.key}: ${JSON.stringify(item.newValue)}`;
      case 'unchanged':
        return `    ${item.key}: ${JSON.stringify(item.value)}`;
      default:
        throw new Error(`Unknown diff type: ${item.type}`);
    }
  });

  return `{\n${lines.join('\n')}\n}`;
};

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  const diff = buildDiff(data1, data2);
  return formatDiff(diff);
};

export default genDiff;