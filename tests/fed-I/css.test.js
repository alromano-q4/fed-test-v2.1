// Import necessary modules
const fs = require('fs');
const chai = require('chai');
const chaiCss = require('chai-css');
chai.use(chaiCss);

// Read the contents of the FED I 'main.css' file
const cssFile = fs.readFileSync('./src/1-annual-reports/css/main.css', 'utf8');

// Initialize the expect function from Chai
const expect = chai.expect;

// Describe the test suite
describe('Main CSS', () => {
    it('Should have a responsive display property inside the correct class', () => {
        // Use Chai's 'expect' function to make assertions
        // expect(cssFile).to.have.css('.reports', 'display').that.is.oneOf(['grid', 'flex']);
        expect(cssFile).to.match(/\.reports\s*{\s*display:\s*(grid|flex)\s*;?/);
    });

    it('Should handle a 768px viewport', () => {
        // Use Chai's 'expect' function to make assertions
        expect(cssFile).to.match(/@media\s*\(max-width:\s*768px\)\s*{\s*\.reports/);
    });

    it('should have two-columns at 768px', () => {
        // Use Chai's 'expect' function to make assertions
        expect(cssFile).to.match(/@media\s*\(max-width:\s*768px\)\s*{\s*\.reports\s*{\s*grid-template-columns:\s*repeat\(2,\s*1fr\)\s*;\s*}/);
    });

    it('Should handle a 480px viewport', () => {
        // Use Chai's 'expect' function to make assertions
        expect(cssFile).to.match(/@media\s*\(max-width:\s*480px\)\s*{\s*\.reports/);
    });

    it('should have a single column at 480px', () => {
        // Use Chai's 'expect' function to make assertions
        expect(cssFile).to.match(/@media\s*\(max-width:\s*480px\)\s*{\s*\.reports\s*{\s*grid-template-columns:\s*repeat\(1,\s*1fr\)\s*;\s*}/);
    });
});
