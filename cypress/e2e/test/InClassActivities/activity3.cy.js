describe('Activity 3', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Login with a valid user', () => {
        // Enter username & password then click the login button
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('Add a single product to cart', () => {
        // Login with a valid user
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // Add the saucelabs backpack to the cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    })
    
    it('Remove one item from cart', () => {
        // Login with a valid user
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        // Add the saucelabs backpack to the cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()

        // Navigate to cart and remove the saucelabs backpack from the cart
        cy.get('.shopping_cart_link').click()
        cy.get('#remove-sauce-labs-backpack').click()
    })
})