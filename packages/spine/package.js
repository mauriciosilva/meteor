Package.describe({
  summary: 'Build Awesome Javascript MVC applications'
});

Package.on_use(function(api, where) {
  where = where || ['client', 'server'];
  api.add_files('src/spine.js', where);
});
