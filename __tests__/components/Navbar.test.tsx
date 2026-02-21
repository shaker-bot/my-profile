import { render, screen, fireEvent, act } from "@testing-library/react";
import Navbar from "@/components/Navbar";

const mockSetTheme = jest.fn();

jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: mockSetTheme }),
}));

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
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

const { usePathname } = require("next/navigation");

describe("Navbar – home page (/)", () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
    usePathname.mockReturnValue("/");
  });

  it("renders the AM monogram", () => {
    render(<Navbar />);
    expect(screen.getByText("AM")).toBeInTheDocument();
  });

  it("renders section navigation buttons on the home page", () => {
    render(<Navbar />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  it("renders the Hobbies link on the home page", () => {
    render(<Navbar />);
    const hobbiesLink = screen.getByRole("link", { name: "Hobbies" });
    expect(hobbiesLink).toBeInTheDocument();
    expect(hobbiesLink).toHaveAttribute("href", "/hobbies");
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

  it("scrolls to the experience section when Experience button is clicked", () => {
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

describe("Navbar – hobbies page (/hobbies)", () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
    usePathname.mockReturnValue("/hobbies");
  });

  it("renders section links as anchors pointing to home page sections", () => {
    render(<Navbar />);
    const expLink = screen.getByRole("link", { name: "Experience" });
    expect(expLink).toHaveAttribute("href", "/#experience");
  });

  it("renders the Hobbies link as active (highlighted) on the hobbies page", () => {
    render(<Navbar />);
    const hobbiesLink = screen.getByRole("link", { name: "Hobbies" });
    expect(hobbiesLink).toHaveAttribute("href", "/hobbies");
    expect(hobbiesLink.className).toContain("text-blue-600");
  });
});
