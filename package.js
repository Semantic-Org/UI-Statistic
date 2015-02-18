var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-statistic',
  summary : 'Semantic UI - Statistic (official): Single component release of statistic',
  version : '1.9.9',
  git     : 'git://github.com/Semantic-Org/UI-Statistic.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
