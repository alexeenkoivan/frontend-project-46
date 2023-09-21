import yaml from 'js-yaml';

const parsers = (data, formatatData) => {
  switch (formatatData) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
    case '.yaml':
      return yaml.load(data);
    default:
      return new Error('Invalid data format');
  }
};

export default parsers;
