Feature: Cucumber Mathematics

  Scenario: Let’s eat cucumbers!
    Given I have 5 cucumbers
    When I eat 4 cucumbers
    Then Now I have 1 cucumbers

  Scenario: Let’s eat carrots!
    Given I have 10 carrots
    When I eat 12 carrots
    Then I should see an error message saying "Not enough carrots to eat!"

  Scenario: Let’s make a salad!
    Given I have 8 cucumbers
    And I have 5 carrots
    When I make a salad with 3 cucumbers and 2 carrots
    Then Now I have 5 cucumbers
    And Now I have 3 carrots
    And Now I have 1 salad
