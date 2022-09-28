/// <reference types="Cypress" />


const { describe } = require("mocha")

Cypress.config('experimentalSessionSupport', true)


var userInfo, accessToken
var users = 'accessToken'


describe('Login Test', function(){
    it('Check the login function when user success to login', () => {
        cy.session(users, () => {
            cy.visit('/')
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce')
            cy.get('#login-button').click()
            cy.saveLocalStorage({timeout:60000})
                
            //the assertion
            cy.url().should('contains', 'inventory.html', {timeout:60000})
            
        })
    })
})
