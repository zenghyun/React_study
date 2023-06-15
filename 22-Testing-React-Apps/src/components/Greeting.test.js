import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
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

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);

    // exact : false 하면 덜 엄격한 검사, 기본 값은 true
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders Changed! if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act 
    // userEvent 실제 화면에서 동작한 것처럼 만드는 이벤트 
    const buttonEvent = screen.getByRole('button');
    userEvent.click(buttonEvent);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "zenghyun" if button was clicked', () => {
    render(<Greeting />);

    const buttonEvent = screen.getByRole('button');
    userEvent.click(buttonEvent);

    const outputElement = screen.queryByText('zenghyun');
    expect(outputElement).toBeNull();
  });
});
