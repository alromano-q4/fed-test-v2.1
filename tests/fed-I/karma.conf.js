module.exports = function (config) {
    config.set({
        frameworks: ["viewport", 'mocha', 'chai'],
        files: [
            '../../src/1-annual-reports/**/*.html',
            './reportsGap.karma.test.js'
        ],
        browsers: ['ChromeDebugging'],
        reporters: ['progress'],
        singleRun: false,
        client: {
            mocha: {
                reporter: 'html',
                ui: 'bdd'
            }
        },
        customLaunchers: {
            ChromeDebugging: {
                base: 'Chrome',
                flags: ['--remote-debugging-port=9333']
            }
        },
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-chrome-launcher',
            'karma-viewport'
        ],
        // Viewport configuration
        viewport: {
            breakpoints: [
                {
                    name: "mobile",
                    size: {
                        width: 480,
                        height: 620
                    }
                },
                {
                    name: "tablet",
                    size: {
                        width: 768,
                        height: 1024
                    }
                },
                {
                    name: "screen",
                    size: {
                        width: 1440,
                        height: 900
                    }
                }
            ]
        },
        onCompletion: function (browsers, results) {
            if (results.failed === 0) {
                browsers.forEach(function (browser) {
                    if (browser.lastResult.success) {
                        browser.exit();
                    }
                });
            }
        }
    });
};