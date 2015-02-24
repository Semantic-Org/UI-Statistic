
Package.describe({
  name    : 'semantic:ui-statistic',
  summary : 'Semantic UI - Statistic: Single component release',
  version : '1.10.0',
  git     : 'git://github.com/Semantic-Org/UI-Statistic.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'statistic.css'
  ], 'client');
});
