import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (diff, format) => {
  switch (format) {
    case 'plain':
      return plain(diff);
    case 'stylish':
      return stylish(diff);
    case 'json':
      return json(diff);
    default:
      throw new Error('Invalid format!');
  }
};
