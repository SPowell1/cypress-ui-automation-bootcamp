class Authentication{
    
    //#region Selectors
    get userNameField() { return ('#user-name') }
    get passwordField() { return ('#password') }
    get loginBtn() { return ('#login-button') }

    get errMsg(){ return(`h3[data-test='error']`)}
    
    get itemNames() { return ('.inventory_item_name') }
    get ProdPageTitle() {return ('.title')}

    get mainMenuBtn() { return ('#react-burger-menu-btn') }
    get logOutBtn() { return ('#logout_sidebar_link') }
    //#endregion

    //#region Methods
    login(username, password){
        cy.get(this.userNameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.loginBtn).click()
    }

    logout(){
        cy.get(this.mainMenuBtn).click()
        cy.get(this.logOutBtn).click()
    }
    //#endregion
}
export default new Authentication()