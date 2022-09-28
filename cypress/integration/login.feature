Feature: Login
    
    Feature Login

    Background: User go to login page
        Given User is on the Login page

    Scenario: Check response when user input valid credential
    When User enters valid username "standard_user" value
    And User enters valid password "secret_sauce" value
    And User clicks Login button
    Then User success to log in

    Scenario: Check response when user input invalid username
    When User enters invalid username "standard_userxxx" value
    And User enters valid password "secret_sauce" value
    And User clicks Login button
    Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

    Scenario: Check response when user input invalid password
    When User enters valid username "standard_user" value
    And User enters invalid password "secret_saucexxx" value
    And User clicks Login button
    Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

    Scenario: Check response when user input invalid email and password
    When User enters invalid username "standard_userx" value
    And User enters invalid password "secret_saucex" value
    And User clicks Login button
    Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

    Scenario: Check response when blocked user trying to log in
    When User enters valid username "locked_out_user" value
    And User enters valid password "secret_sauce" value
    And User clicks Login button
    Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed