class Product{
    
    //#region Selectors
    get userNameField() { return ('#user-name') }
    get passwordField() { return ('#password') }
    get loginBtn() { return ('#login-button') }

    get itemsName() { return ('.inventory_item_name') }
    get itemsPrice() { return ('.inventory_item_price') }

    get selectSortDropDown() { return ('.product_sort_container') }
    //#endregion

    //#region Methods
    selectSort(sort){
        cy.get(this.selectSortDropDown).select(sort)
    }
    //#endregion
}
export default new Product()