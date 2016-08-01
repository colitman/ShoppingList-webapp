
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('/shopping-list');

    expect(browser.getTitle()).toEqual('Shopping List');
  });
});