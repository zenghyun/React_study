# Testing React Apps 

## What is "Testing"? 
  ### - Manual Testing 
  - Write Code <> Preview & Test in Browser
  - Very important: You see what your users will see 

### => Error-prone: It's hard to test all possible combinations and scenarios 


### - Automated Testing
- Code that tests your code
- You test the individual building blocks of your app 
### => Very technical but allows you to test ALL building blocks at once
  

  ----

<br>

  ## Different Kinds Of Automated Tests

### - Unit Tests
- Test the individual building blocks (functions, components) in isolation
- Projects typically contain dozens or hundreds of unit tests <br>
=> The most common / important kind of test

### - Integration Tests 
- Test the combination of multiple building blocks
- Projects typically contain a couple of integration tests <br>
=> Also important, but focus on unit tests in most cases

### - End-to-End (e2e) Tests
- Test complete scenarios in your app as the user would experience them
- Projects typically contain only a few e2e tests <br>
=> Important but can also be done manually (partially)

----
<br>

## Tests vs Tests Suites
 
### Tests

<br>

```js
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act 
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
})
```
<br>

### Test Suites
  Test를 그룹화 해서 사용하는 것 

<br>

```js
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
});

```

