const mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .setPublicPath('public');

mix.browserSync({
   proxy: 'localhost:3333',
   files: [
      "resources/**/*.edge",
      "resources/**/*.js",
      "resources/**/*.scss",
   ]
});