module.exports = {
  extend: '@apostrophecms/widget-type',
  options: { label: 'Image' },
  fields: {
    add: {
      _image: {
        type: 'relationship',
        label: 'Image',
        help: 'Choose an image from the media library',
        withType: '@apostrophecms/image'
      }
    }
  }
};
