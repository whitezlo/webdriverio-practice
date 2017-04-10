/*
# for id
. for class
= for linktext
=* fro partial link text
Xpath like traditional way.
*/

var assert = require('assert');
describe('webdriver.io page', function() {
    it('should have the right translation', function () {
        var textRussian="На Здоровье!";
        var input='#tw-source-text-ta';
        var oneMoreTranslation='div=1 more translation';
        var textEnglish="Bless you!";
        var secondaryTranslation='.tw-bilingual-translation';

        browser.url('https://www.google.ca/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=google+translate+russian+to+english');
        browser.waitForExist(input, 5000);
        browser.setValue(input, textRussian);

        browser.waitForExist(oneMoreTranslation, 5000);
        browser.click(oneMoreTranslation);

        browser.pause(5000);
    });
});
