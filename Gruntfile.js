//these files are concatenated to scripts.min.js
var scriptfiles = [
    'assets/bower_components/jquery/dist/jquery.js',
    'assets/bower_components/bootstrap/js/transition.js',
//                        'assets/bower_components/bootstrap/js/alert.js',
//                        'assets/bower_components/bootstrap/js/button.js',
//                        'assets/bower_components/bootstrap/js/carousel.js',
    'assets/bower_components/bootstrap/js/collapse.js',
//                        'assets/bower_components/bootstrap/js/dropdown.js',
//                        'assets/bower_components/bootstrap/js/modal.js',
//                        'assets/bower_components/bootstrap/js/tooltip.js',
//                        'assets/bower_components/bootstrap/js/popover.js',
//                        'assets/bower_components/bootstrap/js/scrollspy.js',
//                        'assets/bower_components/bootstrap/js/tab.js',
//                        'assets/bower_components/bootstrap/js/affix.js',
    'assets/js/scripts.js'
];




//grunt
'use strict';
module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        //LESS
        less: {
            dist: {
                files: {
                    'assets/css/styles.css': [
                        'assets/less/styles.less'
                    ]
                },
                options: {
                    compress: false,
                    sourceMap: true,
                    sourceMapFilename: 'assets/css/styles.css.map'
                }
            }
        },

        //minify css
        cssmin: {
            minify: {
                src: 'assets/css/styles.css',
                dest: 'assets/css/styles.css'
            }
        },

        //autoprefix all css
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9']
            }
        },

        //uglify and concat js files
        uglify: {
            dist: {
                files: {
                    'assets/js/scripts.min.js': ['assets/js/scripts.min.js']
                },
                options: {
                    sourceMap: 'assets/js/scripts.min.js.map',
                    compress: {
                        drop_console: true
                    }
                }
            }
        },

        //image optimization
        imagemin: {
            options: {
                cache: false
            },
            dist: {
                options: {
                    optimizationLevel: 5,
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'assets/img/',
                        src: ['**/*.{PNG,JPG,JPEG,GIF,png,jpg,jpeg,gif}'],
                        dest: 'assets/img/'
                    }
                ]
            }
        },

        //show window when done
        notify: {
            default: {
                options: {
                    title: 'Task done',
                    message: 'Now keep on coding'
                }
            }
        },

        //concat files
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: scriptfiles,
                dest: 'assets/js/scripts.min.js'
            }
        },


        //watch job
        watch: {
            less: {
                files: [
                    'assets/less/*.less'
                ],
                tasks: ['less', 'notify']
            },
            js: {
                files: [
                    'assets/js/scripts.js'
                ],
                tasks: [ 'concat', 'notify']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'assets/css/styles.css',
                    'assets/js/scripts.js'
                ]
            }
        }
    });





    //unused but installed: newer, spritesmith, svg-sprite, clean, uncss

    //default for production: files are concatenated and uglified
    grunt.registerTask('default', [
        'less',
        'autoprefixer',
        'cssmin',
        'uglify',
        'imagemin',
        'notify'
    ]);

    //dev is "watch": no uglify and minification
    grunt.registerTask('dev', [
        'watch'
    ]);

};