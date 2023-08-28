module.exports = {
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'], // Если вы используете dotenv
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'mjs', 'jsx', 'json', 'node'],
};
