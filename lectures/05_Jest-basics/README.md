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
[Gherkin](https://cucumber.io/docs/gherkin/reference/#keywords) is a syntax rules created to use with [Cucumber](https://cucumber.io/docs/guides/overview/#what-is-cucumber), this syntax allow us do a structured scenarios easy, and use then how live documentation of our apps. But we go to use this syntax in this case with Jest.

## Basic Syntax
### `Scenario`
Description of what to do in the next cases.

### `Given`


### `When`
### `Then`
### `And, But or *`

~~~

~~~

# Describe
# Test
# Assertions
# Before test
# After test