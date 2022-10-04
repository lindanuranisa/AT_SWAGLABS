Feature: Add to cart Feature

    Feature Check response when user click on Add to cart button

    Background: User go to login page   
        Given User is logged in
        Given user is on the items detail page


    When user clicks the Add to Cart button
    Then the button Add to Cart change into Remove item button
    Then the item is added on to the cart
    Then the counter on the cart icon increases by one automatically
