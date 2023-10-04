const formatValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};
const renderPlain = (diff, path = '') => {
  const lines = diff
    .filter((item) => item.type !== 'unchanged')
    .map((item) => {
      const fullPath = path ? `${path}.${item.key}` : item.key;
      switch (item.type) {
        case 'nested':
          return renderPlain(item.children, fullPath);
        case 'deleted':
          return `Property '${fullPath}' was removed`;
        case 'added':
          return `Property '${fullPath}' was added with value: ${formatValue(item.value)}`;
        case 'changed':
          return `Property '${fullPath}' was updated. From ${formatValue(item.value1)} to ${formatValue(item.value2)}`;
        default:
          throw new Error(`Invalid type: ${item.type}`);
      }
    });

  return lines.join('\n');
};
const plain = (diff) => renderPlain(diff);

export default plain;
