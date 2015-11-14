// Meteor package definition.
Package.describe({
  name: 'aramk:quill',
  version: '0.1.0',
  summary: 'Quill Rich Text Editor',
  git: 'https://github.com/aramk/meteor-quill.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use([
    'coffeescript',
    'underscore',
    'templating',
    'jquery',
    'less',
    'trever:quill@0.0.5'
  ], 'client');
  api.addFiles([
    'src/quillToolbarAdvanced.html',
    'src/quill.html',
    'src/quill.coffee',
    'src/quill.less'
  ], 'client');
});