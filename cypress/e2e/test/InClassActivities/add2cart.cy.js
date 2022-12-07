import authPage from '../../page/auth.page.js'
import cartPage from '../../page/cart.page'
import productData from '../../data/products.data.js'

describe('Adding products to cart',() =>{
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should add a single item to cart',()=>{
        authPage.login(`standard_user`,`secret_sauce`)
        cartPage.addToCart('Sauce Labs Backpack')
        cy.get(`.shopping_cart_badge`).should('be.visible')
        cy.get(`.btn.btn_secondary.btn_small.btn_inventory`).should('have.id','remove-sauce-labs-backpack')
    }),

    it('Should add a multiple items to cart',()=>{
        authPage.login(`standard_user`,`secret_sauce`)
        for (const product of productData.products) {
            cartPage.addToCart(product.name)
        }
        cy.get(`.shopping_cart_badge`).should('have.text','6')
        
    })

})
