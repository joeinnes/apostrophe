module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    color: 'blue'
  },
  init(self, options) {
    console.log('>> ' + self.options.color);
  }
};
