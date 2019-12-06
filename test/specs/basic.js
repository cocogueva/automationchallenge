const assert = require('assert')

describe('Ebay automation challenge', () => {

    it('You have the right o buy some PUMA sneaks', async () => {
        await browser.url('ebay.com')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'Artículos electrónicos, autos, ropa, objetos de colección, cupones y más | eBay')

        const searchBar = await $('.gh-tb.ui-autocomplete-input')
        await searchBar.addValue('shoes');

        const searchButton = await $('.btn-prim.gh-spr')
        searchButton.click()
        //assertion de URL

        const brandSearch = await $('.x-searchable-list__textbox__aspect-Brand')
        await brandSearch.addValue('PUMA')
        
        var arrayCheckbox = await $$('.x-refine__multi-select-checkbox')
        arrayCheckbox[14].click() // Puma check box
        arrayCheckbox[4].click() // Size 10 checkbox

        var results = await $('.srp-controls__count-heading .BOLD')
        console.log('Total amount of Puma size 10 Sneaks is: ' + await results.getText());
        
        var ordenamiento = await $('.svg-icon x-flyout-arrow-down')
        await ordenamiento.click()
        
        //await ordenamiento.selectByVisibleText('Precio + Envío: más bajo primero')
        
        //var lowToHigh = await $('span=Precio + Envío: más bajo primero')
        //await lowToHigh.click()
    })

    //it('should be able to find brand new shoes', () => {
         
    //})
})