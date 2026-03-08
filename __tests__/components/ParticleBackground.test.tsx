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
  };
});

describe("ParticleBackground", () => {
  it("renders without crashing", () => {
    const { container } = render(<ParticleBackground />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders 15 particle elements", () => {
    const { container } = render(<ParticleBackground />);
    const particles = container.querySelectorAll(".rounded-full");
    expect(particles.length).toBe(15);
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

  it("has z-0 so it stays behind page content", () => {
    const { container } = render(<ParticleBackground />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain("z-0");
  });
});
