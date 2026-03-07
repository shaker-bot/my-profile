import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

jest.mock("framer-motion", () => {
  const React = require("react");
  const makeMotion = (tag: string) =>
    React.forwardRef(({ children, ...props }: any, ref: any) => {
      const { initial, animate, exit, transition, viewport, whileHover, whileTap, ...rest } = props;
      return React.createElement(tag, { ...rest, ref }, children);
    });
  return {
    motion: {
      div: makeMotion("div"),
      section: makeMotion("section"),
      a: makeMotion("a"),
      button: makeMotion("button"),
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, src, width, height, className }: any) => (
    <img alt={alt} src={src} width={width} height={height} className={className} />
  ),
}));

describe("Hero", () => {
  it("renders the full name", () => {
    render(<Hero />);
    expect(screen.getByText("Abhishek Mathews")).toBeInTheDocument();
  });

  it("renders the profile image with correct alt text", () => {
    render(<Hero />);
    expect(screen.getByAltText("Abhishek Mathews")).toBeInTheDocument();
  });

  it("renders the bio paragraph", () => {
    render(<Hero />);
    expect(screen.getByText(/7\+ years of experience/i)).toBeInTheDocument();
  });

  it("renders the email contact link", () => {
    render(<Hero />);
    const emailLink = screen.getByRole("link", { name: /abhishekd\.mathews@gmail\.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:abhishekd.mathews@gmail.com");
  });

  it("renders the LinkedIn link", () => {
    render(<Hero />);
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/mathewsabhishek");
  });

  it("renders the GitHub link", () => {
    render(<Hero />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/shaker-bot");
  });

  it("renders the location", () => {
    render(<Hero />);
    expect(screen.getByText("McLean, VA")).toBeInTheDocument();
  });

  it("does not render a phone number", () => {
    render(<Hero />);
    expect(screen.queryByText(/703/)).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /tel:/i })).not.toBeInTheDocument();
  });

  it("renders the typewriter cursor", () => {
    render(<Hero />);
    expect(screen.getByText("|")).toBeInTheDocument();
  });

  it("renders the Download Resume CTA linking to Vercel Blob", () => {
    render(<Hero />);
    const resumeLink = screen.getByRole("link", { name: /download resume/i });
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute("href", expect.stringContaining("blob.vercel-storage.com"));
    expect(resumeLink).toHaveAttribute("target", "_blank");
  });

  it("renders the View My Work button", () => {
    render(<Hero />);
    expect(screen.getByRole("button", { name: /view my work/i })).toBeInTheDocument();
  });
});
