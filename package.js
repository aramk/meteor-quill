// Meteor package definition.
Package.describe({
  name: 'aramk:quill',
  version: '3.0.0',
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
    'urbanetic:utility@3.0.0',
    'underscore',
    'ecmascript',
    'templating@1.3.2',
    'jquery',
    'less@4.0.0'
  ], 'client');
  api.use([
    'aldeed:autoform@7.0.0'
  ], 'client', {weak: true});
  api.addFiles([
    'src/quill.html',
    'src/quill.coffee',
    'src/quill.less'
  ], 'client');
});
