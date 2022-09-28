/// <reference types="Cypress" />

import { should } from "chai";
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import login from '../login/login';

Cypress.Cookies.preserveOnce('standard_user')


Given('User is logged in', () => {
    cy.logins()
    cy.getCookie('standard_user')

// Scenario: Check response when user click Add to Cart button on single item
    Given('User is on the inventory page', ()=>{
        cy.url().should('contains', '/inventory.html')
    }),
    When('user clicks Add to Cart button on an item', ()=>{
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    }),
    Then('button Add to Cart change into Remove item button', ()=> {
        cy.get('#remove-sauce-labs-backpack').should('be.visible')
    })
    Then('the item is added on to the cart', ()=> {
        cy.get('#shopping_cart_container').should(($counter) => {
            expect($counter).to.have.text('1')
        })
    })

// Scenario: Check response when user click Add to Cart button on multiple items
    And('user clicks Add to Cart button on another item', ()=>{
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
    })
    Then('button Add to Cart changed into Remove item button on selected items', ()=> {
        cy.get('#remove-sauce-labs-bike-light').should('be.visible')
    })
    Then('one more item added to cart', ()=> {
        cy.get('#shopping_cart_container').should(($counter) => {
            expect($counter).to.have.text('2')
        })
    }) 

// Scenario: Check response when user logout after click on Add to cart button
    When('user clicks Add to Cart button on an item or some items', () =>{
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
    })
    Then('user clicks the sidebar', ()=> {
        cy.get('#react-burger-menu-btn').click()
    })
    Then('user clicks the logout from the sidebar', ()=> {
        cy.get('#logout_sidebar_link').click()
    })
    When('user trying to login by enters the valid username and password', ()=>{
        cy.logins()
    })
    Then('user success to login', ()=>{
        cy.url().should('contain', '/inventory.html')
    })
    Then('user can still see the items that have been added before on the items catalogue', ()=> {
        cy.get('#shopping_cart_container').should(($counter) => {
            expect($counter).to.have.text('1')
        })
    })


})