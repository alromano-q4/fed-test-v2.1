// Import the necessary modules:
const fs = require('fs');
const { JSDOM } = require('jsdom');
const { expect } = require('chai');

// Describe the test suite:
describe('index.html', () => {
    // Define the test case:
    it('Expecting a specific ID in a proper location for styles to load', () => {
        // Read the contents of the index.html file
        const indexHTML = fs.readFileSync('./src/1-annual-reports/index.html', 'utf-8');

        // Load the index.html contents into a virtual DOM environment
        const dom = new JSDOM(indexHTML);
        const { document } = dom.window;

        // Perform the assertion
        expect(document.querySelector('body').id).to.equal('q4Wrapper');
    });
});
