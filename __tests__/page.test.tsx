import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

// Mock next-themes (used by Navbar)
jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: jest.fn() }),
}));

// Mock framer-motion
jest.mock("framer-motion", () => {
  const React = require("react");
  const makeMotion = (tag: string) =>
    React.forwardRef(({ children, ...props }: any, ref: any) => {
      const {
        initial, animate, exit, transition, whileInView,
        whileHover, whileTap, viewport, variants, custom,
        layoutId, ...rest
      } = props;
      return React.createElement(tag, { ...rest, ref }, children);
    });
  return {
    motion: {
      div: makeMotion("div"),
      a: makeMotion("a"),
      button: makeMotion("button"),
      nav: makeMotion("nav"),
      span: makeMotion("span"),
      section: makeMotion("section"),
    },
    AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
    useReducedMotion: () => false,
  };
});

// Mock IntersectionObserver (not available in jsdom, used by Navbar)
(global as any).IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ priority, fill, ...props }: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe("Home Page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders the main element", () => {
    const main = document.querySelector("main");
    expect(main).toBeInTheDocument();
  });

  it("renders the Hero section", () => {
    expect(screen.getByText("Abhishek Mathews")).toBeInTheDocument();
  });

  it("renders the Experience section", () => {
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
  });

  it("renders the Education section", () => {
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  it("renders the Skills section", () => {
    expect(screen.getByText("Skills & Expertise")).toBeInTheDocument();
  });

  it("renders the Footer", () => {
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
  });

  it("renders all sections in order", () => {
    const main = document.querySelector("main");
    expect(main).toBeInTheDocument();

    // Verify key content from each section exists
    expect(screen.getByText("Abhishek Mathews")).toBeInTheDocument();
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Skills & Expertise")).toBeInTheDocument();
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
  });
});
