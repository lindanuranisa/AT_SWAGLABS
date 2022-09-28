/// <reference types="Cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


    Given('User is on the Login page', ()=>{
        cy.visit('/')
    })
// Scenario: Check response when user input valid credential
    When('User enters valid username {string} value', (username) =>{
        cy.get('#user-name').type(username)
    })
    And('User enters valid password {string} value', (password) =>{
        cy.get('#password').type(password)
    })
    And('User clicks Login button', ()=>{
        cy.get('#login-button').click()
    })
    Then('User success to log in', ()=>{
        cy.url().should('contains', 'inventory.html')
    })

// Scenario: Check response when user input invalid username
    When('User enters invalid username {string} value', (username) =>{
        cy.get('#user-name').type(username)
    })
    And('User enters valid password {string} value', (password) =>{
        cy.get('#password').type(password)
    })
    And('User clicks Login button', ()=>{
        cy.get('#login-button').click()
    })

// Scenario: Check response when user input invalid password
    When('User enters valid username {string} value', (username) =>{
        cy.get('#user-name').type(username)
    })
    And('User enters invalid password {string} value', (password) =>{
        cy.get('#password').type(password)
    })
    And('User clicks Login button', ()=>{
        cy.get('#login-button').click()
    })

// Scenario: Check response when user input invalid email and password
    When('User enters invalid username {string} value', (username) =>{
        cy.get('#user-name').type(username)
    })
    And('User enters invalid password {string} value', (password) =>{
        cy.get('#password').type(password)
    })
    And('User clicks Login button', ()=>{
        cy.get('#login-button').click()
    })

// Scenario: Check response when blocked user trying to log in
    When('User enters blocked username {string} value', (username) =>{
        cy.get('#user-name').type(username)
    })
    And('User enters valid password {string} value', (password) =>{
        cy.get('#password').type(password)
    })
    And('User clicks Login button', ()=>{
        cy.get('#login-button').click()
    })


    Then('The error message {string} is displayed', (errorMessage)=>{
        cy.get('h3[data-test="error"]', {timeout:30000  }).should(($errorButton) => {
            expect($errorButton).to.have.text(errorMessage)
        })
    })  
