import { parseFile } from './parsers.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  // Здесь будет логика сравнения объектов
  // На данный момент просто возвращаем строковое представление объектов
  return `File 1:\n${JSON.stringify(data1, null, 2)}\n\nFile 2:\n${JSON.stringify(data2, null, 2)}`;
};

export default genDiff;