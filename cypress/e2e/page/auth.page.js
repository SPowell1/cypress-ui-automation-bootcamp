class Authentication{
    
    get userNameField() { return ('#user-name') }
    get passwordField() { return ('#password') }
    get loginBtn() { return ('#login-button') }

    login(username, password){
        cy.get(this.userNameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.loginBtn).click()
    }
}
export default new Authentication()