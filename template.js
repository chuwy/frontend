/*
 * grunt-init-frontend
 *
 * Copyright (c) 2015 Anton Parkhomenko
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Dead simple frontend template with Grunt autoreload, bower and scss.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Be sure you have installed SCSS and Compass';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'frontend'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title', function(value, data, done) {
      done(null, value);
    }),
    init.prompt('version'),
    init.prompt('repository')
  ], function(err, props) {
    // A few additional properties.
    props.keywords = [];

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};
