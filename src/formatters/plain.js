const formatValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (diff) => {
  const iter = (node, path = '') => node.flatMap((item) => {
    const newPath = path ? `${path}.${item.key}` : item.key;

    switch (item.type) {
      case 'nested':
        return iter(item.children, newPath);
      case 'added':
        return `Property '${newPath}' was added with value: ${formatValue(item.value)}`;
      case 'removed':
        return `Property '${newPath}' was removed`;
      case 'changed':
        return `Property '${newPath}' was updated. From ${formatValue(item.oldValue)} to ${formatValue(item.newValue)}`;
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown type: ${item.type}`);
    }
  }).join('\n');

  return iter(diff);
};

export default plain;
