import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

jest.mock("framer-motion", () => {
  const React = require("react");
  const makeMotion = (tag: string) =>
    React.forwardRef(({ children, ...props }: any, ref: any) => {
      const { initial, animate, exit, transition, viewport, whileHover, whileTap, whileInView, ...rest } = props;
      return React.createElement(tag, { ...rest, ref }, children);
    });
  return {
    motion: {
      div: makeMotion("div"),
      a: makeMotion("a"),
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

describe("Footer", () => {
  it("renders the Let's Connect heading", () => {
    render(<Footer />);
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
  });

  it("renders the LinkedIn link with an accessible label", () => {
    render(<Footer />);
    const linkedinLink = screen.getByRole("link", { name: /linkedin profile/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/mathewsabhishek");
  });

  it("opens LinkedIn link in a new tab", () => {
    render(<Footer />);
    const linkedinLink = screen.getByRole("link", { name: /linkedin profile/i });
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the email link with an accessible label", () => {
    render(<Footer />);
    const emailLink = screen.getByRole("link", { name: /send email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:abhishekd.mathews@gmail.com");
  });

  it("renders the copyright notice with the current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
    expect(screen.getByText(/Abhishek Mathews\. All rights reserved\./i)).toBeInTheDocument();
  });

  it("renders the GitHub link with an accessible label", () => {
    render(<Footer />);
    const githubLink = screen.getByRole("link", { name: /github profile/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/shaker-bot");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("icon links have aria-hidden icons to avoid duplicate labels", () => {
    const { container } = render(<Footer />);
    const hiddenIcons = container.querySelectorAll("svg[aria-hidden='true']");
    expect(hiddenIcons.length).toBeGreaterThanOrEqual(3);
  });
});
