module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            '../../src/1-annual-reports/index.html',
            './reportsGap.karma.test.js'
        ],
        browsers: ['Chrome'],
        reporters: ['progress'],
        singleRun: false,
        client: {
            mocha: {
                reporter: 'html',
                ui: 'bdd'
            }
        },
        customLaunchers: {
            ChromeAutoClose: {
                base: 'Chrome',
                flags: ['--auto-close']
            }
        },
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-chrome-launcher'
        ],
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