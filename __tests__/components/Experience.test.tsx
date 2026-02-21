import { render, screen } from "@testing-library/react";
import Experience from "@/components/Experience";

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
      section: makeMotion("section"),
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

describe("Experience", () => {
  it("renders the Work Experience heading", () => {
    render(<Experience />);
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
  });

  it("renders all four companies", () => {
    render(<Experience />);
    const capitalOneEntries = screen.getAllByText("Capital One");
    expect(capitalOneEntries).toHaveLength(2);
    expect(screen.getByText("Extend")).toBeInTheDocument();
    expect(screen.getByText("Cloudreach")).toBeInTheDocument();
  });

  it("renders the Capital One Platform & Developer Tools period", () => {
    render(<Experience />);
    expect(screen.getByText("09/2022 - 04/2025")).toBeInTheDocument();
  });

  it("renders the Capital One Cloud Cost & Compliance period", () => {
    render(<Experience />);
    expect(screen.getByText("03/2019 - 07/2021")).toBeInTheDocument();
  });

  it("renders the Platform & Developer Tools badge on Capital One", () => {
    render(<Experience />);
    expect(screen.getByText("Platform & Developer Tools")).toBeInTheDocument();
  });

  it("renders the Cloud Cost & Compliance badge on Capital One", () => {
    render(<Experience />);
    expect(screen.getByText("Cloud Cost & Compliance")).toBeInTheDocument();
  });

  it("renders the Consumer Application badge on Extend", () => {
    render(<Experience />);
    expect(screen.getByText("Consumer Application")).toBeInTheDocument();
  });

  it("renders the Consulting badge on Cloudreach", () => {
    render(<Experience />);
    expect(screen.getByText("Consulting")).toBeInTheDocument();
  });

  it("renders key Capital One Platform achievements", () => {
    render(<Experience />);
    expect(screen.getByText(/just-in-time AWS access/i)).toBeInTheDocument();
    expect(screen.getByText(/deployment time by 40%/i)).toBeInTheDocument();
  });

  it("renders key Capital One Cloud Cost achievements", () => {
    render(<Experience />);
    expect(screen.getByText(/EC2\/ECS off-hours solution/i)).toBeInTheDocument();
    const custodianMatches = screen.getAllByText(/Cloud Custodian policies/i);
    expect(custodianMatches.length).toBeGreaterThanOrEqual(1);
  });

  it("renders Extend achievements", () => {
    render(<Experience />);
    expect(screen.getByText(/Customer-Facing Portal/i)).toBeInTheDocument();
  });

  it("renders Cloudreach achievements", () => {
    render(<Experience />);
    expect(screen.getByText(/Cloud Infrastructure standups/i)).toBeInTheDocument();
  });

  it("renders Technologies Used for entries that have them", () => {
    render(<Experience />);
    const techLabels = screen.getAllByText("Technologies Used:");
    expect(techLabels.length).toBeGreaterThan(0);
  });
});
