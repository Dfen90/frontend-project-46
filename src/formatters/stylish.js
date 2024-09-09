import _ from 'lodash';

const indent = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount - 2);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value);
  }

  const lines = Object
    .entries(value)
    .map(([key, val]) => `${indent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`);

  return [
    '{',
    ...lines,
    `${indent(depth)}  }`,
  ].join('\n');
};

const stylish = (diff) => {
  const iter = (tree, depth) => tree.map((node) => {
    const { key, type } = node;

    switch (type) {
      case 'added':
        return `${indent(depth)}+ ${key}: ${stringify(node.value, depth)}`;
      case 'removed':
        return `${indent(depth)}- ${key}: ${stringify(node.value, depth)}`;
      case 'unchanged':
        return `${indent(depth)}  ${key}: ${stringify(node.value, depth)}`;
      case 'changed':
        return [
          `${indent(depth)}- ${key}: ${stringify(node.oldValue, depth)}`,
          `${indent(depth)}+ ${key}: ${stringify(node.newValue, depth)}`,
        ].join('\n');
      case 'nested':
        return `${indent(depth)}  ${key}: ${[
          '{',
          ...iter(node.children, depth + 1),
          `${indent(depth)}  }`,
        ].join('\n')}`;
      default:
        throw new Error(`Unknown node type: ${type}`);
    }
  });

  return [
    '{',
    ...iter(diff, 1),
    '}',
  ].join('\n');
};

export default stylish;
