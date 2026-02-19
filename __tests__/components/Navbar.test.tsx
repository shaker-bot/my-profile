import { render, screen, fireEvent, act } from "@testing-library/react";
import Navbar from "@/components/Navbar";

const mockSetTheme = jest.fn();

jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: mockSetTheme }),
}));

jest.mock("framer-motion", () => {
  const React = require("react");
  return {
    motion: {
      nav: React.forwardRef(({ children, ...props }: any, ref: any) => {
        const { initial, animate, transition, ...rest } = props;
        return <nav {...rest} ref={ref}>{children}</nav>;
      }),
      button: React.forwardRef(({ children, ...props }: any, ref: any) => {
        const { initial, animate, exit, transition, ...rest } = props;
        return <button {...rest} ref={ref}>{children}</button>;
      }),
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

describe("Navbar", () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
  });

  it("renders the AM monogram", () => {
    render(<Navbar />);
    expect(screen.getByText("AM")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  it("renders the dark mode toggle button after mount", async () => {
    render(<Navbar />);
    const toggleBtn = await screen.findByRole("button", { name: /toggle dark mode/i });
    expect(toggleBtn).toBeInTheDocument();
  });

  it("calls setTheme with 'dark' when toggle is clicked in light mode", async () => {
    render(<Navbar />);
    const toggleBtn = await screen.findByRole("button", { name: /toggle dark mode/i });
    fireEvent.click(toggleBtn);
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("scrolls to top when AM button is clicked", () => {
    render(<Navbar />);
    const amBtn = screen.getByText("AM");
    fireEvent.click(amBtn);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("scrolls to the experience section when Experience link is clicked", () => {
    document.body.innerHTML = '<section id="experience"></section>';
    render(<Navbar />);
    fireEvent.click(screen.getByText("Experience"));
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  it("adds a shadow class after scrolling past 20px", () => {
    render(<Navbar />);
    const nav = screen.getByRole("navigation");
    expect(nav.className).not.toContain("shadow-md");

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 30, writable: true });
      fireEvent.scroll(window);
    });

    expect(nav.className).toContain("shadow-md");
  });
});
