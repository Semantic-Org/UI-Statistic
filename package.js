
Package.describe({
  name    : 'semantic:ui-statistic',
  summary : 'Semantic UI - Statistic: Single component release',
  version : '2.2.7',
  git     : 'git://github.com/Semantic-Org/UI-Statistic.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'statistic.css'
  ], 'client');
});
