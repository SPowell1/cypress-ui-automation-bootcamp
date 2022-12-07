import authPage from '../../page/auth.page'
import userData from '../../data/users.data'


describe('Data Driven Login', () =>{

    beforeEach(() => {
        cy.visit('/')
    })

    it('should login as a valid user',()=>{
        authPage.login(userData.valid.username, userData.valid.password)
        cy.get(`.app_logo`).should('be.visible');
        cy.get(`.title`).should('contain.text','Products')
    })

    //#region Negative tests- Login
    it('should login as a locked out user',()=>{
       authPage.login(userData.lockedOutUser.username, userData.lockedOutUser.password)
       cy.get(authPage.errMsg).should('contain.text',userData.lockedOutUser.errorMsg)
    })

    it('should login as a problem user',()=>{
        authPage.login(userData.problemUser.username, userData.problemUser.password)
        cy.get(`img[src$='/static/media/sauce-backpack-1200x1500.34e7aa42.jpg']`).should('not.exist')
    })

    it('should attempt to login with a valid user name but incorrect password',()=>{
        authPage.login(userData.valid.username, 'fakepassword')
        cy.get(authPage.errMsg).should('be.visible')


    })
    //#endregion

})