@All
Feature: Title of your feature

   @smokeTest
  Scenario: New user registration
    Given navigates to the RegisterPage
    When User enters valid data
    Then User is successfully logged into the system
    And User successfully logout from the application

  @Regression
  Scenario Outline: Login with valid Credentials
    Given navigates to the LoginPage
    When User enters "<username>" and "<password>"
    Then User Login Successfully

    Examples: 
      | username | password |
      | Admin_1  | Admin_1  |
