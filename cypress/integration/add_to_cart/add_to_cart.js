/// <reference types="Cypress" />

import { should } from "chai";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import login from '../login/login';

Cypress.Cookies.preserveOnce('standard_user')

Given('User is logged in', () => {
    cy.logins()
    cy.getCookie('standard_user')


// it('Check response when user click on Add to cart button', () => {
    // Given('user is on the items detail page', ()=>{
    //     cy.get('#item_4_title_link').click()
    //     cy.url().should('contains', '/inventory-item.html?id=4')
    // })
    // When('user clicks the Add to Cart button', ()=>{
    //     cy.get('#add-to-cart-sauce-labs-backpack').click()
    // }),
    // Then('the button Add to Cart change into Remove item button', ()=> {
    //     cy.get('#remove-sauce-labs-backpack').should('be.visible')
    // })
    // Then('the item is added on to the cart', ()=> {
    //     cy.visit('https://www.saucedemo.com/cart.html')
    //     cy.get('#cart_contents_container').then(($items) => {
    //         expect($items[0]).to.contain.text('Sauce Labs Backpack')
    //     })

    //     cy.get('#remove-sauce-labs-backpack').should('be.visible')
    // })
    // Then('the counter on the cart icon increases by one automatically', ()=> {
    //     cy.get('#shopping_cart_container').should(($counter) => {
    //         expect($counter).to.have.text('1')
    //     })
    // })
})
// })