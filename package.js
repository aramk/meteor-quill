// Meteor package definition.
Package.describe({
  name: 'aramk:quill',
  version: '2.0.0',
  summary: 'Quill Rich Text Editor',
  git: 'https://github.com/aramk/meteor-quill.git'
});

Npm.depends({
  quill: '1.3.6',
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.6.1');
  api.use([
    'coffeescript@2.2.1_1',
    'urbanetic:utility@2.0.1',
    'underscore',
    'ecmascript',
    'templating@1.3.2',
    'jquery',
    'less'
  ], 'client');
  api.use([
    'aldeed:autoform@5.4.1'
  ], 'client', {weak: true});
  api.addFiles([
    'src/quillToolbarAdvanced.html',
    'src/quill.html',
    'src/quill.coffee',
    'src/quill.less'
  ], 'client');
});
