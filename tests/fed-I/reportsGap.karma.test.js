describe('Design Spec Requirements - Responsive tests', () => {
    before(() => {
        viewport.set("mobile", "tablet", "screen"); // Set the viewport dimensions
    });

    after(() => {
        viewport.reset(); // Reset the viewport dimensions
    });

    // Run tests for mobile, tablet, and screen
    viewport.each(async (name, breakpoint) => {
        describe(`for \${name}`, () => {
            before(() => {
                viewport.set(breakpoint.width, breakpoint.height);
            });

            after(() => {
                viewport.reset();
            });

            // New assertion: Make sure div.reports isn't empty and contains articles.reports_item elements
            it('should have at least one article item with a class of "reports_item" within a div with a class of "reports"', () => {
                chai.expect(reportsItems.length).to.be.above(0);
            });

            it('should have a 30px gap between article items with a class of "reports_item" within a CSS grid', async () => {
                viewport.set("screen"); // Set the viewport width
                const gap = parseFloat(getComputedStyle(reportsContainer).getPropertyValue('gap'));
                chai.expect(gap).to.equal(30);
            });

            it('should have 2 grid columns within a div with a class of "reports" at 768px and below', async () => {
                viewport.set("tablet"); // Set the viewport width
                const gridTemplateColumns = getComputedStyle(reportsContainer).getPropertyValue('grid-template-columns');
                const columns = gridTemplateColumns.split(' ').length;
                chai.expect(columns).to.equal(2);
            });

            it('should have 1 grid column within a div with a class of "reports" at 480px and below', async () => {
                viewport.set("mobile"); // Set the viewport width
                const gridTemplateColumns = getComputedStyle(reportsContainer).getPropertyValue('grid-template-columns');
                const columns = gridTemplateColumns.split(' ').length;
                chai.expect(columns).to.equal(1);
            });
        });
    });
});
