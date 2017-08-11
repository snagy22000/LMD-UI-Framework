/* ************* Gulp Task Runner File ********************************/


//********* Plugins ***************//
var gulp = require('gulp'); //gulp package
var del = require('del'); //used for deleting public folder before running build
var cleanCSS = require('gulp-clean-css'); //to minify css files; used in sass task
var concat = require('gulp-concat'); //concat files; used in concatAndMinifyJs task
var uglify = require('gulp-uglify'); //minify js; used in concatAndMinifyJs task
var imagemin = require('gulp-imagemin'); // optimize image files; used in imageMin task
var bump = require('gulp-bump'); //Version plugin; used in bumpPackage task
var runSequence = require('run-sequence'); //run tasks in sequence; used in deploy task
var git = require('gulp-git'); //run git relatd tasks; used in deploy task.
var browserSync = require('browser-sync').create(); //browserSync for change watching; used in watch task.

//******* User Variables and Functions **********//
var gitMessage = "";

function handleError (err) {
  console.log(err.toString());
  process.exit(-1);
}


//************* Gulp Tasks *************//

//delete generated folder
gulp.task('clean:public', function() {
  return del.sync('public');
});


gulp.task('concatAndMinifyJs', function() {
  gulp.src(['src/scripts/loader.js',
            'src/scripts/animated-form.js',
            'src/scripts/prism.js',
            'src/scripts/speech.js'])
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .on('error', handleError)
      .pipe(gulp.dest('./public/scripts/js/'))
      .pipe(browserSync.reload({
        stream: true
      }));
});


//compile Sass and minify resulting css
gulp.task('css', function() {
  gulp.src('src/styles/css/main.css')
      .pipe(cleanCSS())
      .on('error', handleError)
      .pipe(gulp.dest('public/styles/css/'))
      .pipe(browserSync.reload({
        stream: true
      }));
});


//Optimize images
gulp.task('imageMin', function() {
    return gulp.src('src/images/*')
                .pipe(imagemin())
                .on('error', handleError)
                .pipe(gulp.dest('public/images'))
                .pipe(browserSync.reload({
                  stream: true
                }));
});




//Bump version of package.json -- defaults to patch
gulp.task('bumpPackage', function() {
  gulp.src('package.json')
      .pipe(bump())
      .on('error', handleError)
      .pipe(gulp.dest('./'));
});

gulp.task('watchIndex', function() {
  gulp.src('index.html')
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('copyFonts', function() {
  gulp.src('src/styles/fonts/*')
      .pipe(gulp.dest('public/styles/fonts'))
      .pipe(browserSync.reload({
        stream: true
      }));
});


//*********Git Tasks************//
//git add all files in source
gulp.task('add', function(){
  return gulp.src('.')
    .pipe(git.add());
});

//git commit
gulp.task('commit', function(){
  return gulp.src('.')
    .pipe(git.commit(gitMessage));
});

//git push
gulp.task('push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });
});

//********* Build,  Deploy, and Watch Tasks ************//
gulp.task('build', ['clean:public', 'imageMin', 'css', 'concatAndMinifyJs']);

gulp.task('deploy', function(callback) {
  runSequence('build', 'bumpPackage', 'add', 'commit', 'push', callback);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    }
  });
});

gulp.task('watch', ['browserSync', 'css'], function() {
  gulp.watch('src/styles/css/*.css', ['css']);

  gulp.watch('src/styles/fonts/*.+(otf|ttf|svg|eot|woff|woff2)', ['copyFonts']);

  gulp.watch('src/scripts/**/*.js', ['concatAndMinifyJs']);

  gulp.watch('./index.html', ['watchIndex']);

  gulp.watch('src/images/*.+(png|jpg|jpeg)', ['imageMin']);

});
