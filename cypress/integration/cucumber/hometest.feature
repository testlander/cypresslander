Feature: Zero Bank HomePage Test Features

    Zero Bank HomePage Test Cases

    Scenario: Menu Options Test Case
        Given I visit Zero Bank web site
        Then I validate homepage title as "Zero - Personal Banking - Loans - Credit Cards"
        And I validate homepage has "3" tabs
        And I validate homepage tab names