import { render, screen, fireEvent, act } from "@testing-library/react";
import BackToTop from "@/components/BackToTop";

jest.mock("framer-motion", () => {
  const React = require("react");
  const makeMotion = (tag: string) =>
    React.forwardRef(({ children, ...props }: any, ref: any) => {
      const { initial, animate, exit, transition, viewport, whileHover, whileTap, ...rest } = props;
      return React.createElement(tag, { ...rest, ref }, children);
    });
  return {
    motion: {
      button: makeMotion("button"),
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

const setScrollY = (value: number) => {
  Object.defineProperty(window, "scrollY", { value, writable: true });
};

describe("BackToTop", () => {
  beforeEach(() => {
    (window.scrollTo as jest.Mock).mockClear();
    setScrollY(0);
  });

  it("is hidden before scrolling", () => {
    render(<BackToTop />);
    expect(
      screen.queryByRole("button", { name: /scroll back to top/i })
    ).not.toBeInTheDocument();
  });

  it("appears after scrolling most of a viewport down", () => {
    render(<BackToTop />);
    act(() => {
      setScrollY(window.innerHeight * 2);
      fireEvent.scroll(window);
    });
    expect(
      screen.getByRole("button", { name: /scroll back to top/i })
    ).toBeInTheDocument();
  });

  it("hides again when scrolled back near the top", () => {
    render(<BackToTop />);
    act(() => {
      setScrollY(window.innerHeight * 2);
      fireEvent.scroll(window);
    });
    act(() => {
      setScrollY(0);
      fireEvent.scroll(window);
    });
    expect(
      screen.queryByRole("button", { name: /scroll back to top/i })
    ).not.toBeInTheDocument();
  });

  it("scrolls smoothly to the top when clicked", () => {
    render(<BackToTop />);
    act(() => {
      setScrollY(window.innerHeight * 2);
      fireEvent.scroll(window);
    });
    fireEvent.click(screen.getByRole("button", { name: /scroll back to top/i }));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("keeps its decorative icon hidden from assistive tech", () => {
    const { container } = render(<BackToTop />);
    act(() => {
      setScrollY(window.innerHeight * 2);
      fireEvent.scroll(window);
    });
    expect(container.querySelector("svg[aria-hidden='true']")).toBeInTheDocument();
  });
});
