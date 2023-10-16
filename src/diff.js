import _ from 'lodash';

const diff = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, type: 'nested', children: diff(data1[key], data2[key]) };
    }

    if (!Object.prototype.hasOwnProperty.call(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }

    if (!Object.prototype.hasOwnProperty.call(data2, key)) {
      return { key, type: 'deleted', value: data1[key] };
    }

    if (data1[key] !== data2[key]) {
      return {
        key, type: 'changed', value1: data1[key], value2: data2[key],
      };
    }

    return { key, type: 'unchanged', value: data2[key] };
  });

  return result;
};

export default diff;
