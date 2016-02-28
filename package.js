// Meteor package definition.
Package.describe({
  name: 'aramk:quill',
  version: '0.1.0',
  summary: 'Quill Rich Text Editor',
  git: 'https://github.com/aramk/meteor-quill.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use([
    'coffeescript',
    'underscore',
    'templating',
    'jquery',
    'less',
    'trever:quill@0.0.5',
  ], 'client');
  api.use([
    'aldeed:autoform@5.4.1',
  ], 'client', {weak: true});
  api.addFiles([
    'src/quillToolbarAdvanced.html',
    'src/quill.html',
    'src/quill.coffee',
    'src/quill.less'
  ], 'client');
});
