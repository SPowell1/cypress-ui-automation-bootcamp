class Product{
    
    //#region Selectors
    get userNameField() { return ('#user-name') }
    get passwordField() { return ('#password') }
    get loginBtn() { return ('#login-button') }

    get itemsName() { return ('.inventory_item_name') }
    get itemsPrice() { return ('.inventory_item_price') }
    //#endregion

    //#region Methods
    selectFilter(filter){
        cy.get('.product_sort_container').select(filter)
    }
    //#endregion
}
export default new Product()