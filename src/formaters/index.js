import stylish from './stylish.js';
import plain from './plain.js';

export default (diff, format) => {
  switch (format) {
    case 'plain':
      return plain(diff);
    case 'stylish':
      return stylish(diff, 1);
    default:
      throw new Error('Invalid format!');
  }
};
