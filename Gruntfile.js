module.exports = function (grunt) {

    grunt.initConfig({
        php: {
            dist: {
                options: {
                    hostname: '127.0.0.1',
                    port: 5000,
                    base: '6.ServerCalls', // Project root
                    keepalive: true,
                    open: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-php');
    grunt.registerTask('default', ['php:dist']);
};

