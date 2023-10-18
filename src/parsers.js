import yaml from 'js-yaml';

const parsers = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      return new Error(`Invalid data format: ${format}`);
  }
};

export default parsers;
