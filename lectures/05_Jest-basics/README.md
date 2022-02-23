# Jest Basics
Jest is a testing framework developed by Facebook and allow us do a TDD.
The idea behind Jest is provide a simple testing environment with minimal configuration neded.


 - [Installation](#installation)
 - [Use Jest](#use-jest)
 - [Gherkin](#gherkin)
 - [Describe](#describe)
 - [Test](#test)
 - [Assertions]()
 - [Before test]()
 - [After test]()
 - [Functional example]()

## Installation

~~~bash
npm install --save-dev jest
~~~

## Use Jest
We can use Jest over cli, this allow us run Jest with some [options](https://jestjs.io/docs/cli) or listen changes on our test and code.
If you want can [configure](https://jestjs.io/docs/configuration) this options in a package.json.

~~~bash
# Run by default
jest

# Run test over npm test
npm test -- [Options] 

# Run specified test with patter or file name
jest *.test.js 
# Or
jest path/to/file.js

# Run test listen for changes
jest --watchAll

# Run test and make coverage info
jest --collect-coverage
~~~

# Gherkin
[Gherkin](https://cucumber.io/docs/gherkin/reference/#keywords) is a syntax rules created to use with [Cucumber](https://cucumber.io/docs/guides/overview/#what-is-cucumber), this syntax allow us do a structured scenarios easy, and use then how live documentation for our apps. But in this case we go to use Gherkin with Jest.

## Basic Syntax
### `Scenario`
Description of what to do in the next tests.

### `Given`
Describe the context on we do the next actions.

### `When`
Is the action we do for each test we use one When to describe each one.

### `Then`
Finally we describe the expected result of previous action.

### `And, But or *`
When we have a multiple Given or When cases we can use And or *.
And in case of Then we have But or *. 

~~~gherkin
# Simple example doing a omelette
Scenario: Do a omelette

  Given: A egg
    *  : A pan
    *  : A flame

   When: Cook a omelette
    *  : Not burn it
   Then: I have a omelette

   When: Cook a omelette
    *  : Burn it
   Then: I have ashes
~~~

# Describe
# Test
# Assertions
# Before test
# After test