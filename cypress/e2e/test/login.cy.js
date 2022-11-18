import Auth from '../page/auth.page'

describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Login with a valid user', () => {
        Auth.login('standard_user','secret_sauce')
        cy.get('.inventory_item_name').should('be.visible')
    })
})