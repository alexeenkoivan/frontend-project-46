import yaml from 'js-yaml';

const getFormat = (format) => {
  const parts = format.split('.');
  return parts[parts.length - 1].toLowerCase();
};

const parsers = (data, format) => {
  const fileExtension = getFormat(format);
  switch (fileExtension) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      return new Error(`Invalid data format: ${fileExtension}`);
  }
};

export default parsers;
