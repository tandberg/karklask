# jshint node: true
module.exports = ->
  @initConfig
    pkg: @file.readJSON 'package.json'
    
    watch:
      sass:
        files: ['sass/**/*.{scss,sass}', 'sass/_partials/**/*.{scss,sass}']
        tasks: ['build-dev']
        options:
          livereload: true
          interrupt: true
          debounceDelay: 250

      scripts:
        files: ['backbone/**/*.{js,json,jst}']
        tasks: ['build-dev']
        options:
          livereload: true
          interrupt: true
          debounceDelay: 250

    concat:
      main:
        dest: 'dist/main.js'
        nonull: true
        src: @file.readYAML('build.yaml').files

    copy:
      main:
        files: [
          expand: true
          src: ['scripts/**']
          dest: '_tmp/'
        ]

    uglify:
      main:
        options:
          report: 'min'
          sourceMap: 'dist/karklask.min.map'
        files:
          'dist/karklask.min.js': @file.readYAML('build.yaml').files

    jst:
      main:
        files:
          '_tmp/templates.js': ['backbone/**/*.jst']
        namespace: 'JST'

    jshint:
      src: ['backbone/**/*.js']
      options:
        jshintrc: '.jshintrc'

    sass:
      main:
        options:
          includePaths: [
            'vendor/foundation/scss/',
            'vendor/nvd3'
          ]
        files:
          'dist/css/karklask.css': 'sass/styles.scss'

    clean:
      dist: 'dist'
      tmp: '_tmp'

  # Load Grunt plugins.
  @loadNpmTasks 'grunt-contrib-clean'
  @loadNpmTasks 'grunt-contrib-concat'
  @loadNpmTasks 'grunt-contrib-copy'
  @loadNpmTasks 'grunt-contrib-jshint'
  @loadNpmTasks 'grunt-contrib-jst'
  @loadNpmTasks 'grunt-contrib-uglify'
  @loadNpmTasks 'grunt-contrib-watch'
  @loadNpmTasks 'grunt-sass'
  @loadNpmTasks 'grunt-shell'

  # Tasks
  @registerTask 'pre-build', [
    'clean',
  #  'jshint',
    'copy:main',
    'jst:main'
  ]

  @registerTask 'post-build', [
    'clean:tmp',
  ]

  @registerTask 'build-dev', [
    'pre-build',
    'concat:main',
    'sass:main',
    'post-build'
  ]

  @registerTask 'build-prod', [
    'pre-build',
    'uglify:main',
    'sass:main',
    'post-build'
  ]

  @registerTask 'default', ['build-dev', 'watch']