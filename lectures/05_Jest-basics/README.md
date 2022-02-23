# Jest Basics
Jest is a testing framework developed by Facebook and allow us do a TDD.

The idea behind Jest is provide a simple testing environment with minimal configuration neded.

 - [Installation](#installation)
 - [Use Jest](#use-jest)
 - [Gherkin](#gherkin)
 - [Jest Methods](#jest-methods)
   - [Describe](#describe)
   - [Test](#test)
   - [Expect](#expect)
   - [Before & After test](#before--after-test)
 - [Functional example](#functional-example)

## Installation

~~~bash
npm install --save-dev jest
~~~

If you want to use Jest with es6+ we need to install and configure babel

~~~bash
# Install babel
npm install --save-dev @babel/preset-env

# Now create babel config file and open in VScode
touch .babelrc && code $_

# Finally paste this config and save file 
{
  "presets": ["@babel/preset-env"]
}
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
[Gherkin](https://cucumber.io/docs/gherkin/reference/#keywords) is a syntax rules created to use with [Cucumber](https://cucumber.io/docs/guides/overview/#what-is-cucumber), this syntax allow us do a structured scenarios easy, and use then how live documentation for our apps.

But in this case we go to use Gherkin with Jest.

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

# Jest Methods
The following basic methods allow us to do the test in Jest, to use it is not necessary to import them.

Let's to see the more basics methods to do the test. But you can check all avaliable methods [here](https://jestjs.io/docs/api)

## `Describe`
This method create a group of test and we can nest it if is necessary.

Too you can do tests without agroup them.

~~~javascript
describe('Description', () => {
  // Add more methods... 
});
~~~

## `Test`
This method run a new test, is necessary use it with a expect function to evaluate the result and make sure it test pass or not.
 
~~~javascript
test('Description', () => {
  // Do things to prepare test
  expect() 
});
~~~

## `Expect`
It's a function to evaluate if the result value matches with expected result.
Jest have a good amount of methods to use with expect to evalue, compare, assert, etc... 

You can find these methods [here](https://jestjs.io/docs/expect)

~~~javascript
// In a test callback

expect(1).toBe(1) // PASS

expect('ABC').toBe('ZXY') // NOT PASS

expect(true).toBeTruthy() // PASS

expect(true).toBeFalsy() // NOT PASS
~~~

## Before & After test
Jest have four useful methods to do things before or after defined test, this is very convenient for example, to clear data in each test case.

~~~javascript
beforeEach(() => {
 // Doing things
 // For example cleaning data
 
 test('First test', () => {
   // Do things with this data
   expect()
 });

 test('Second test', () => {
   // Now data returns to the initial state
   expect()
 });
})
~~~

# Functional example
In the next example imagine we have a some methods in a object imported how calculator and we want to test them to find any error.

In this [example](./example/) we can take a look how do that.