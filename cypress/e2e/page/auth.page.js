class Authentication{
    
    //#region Selectors
    get userNameField() { return ('#user-name') }
    get passwordField() { return ('#password') }
    get loginBtn() { return ('#login-button') }
    //#endregion

    //#region Methods
    login(username, password){
        cy.get(this.userNameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.loginBtn).click()
    }
    //#endregion
}
export default new Authentication()