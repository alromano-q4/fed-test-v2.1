// Assuming you have installed Mocha and Chai
const assert = require('chai').assert;
const fs = require('fs');

describe('main.js', function () {
    it('should match the expected snippet', function () {
        // Read the content of main.js file
        const mainContent = fs.readFileSync('./src/1-annual-reports/js/main.js', 'utf8');

        // Define the expected snippet
        const expectedSnippet = `
var reportsWidget = {
    options: {
        containerSelector: '.reports',
        "template": (
            '{{#.}}' +
            '<article class="reports_item">' +
            '<a href="{{cover}}" target="_blank">' +
            '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
            '</a>' +
            '<footer class="reports_docs">' +
            '{{#documents}}' +
            '<h3 class="reports_title">' +
            '<a href="{{url}}" target="_blank">{{title}} <span>({{file_size}}&nbsp;{{file_type}})</span></a>' +
            '</h3>' +
            '{{/documents}}' +
            '</footer>' +
            '</article>' +
            '{{/.}}'
        )
    },

    init: function () {
        this.renderReports(reportData || []);
    },

    renderReports: function (reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();
`;

        // Compare the content of main.js with the expected snippet
        assert.equal(mainContent.trim(), expectedSnippet.trim());
    });
});
