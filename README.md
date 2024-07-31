# gulp-demo
Gulp.js Demo

Download and fire npm command.
Using gulp, gulp-sass, gulp-concat, gulp-uglify, sass Packages.

In this video, we will learn following things:
1. How to install Gulp
2. Create an SCSS file and convert or compile it to CSS
3. Compress the CSS file into minified version
4. Create JS file and convert it to minified file
5. For the above tasks we will assign task to gulp
6. Use watch in Gulp to complete all tasks automatically.

Some useful commands for above 6 points:
1. npm init -y
2. npm i gulp-cli -g
3. npm i gulp --save-dev
4. npm i gulp-sass --save-dev
5. npm i sass --save-dev
6. npm i gulp-concat --save-dev
7. npm i gulp-uglify --save-dev
8. npm i @babel/core "@babel/preset-env @babel/register babel babel-core babel-preset-es2015 --save-dev

gulpfile.babel.js added packages using es 6 syntax

1. import gulp from 'gulp';
2. import dartsass from 'sass';
3. import gulpSass from 'gulp-sass';
4. import concat from 'gulp-concat';
5. import uglify from 'gulp-uglify';

**Gulp command**

```bash
gulp sass
```

```bash
gulp javascript
```

```bash
gulp watch
```