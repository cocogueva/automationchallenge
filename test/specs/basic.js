const assert = require('assert')

describe('Ebay automation challenge', () => {

    it('should have the right title', async () => {
        await browser.url('ebay.com')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'Artículos electrónicos, autos, ropa, objetos de colección, cupones y más | eBay')

        const searchBar = $('.gh-tb.ui-autocomplete-input')
        await searchBar.addValue('test123');
    })

    it('should be able to find brand new shoes', () => {
         

   