Feature: Zero Bank HomePage Test Features

    Zero Bank HomePage Test Cases

    Scenario: Menu Options Test Case
        Given I visit Zero Bank web site
        Then I validate homepage title as "Zero - Personal Banking - Loans - Credit Cards"
        And I validate homepage has "3" tabs
        And I validate homepage tab names

    Scenario: Search option Test Case
     Given I validate search option is visible

    Scenario: Signin option Test Case
     Given I validate signin option is visible

    Scenario: Online Banking Features Test Case
    Given I validate homepage has "4" Online Banking Features
    Then I validate Online Banking Feature names
    And I validate "More Services" button is visible

    Scenario: Footer Test Case
    Given I validate footer has "4" links
    Then I validate footer links
