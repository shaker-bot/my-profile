import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {
      const {
        initial,
        animate,
        exit,
        transition,
        whileInView,
        whileHover,
        whileTap,
        viewport,
        ...domProps
      } = props;
      return <div {...domProps}>{children}</div>;
    },
    a: ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {
      const {
        initial,
        animate,
        exit,
        transition,
        whileInView,
        whileHover,
        whileTap,
        viewport,
        ...domProps
      } = props;
      return <a {...domProps}>{children}</a>;
    },
  },
}));

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders the 'Let's Connect' heading", () => {
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
  });

  it("renders LinkedIn link with correct URL", () => {
    const linkedinLink = document.querySelector(
      'a[href="https://linkedin.com/in/mathewsabhishek"]'
    );
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders email link with correct mailto", () => {
    const emailLink = document.querySelector(
      'a[href="mailto:abhishekd.mathews@gmail.com"]'
    );
    expect(emailLink).toBeInTheDocument();
  });

  it("renders the 'Built with' text", () => {
    expect(
      screen.getByText(/Built with/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/using Next\.js & TypeScript/)
    ).toBeInTheDocument();
  });

  it("renders copyright with current year", () => {
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(
        new RegExp(`© ${currentYear} Abhishek Mathews`)
      )
    ).toBeInTheDocument();
  });

  it("renders the footer element", () => {
    const footer = document.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
