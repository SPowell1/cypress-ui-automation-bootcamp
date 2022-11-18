describe('Activity 4', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Login with a valid user', () => {
        // Enter username & password then click the login button
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // Assert that the user is taken to the Products page
        cy.get('.inventory_item_name').should('be.visible')
    })

    it('Add a single product to cart', () => {
        // Login with a valid user
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // Click add to cart button
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        // Assert the notification on the cart icon then navigate to cart
        cy.get('.shopping_cart_badge').should('have.text', 1)
        cy.get('.shopping_cart_link').click()

        // Assert correct item was added to cart successfully
        cy.get('.cart_quantity').should('have.text', 1)
        cy.get('#remove-sauce-labs-backpack').should('be.visible')
        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    })

    it('Remove one item from cart', () => {
        // Login with a valid user
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // Add an item to the cart so we can remove it
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        
        // Navigate to the cart
        cy.get('.shopping_cart_link').click()

        // Assert that there is 1 item in the cart then remove the item
        cy.get('.cart_quantity').should('have.text', 1)
        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
        cy.get('#remove-sauce-labs-backpack').click()

        // Assert that the item was removed and the cart is empty
        cy.get('.inventory_item_name').should('not.exist')
        cy.get('.removed_cart_item').should('exist')
    })
})