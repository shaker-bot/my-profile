import { render, screen } from "@testing-library/react";
import ThemeProvider from "@/components/ThemeProvider";

jest.mock("next-themes", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="theme-provider">{children}</div>
  ),
}));

describe("ThemeProvider", () => {
  it("renders children", () => {
    render(
      <ThemeProvider>
        <p>Hello world</p>
      </ThemeProvider>
    );
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("wraps children in the theme provider container", () => {
    render(
      <ThemeProvider>
        <span>Test content</span>
      </ThemeProvider>
    );
    expect(screen.getByTestId("theme-provider")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });
});
