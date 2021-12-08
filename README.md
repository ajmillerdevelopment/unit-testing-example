# Unit Testing 

### Why Unit Test?

* Ensure code works in a systematic and repeatable way
* Functions as an idiot check for the developer
* Helps catch obscure or unexpected bugs created by later re-factors of old code
* Can help the developer think conceptually about how to build more resiliant code 
* Some teams even use Test Driven Development, where the unit test is written *before* the developer writes any code for their feature

### Unit testing philosophy

* Unit tests are atomic - they only test one thing
* Unit tests should avoid "side effects" outside of the one thing we're trying to test (this is why mocking is important)
* Avoid the temptation to just "test for coverage!" The point of a test is to make sure a function works as intended, not to get test coverage

### Tools

* Jest - JavaScript unit testing framework maintained by Facebook.
* Testing Library - adds critical utilities for testing React (jsx/tsx) files.
* Coverage Gutters - adds visual indication of uncovered lines to VS Code

### A simple example

* Unit testing follows a simple pattern: Set-up, Execute, Assert
* First, we set up the variables and mocks needed for our test
* Then, we execute the portion of the application we're testing
* Finally, we assert what we expected to happen
* Sometimes it can be easier to write unit tests in reverse, by asserting what we expect first we can often more easily figure out what Set-up is needed (usually because the test fails or crashes!)

### Mocks

* Mock functions are an extremely powerful tool. They enable us to more specifically tailor our tests for what we're testing for and to avoid side effects which could slow down or even break our tests
* There's two primary ways to mock a function, `jest.fn` and `jest.spyOn`
* The primary difference is that `jest.fn` replaces the function you're mocking, while `jest.spyOn` merely creates an intermediary. This is useful when you're mocking out a function in the same file you're testing, in case you want to use the function as actually written later.
* For functions outside the the same file as the function you're testing, `jest.fn` works fine and is less verbose.
* We can also tell our mocks to specifically return a specific value, which can be useful (or even necessary) depending on what the code does with the response.
* Mocking API calls is generally best practice because it eliminates a potential source of a "false failure" (if the API isn't working), it gives us more control for testing different forks based on what the function does with the API response, and it makes our tests faster.

### Some more complex examples
* Mocking with `jest.fn`
* Mocking with `jest.spyOn`
* Testing async code
* Testing private methods
* Testing VM files that interact with the DOM

### Unit testing in React
* Testing react components can be difficult for two reasons:
* First, we generally can't acess their methods directly so in order to test them we have to trigger them through the UI (this can be helped during development by making sure that business logic is always handled in our VMs and the components themselves only control UI)
* Testing through the UI can be difficult and we need tools to examine the DOM and interact with our application the way that a user would
* The good news is you can frequently get a lot of coverage by simply rendering the component and testing what's there by default
* Rendering components 
* Naviating our application with `screen`
* Interacting with our application with `userEvent`