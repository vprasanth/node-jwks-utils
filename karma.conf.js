/* Copyright 2014 Open Ag Data Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require('./test/setup.js');

module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: ['mocha', 'browserify'],

        files: [
            'test/**/*.test.js'
        ],

        exclude: [
        ],

        preprocessors: {
            'test/**/*.test.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [
                'brfs',
                [
                    'browserify-istanbul',
                    {
                        ignore: [
                            'test/**',
                            '**/node_modules/**',
                            '**/bower_components/**'
                        ]
                    }
                ],
            ]
        },

        reporters: ['mocha', 'coverage'],

        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/',
            subdir: '.'
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        customLaunchers: {
            PhantomJSignoreSSL: {
                base: 'PhantomJS',
                flags: ['--ignore-ssl-errors=yes']
            }
        },

        browsers: ['PhantomJSignoreSSL'],

        singleRun: true
    });
};
