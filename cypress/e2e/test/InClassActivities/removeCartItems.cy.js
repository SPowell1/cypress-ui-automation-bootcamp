import authPage from '../../page/auth.page.js'
import cartPage from '../../page/cart.page'
import productData from '../../data/products.data.js'


describe('Remove Cart items',() =>{
    beforeEach(() => {
        cy.visit('/')
    })

    it('should remove items from cart',()=>{
        //Login 
        authPage.login(`standard_user`,`secret_sauce`)

        //Add the first 2 products of the products data page to cart
        let prodCounter= 0
        for (const product of productData.products){
            if (prodCounter<2) {
                cartPage.addToCart(product.name)
                prodCounter+=1
            }
        }

         //Go to cart page
         cartPage.navigateToCart()

         //Remove the 2 products added
        for (const product of productData.products){
            
            if(prodCounter>0) {
                 cartPage.removeFromCart(product.name) 
                 prodCounter-=1
            }  
        }    

    }),
    it('should remove items from product page',()=>{
          //Login 
          authPage.login(`standard_user`,`secret_sauce`)

          //Add Products to cart on products page
          cy.get(`button[id='add-to-cart-sauce-labs-backpack']`).click()

          //remove item from cart on the products page
          cy.get(`button[id='remove-sauce-labs-backpack']`).click()

            
         
    })
    //#region Negative test- no login, navigate to cart or product page
    it('should attempt to navigate to cart without authentication',()=>{
        cy.visit('inventory.html',{failOnStatusCode: false})
        cy.get(authPage.errMsg).should('contain.text','when you are logged in')
        
    })
    //#endregion
})