module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
		  minify: {
		    	expand: true,
		    	cwd: 'css/',
		  		src: ['*.css'],
		    	dest: 'css/',
		    	ext: '.css'
		  }
		},
		sass: {
			dist: {
				files: [
		          {
		            expand: true,
		            cwd: 'source/',
		            src: ['**/*.scss'],
		            dest: 'css/',
		            ext: '.css',
		          },
		        ],
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'cssmin']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default',['watch']);
}