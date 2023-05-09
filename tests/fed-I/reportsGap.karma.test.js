describe('Reports page', function () {
    let reportItems;

    before(function () {
        const html = document.querySelector('html').innerHTML;
        const domParser = new DOMParser();
        const doc = domParser.parseFromString(html, 'text/html');
        reportItems = Array.from(doc.querySelectorAll('.reports_item'));
    });

    it('should have a 30px gap between report items', function () {
        for (let i = 1; i < reportItems.length; i++) {
            const previousItem = reportItems[i - 1];
            const currentItem = reportItems[i];

            const previousItemStyle = getComputedStyle(previousItem);
            const currentItemStyle = getComputedStyle(currentItem);

            const previousItemBottom = previousItem.offsetTop + previousItem.offsetHeight;
            const currentItemTop = currentItem.offsetTop;

            const gap = currentItemTop - previousItemBottom;
            chai.assert.equal(gap, 30);
        }
    });
});
