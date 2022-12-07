class Checkout{
    
    //#region Selectors

    get firstName() { return ('#first-name') }
    get lastName() { return ('#last-name') }
    get zipPostalCode() { return ('#postal-code') }

    get cancelBtn() { return ('#cancel') }
    get continueBtn() { return ('#continue') }

    get contShoppingBtn(){ return ('#continue-shopping')}

    get checkoutOverviewTitle(){return ('.header_secondary_container')}
    get subTotal(){return ('.summary_subtotal_label')}
    get taxSummary(){return ('.summary_tax_label')}
    get cartTotal(){return ('.summary_total_label')}
    //get itemPrice(){return ('.inventory_item_price')}

    //#endregion

    //#region Methods
    addCheckoutInfo(fname,lname,zipPostal){
        cy.get(this.firstName).type(fname)
        cy.get(this.lastName).type(lname)
        cy.get(this.zipPostalCode).type(zipPostal)
        cy.get(this.continueBtn).click()
    }

    continueShopping(){
        cy.get(this.contShoppingBtn).should('be.visible')
        cy.get(this.contShoppingBtn).click()
    }

    cancelCheckout(){
        cy.get(this.cancelBtn).click()
    }

    calcTax(sumTotal){
        const taxDue= sumTotal *0.08 //Tax is 8%
        return parseFloat(taxDue.toFixed(2))
    }

    getTaxVal(){
      return cy.get(this.taxSummary).invoke('text')
        // find the part of the text with the number
        .then((s) => {
            const newstr= s.replace(/[^0-9.]/g, '')
           const taxVal= parseFloat(newstr) 
            //cy.log(subTotalVal)
            return taxVal
        })
        //     const taxVal= parseFloat(newstr)
        // find the part of the text with the number
        // .then((s) => {
        //     const newstr= s.replace(/[^0-9.]/g, '')
        //     const taxVal= parseFloat(newstr) 
        //     //cy.log(taxVal)
        //     return newstr
        // })
       
        
              
    }
  
    getSubTotal(){
   
        return cy.get(this.subTotal).invoke('text')
        // find the part of the text with the number
        .then((s) => {
            const newstr= s.replace(/[^0-9.]/g, '')
           const subTotalVal= parseFloat(newstr) 
            //cy.log(subTotalVal)
            return subTotalVal
        })
        // .then((newstr)=>{
        //     const subTotalVal= parseFloat(newstr)
        //     return subTotalVal
        // })
        // .then(cy.log)
        
        
    }
        
    getcartTotal(){
        return cy.get(this.cartTotal).invoke('text')
        // find the part of the text with the number
        .then((s) => {
            const newstr= s.replace(/[^0-9.]/g, '')
            const cartTotalVal= parseFloat(newstr) 
            return cartTotalVal
        })


    }
        
        
        // const total= this.subTotal + this.taxSummary
        // if (total==this.cartTotal) {
        //     cy.log('Cart total is correct')
        // } else {
        //     cy.log('Cart total is incorrect')
        // }
    
    //#endregion
}
export default new Checkout()