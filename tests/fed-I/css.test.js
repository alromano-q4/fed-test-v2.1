// Import necessary modules
const fs = require('fs');
const chai = require('chai');
const chaiCss = require('chai-css');
chai.use(chaiCss);

// Initialize the expect function from Chai
const expect = chai.expect;

// Describe the test suite
describe('Main CSS', () => {
    it('Should have a responsive display property inside the correct class', () => {
        // Read the contents of the 'main.css' file
        const cssFile = fs.readFileSync('./src/1-annual-reports/css/main.css', 'utf8');

        // Use Chai's 'expect' function to make assertions
        // expect(cssFile).to.have.css('.reports', 'display').that.is.oneOf(['grid', 'flex']);
        expect(cssFile).to.match(/\.reports\s*{\s*display:\s*(grid|flex)\s*;?/);
    });
});
