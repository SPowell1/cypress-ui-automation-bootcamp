/// <reference types="cypress" />
import Auth from '../page/auth.page'
import Product from '../page/product.page'
import ProductData, { product } from '../data/products.data'

describe('Filter', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('should sort product list from A-Z', () => {
        Auth.login('standard_user','secret_sauce')

        // Sort data list based on name, from A to Z
        ProductData.products.sort()

        cy.get(Product.itemsName).each(($elem, index, $list) => {
            expect($elem.text()).equal(ProductData.products[index].name)
        })
    })

    it('should sort product list from Z-A', () => {
        Auth.login('standard_user','secret_sauce')
        Product.selectFilter(ProductData.filter['Z to A'])

        // Sort data list based on name, from Z to A
        ProductData.products.sort().reverse()

        cy.get(Product.itemsName).each(($elem, index, $list) => {
            expect($elem.text()).equal(ProductData.products[index].name)
        })
    })

    it('should sort product list from low to high', () => {
        Auth.login('standard_user','secret_sauce')
        Product.selectFilter(ProductData.filter['Low to High'])

        // Sort data list based on price, from low to high
        ProductData.products.sort((a, b) => a.price - b.price);

        cy.get(Product.itemsPrice).each(($elem, index, $list) => {
            expect($elem.text()).equal(`$${ProductData.products[index].price}`)
        })
    })

    it('should sort product list from high to low', () => {
        Auth.login('standard_user','secret_sauce')
        Product.selectFilter(ProductData.filter['High to Low'])

        // Sort data list based on price, from high to low
        ProductData.products.sort((a, b) => b.price - a.price);

        // Print the prices from the sorted list
        // ProductData.products.forEach(($elem, index)=>{
        //     cy.log($elem.price)
        // })

        cy.get(Product.itemsPrice).each(($elem, index, $list) => {
            expect($elem.text()).equal(`$${ProductData.products[index].price}`)
        })
    })
})