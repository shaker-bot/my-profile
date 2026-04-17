import { render } from "@testing-library/react";
import ParticleBackground from "@/components/ParticleBackground";

jest.mock("framer-motion", () => {
  const React = require("react");
  const makeMotion = (tag: string) =>
    React.forwardRef(({ children, ...props }: any, ref: any) => {
      const { initial, animate, exit, transition, ...rest } = props;
      return React.createElement(tag, { ...rest, ref }, children);
    });
  return {
    motion: {
      div: makeMotion("div"),
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
    useReducedMotion: () => false,
  };
});

describe("ParticleBackground (rule-field background)", () => {
  it("renders without crashing", () => {
    const { container } = render(<ParticleBackground />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders four register marks in each corner", () => {
    const { container } = render(<ParticleBackground />);
    const registerMarks = container.querySelectorAll("svg");
    expect(registerMarks.length).toBe(4);
  });

  it("renders the colophon signal dot", () => {
    const { container } = render(<ParticleBackground />);
    const dots = container.querySelectorAll(".rounded-full");
    expect(dots.length).toBeGreaterThanOrEqual(1);
  });

  it("is fixed-positioned so it does not affect page layout", () => {
    const { container } = render(<ParticleBackground />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain("fixed");
  });

  it("has pointer-events-none so it does not block interactions", () => {
    const { container } = render(<ParticleBackground />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain("pointer-events-none");
  });

  it("sits behind content via a low z-index", () => {
    const { container } = render(<ParticleBackground />);
    const wrapper = container.firstChild as HTMLElement;
    // Decorative layer should have a low stacking context; allow either
    // inline-style z-index or a tailwind class.
    const hasLowZ =
      wrapper.style.zIndex === "1" ||
      wrapper.style.zIndex === "0" ||
      wrapper.className.includes("z-0") ||
      wrapper.className.includes("z-[1]");
    expect(hasLowZ).toBe(true);
  });
});
