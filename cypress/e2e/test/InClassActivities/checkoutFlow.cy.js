import authPage from '../../page/auth.page.js'
import cartPage from '../../page/cart.page'
import productData from '../../data/products.data.js'
import checkoutPage from '../../page/checkout.page.js'

describe('Checkout Flow',() =>{
    beforeEach(() => {
        cy.visit('/')
    })

    it('should check cart info',()=>{
        //Login 
        authPage.login(`standard_user`,`secret_sauce`)

        //Add Products to cart
        //Add the first 3 products of the products data page to cart
        let prodCounter= 0
        let sum=0
        for (const product of productData.products) {
            if (prodCounter<3) {
                cartPage.addToCart(product.name)
                prodCounter+=1
                sum+=parseFloat(product.price) //finding the sum of the prices of the item added
            }
        }

        //Check cart info
        cartPage.navigateToCart()
        cartPage.goToCheckout()
        cy.url().should('include','/checkout-step-one.html')
        checkoutPage.addCheckoutInfo('James','Patterson','12401')
        cy.url().should('include','/checkout-step-two.html')

        //-----Checkout overview- verify checkout Data-----

        //verify that the cart subtotal matches the subtotal displayed in checkout Overview
        checkoutPage.getSubTotal().then(val=>expect(sum).to.equal(val))
        
        //verify that the taxes matches the tax due amt displayed in checkout Overview
        checkoutPage.getTaxVal().then(val=>expect(checkoutPage.calcTax(sum)).to.equal(val))
        
        //verify that the cart total (subtotal+tax) matches the cart total displayed in checkout Overview
        const cartOverallTotal= sum+ checkoutPage.calcTax(sum)
        checkoutPage.getcartTotal().then(val=>expect(cartOverallTotal).to.equal(val))
        
        cy.get(`#finish`).should('be.visible')
        cy.get(`#finish`).click()
        
        //----------Checkout Complete
        cy.url().should('include','/checkout-complete.html')
        cy.get(`.header_secondary_container`).should('contain.text','Complete')
        cy.get(`.complete-text`).should('contain.text','Your order has been dispatched')
        cy.get(`img[alt='Pony Express']`).should('be.visible')
  
    }),

    it('should check cart then continue shopping',()=>{
        //Login 
        authPage.login(`standard_user`,`secret_sauce`)

        //Add 2 Products to cart
        let prodCounter=0
        for (const product of productData.products) {
        
            if (prodCounter<2) {
                cartPage.addToCart(product.name)
                prodCounter+=1
                
            }
        }

        //check cart then continue shopping
        cartPage.navigateToCart()
        cy.get(`a[id='item_4_title_link'] div`).should('have.text','Sauce Labs Backpack')
        cy.get(`a[id='item_0_title_link'] div`).should('contain.text','Bike Light')
        cy.get(cartPage.cartQuantity).should('have.text','11')
        checkoutPage.continueShopping()
        cy.url().should('include','/inventory.html')
    }),

    it.only('should go to checkout then cancel checkout',()=>{
        //Login 
        authPage.login(`standard_user`,`secret_sauce`)

        //Add Products to cart
        //Add the first 3 products of the products data page to cart
        let prodCounter= 0
        let sum=0
        for (const product of productData.products) {
           
            if (prodCounter<3) {
                cartPage.addToCart(product.name)
                prodCounter+=1
                sum+=parseFloat(product.price) //finding the sum of the prices of the item added
            }
        }

        //Check cart info
        cartPage.navigateToCart()
        cartPage.goToCheckout()
        cy.url().should('include','/checkout-step-one.html')
        checkoutPage.addCheckoutInfo('James','Patterson','12401')
       
        //Cancel checkout  
        cy.get(`#cancel`).should('be.visible')
        cy.get(`#cancel`).click()

        cy.get(`.title`).should('have.text','Products')
    })
})