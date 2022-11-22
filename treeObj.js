var _ = require('lodash');

const tree = {
    roots: {
      trunk: {
        branch: 'a leaf',
        hollow: 'a squirrel',
      },
    },
    country: {
      city: 'a citizen',
    }
  };

const findPath = (tree) => {
    const iter = (obj, path) => {
      const keys = _.keys(obj);
      console.log(keys)
      return keys.flatMap((key) => {
        if (_.isObject(obj[key])) {
          const updatedPath = `${path} —> ${key}`;
          console.log(obj[key])
          return iter(obj[key], updatedPath);
        }
        
        const finalPath = `${path.slice(4)} —> ${key}`
        return `Follow the path [ ${finalPath} ] to find ${obj[key]}`;
      });
    };
    return iter(tree, '').join('\n');
};

console.log(findPath(tree))