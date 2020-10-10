module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    color: 'blue'
  },
  handlers(self, options) {
    return {
      // Log the color option very late so we're sure
      // any damage has already been done
      'apostrophe:afterInit': {
        logColor() {
          console.log('>> ' + self.options.color);
        }
      }
    };
  }
};
