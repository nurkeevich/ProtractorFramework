@practicePage @radioButtons
Feature: Practice page Radio buttons
    As a user I should be able to see [BMW, Benz, Honda] Radio buttons

    Scenario Outline: [BMW, Benz, Honda] radio buttons should be visiable
        Given User at Practice page
        Then User should see "<RadioButtons>"

        Examples:
            | RadioButtons |
            | BMW          |
            | Benz         |
            | Honda        |