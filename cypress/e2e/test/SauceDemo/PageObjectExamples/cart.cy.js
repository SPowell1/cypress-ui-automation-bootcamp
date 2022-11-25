/// <reference types="cypress"/>
import Auth from '../../../page/SauceDemo/auth.page'
import Cart from '../../../page/SauceDemo/cart.page'

describe('Activity 6', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Add a single product to cart', () => {
        Auth.login('standard_user','secret_sauce')

        Cart.addToCart('Sauce Labs Backpack')
        Cart.navigateToCart()

        cy.get(Cart.cartNotification).should('have.text', 1)
        cy.get(Cart.cartQuantity).should('have.text', 1)
        cy.get(Cart.removeSauceLabBackPackBtn).should('be.visible')
        cy.get(Cart.cartItemsName).should('have.text', 'Sauce Labs Backpack')
    })

    it('Remove one item from cart', () => {
        Auth.login('standard_user','secret_sauce')

        Cart.addToCart('Sauce Labs Backpack')
        Cart.navigateToCart()

        // Assert that there is 1 item in the cart then remove the item
        cy.get(Cart.cartQuantity).should('have.text', 1)
        cy.get(Cart.cartItemsName).should('have.text', 'Sauce Labs Backpack')
        cy.get(Cart.removeSauceLabBackPackBtn).click()

        // Assert that the item was removed and the cart is empty
        cy.get(Cart.cartItemsName).should('not.exist')
        cy.get(Cart.removedCartItem).should('exist')
    })
})