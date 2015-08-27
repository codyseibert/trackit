'use strict'

serveStatic = require 'serve-static'

LIVERELOAD_PORT = 13338

module.exports = (grunt) ->

  require('load-grunt-tasks') grunt

  grunt.initConfig

    clean: [
      'dist'
      'tmp'
    ]

    concat:
      css:
        src: ['src/css/**/*.css'],
        dest: 'dist/css/app.css'
      js:
        src: ['tmp/bower.js', 'src/js/**/*.js', 'tmp/templates.js']
        dest: 'dist/js/app.js'

    bower_concat:
      dist:
        dest: 'tmp/bower.js'

    uglify:
      dist:
        options:
          mangle: false
        files:
          'dist/js/app.js': 'dist/js/app.js'

    copy:
      images:
        files: [
          expand: true
          cwd: 'src/images'
          src: '**'
          dest: 'dist/images'
        ]
      index:
        files: [
          expand: true
          cwd: 'src'
          src: 'index.html'
          dest: 'dist'
        ]

    ngtemplates:
      trackit:
        options:
          prefix: '/'
        cwd: 'src/js'
        src: '**/*.html'
        dest: 'tmp/templates.js'

    watch:
      dist:
        files: [
          'src/js/**/*.js'
          'src/css/**/*.css'
          'src/**/*.html'
        ]
        tasks: [
          'build'
        ]
        options:
          livereload: LIVERELOAD_PORT

    connect:
      options:
        port: 10000
        open: true
        hostname: 'localhost'
        livereload: LIVERELOAD_PORT

      dist:
        options:
          base: './'
          middleware: (connect) ->
            [connect().use serveStatic 'dist']

  grunt.registerTask 'build', 'builds trackit', [
    'clean'
    'copy:images'
    'concat:css'
    'bower_concat'
    'ngtemplates'
    'concat:js'
    'copy:index'
  ]

  grunt.registerTask 'dist', 'distributes trackit', [
    'build'
    'uglify'
  ]

  grunt.registerTask 'default', 'builds, connect, and starts watch', [
    'build'
    'connect'
    'watch'
  ]
