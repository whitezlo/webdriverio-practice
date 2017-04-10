var assert = require('assert');
describe('Google translate', function() {
    it('should have the right translation', function () {
        var textRussian="На Здоровье!";
        var input='#tw-source-text-ta';
        var oneMoreTranslation='div=1 more translation';
        var actualTranslation="Bless you!";
        browser.url('https://www.google.ca/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=google+translate+russian+to+english');
        browser.waitForExist(input, 5000);
        browser.setValue(input, textRussian);
        browser.waitForExist(oneMoreTranslation, 5000);
        browser.click(oneMoreTranslation);
        browser.waitForExist('.tw-bilingual-translation', 5000);
        var secondaryTranslation= browser.getText('.tw-bilingual-translation');
        assert.equal(secondaryTranslation[0], actualTranslation);
    });
});
