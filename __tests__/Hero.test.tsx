import { render, screen, fireEvent } from "@testing-library/react";
import Hero from "@/components/Hero";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...filterDomProps(props)}>{children}</div>
    ),
    a: ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => (
      <a {...filterDomProps(props)}>{children}</a>
    ),
    button: ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => (
      <button {...filterDomProps(props)}>{children}</button>
    ),
    span: ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => (
      <span {...filterDomProps(props)}>{children}</span>
    ),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
  useReducedMotion: () => false,
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ priority, fill, ...props }: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Helper to filter non-DOM props from framer-motion
function filterDomProps(props: Record<string, unknown>) {
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
  return domProps;
}

describe("Hero", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it("renders the name", () => {
    expect(screen.getByText("Abhishek Mathews")).toBeInTheDocument();
  });

  it("renders the typewriter cursor", () => {
    // TypewriterText starts with an empty string and types progressively;
    // the blinking cursor "|" is always present regardless of current title.
    expect(screen.getByText("|")).toBeInTheDocument();
  });

  it("renders the professional summary", () => {
    expect(
      screen.getByText(/Senior Software Engineer with 7\+ years/)
    ).toBeInTheDocument();
  });

  it("renders the profile image with correct alt text", () => {
    const img = screen.getByAltText("Abhishek Mathews");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/IMG-1327.jpg");
  });

  it("renders the email link", () => {
    const emailLink = screen.getByText("abhishekd.mathews@gmail.com");
    expect(emailLink.closest("a")).toHaveAttribute(
      "href",
      "mailto:abhishekd.mathews@gmail.com"
    );
  });

  it("renders the location", () => {
    expect(screen.getByText("McLean, VA")).toBeInTheDocument();
  });

  it("renders the LinkedIn link with correct attributes", () => {
    const linkedinLink = screen.getByText("LinkedIn").closest("a");
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/mathewsabhishek"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the GitHub link with correct attributes", () => {
    const githubLink = screen.getByText("GitHub").closest("a");
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/shaker-bot"
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the Download Resume CTA linking to Vercel Blob", () => {
    const resumeLink = screen.getByRole("link", { name: /download resume/i });
    expect(resumeLink).toHaveAttribute("href", expect.stringContaining("blob.vercel-storage.com"));
    expect(resumeLink).toHaveAttribute("target", "_blank");
  });

  it("renders the View My Work button", () => {
    expect(screen.getByRole("button", { name: /view my work/i })).toBeInTheDocument();
  });

  it("renders scroll indicator that scrolls to experience section", () => {
    const scrollTarget = document.createElement("div");
    scrollTarget.id = "experience";
    scrollTarget.scrollIntoView = jest.fn();
    document.body.appendChild(scrollTarget);

    // The scroll indicator is a clickable motion.div
    const scrollIndicator = document.querySelector(".cursor-pointer");
    expect(scrollIndicator).toBeInTheDocument();

    if (scrollIndicator) {
      fireEvent.click(scrollIndicator);
      expect(scrollTarget.scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
      });
    }

    document.body.removeChild(scrollTarget);
  });
});
