Feature: Add to Cart

    Feature Check Add to cart functionality

    Background: User go to login page
        Given User is logged in
        Given User is on the inventory page

    Scenario: Check response when user click Add to Cart button on single item
    When user clicks Add to Cart button on an item
    Then button Add to Cart change into Remove item button
    Then the item is added on to the cart

    Scenario: Check response when user click Add to Cart button on multiple items
    When user clicks Add to Cart button on an item
    And user clicks Add to Cart button on another item
    Then button Add to Cart changed into Remove item button on selected items
    Then one more item added to cart

    Scenario: Check response when user logout after click on Add to cart button
    When user clicks Add to Cart button on an item or some items
    Then user clicks the sidebar
    Then user clicks the logout from the sidebar
    When user trying to login by enters the valid username and password
    Then user success to login
    Then user can still see the items that have been added before on the items catalogue