import { render, screen } from "@testing-library/react";
import Education from "@/components/Education";

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

describe("Education", () => {
  it("renders the Education heading", () => {
    render(<Education />);
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  it("renders the Certifications heading", () => {
    render(<Education />);
    expect(screen.getByText("Certifications")).toBeInTheDocument();
  });

  it("renders the MS in Computer Science degree", () => {
    render(<Education />);
    expect(screen.getByText("MS in Computer Science")).toBeInTheDocument();
  });

  it("renders the BS in Computer Science degree", () => {
    render(<Education />);
    expect(screen.getByText("BS in Computer Science")).toBeInTheDocument();
  });

  it("renders Georgia Institute of Technology", () => {
    render(<Education />);
    expect(screen.getByText("Georgia Institute of Technology")).toBeInTheDocument();
  });

  it("renders George Mason University", () => {
    render(<Education />);
    expect(screen.getByText("George Mason University")).toBeInTheDocument();
  });

  it("renders the MS date range including the start date", () => {
    render(<Education />);
    expect(screen.getByText("08/2017 - 08/2022")).toBeInTheDocument();
  });

  it("renders the BS date range", () => {
    render(<Education />);
    expect(screen.getByText("08/2013 - 05/2017")).toBeInTheDocument();
  });

  it("renders MS GPA", () => {
    render(<Education />);
    expect(screen.getByText("GPA: 3.71")).toBeInTheDocument();
  });

  it("renders BS GPA", () => {
    render(<Education />);
    expect(screen.getByText("GPA: 3.42")).toBeInTheDocument();
  });

  it("renders both AWS certifications", () => {
    render(<Education />);
    expect(screen.getByText("Certified Solutions Architect Associate")).toBeInTheDocument();
    expect(screen.getByText("Certified SysOps Associate")).toBeInTheDocument();
  });

  it("renders the AWS issuer label for certifications", () => {
    render(<Education />);
    const awsLabels = screen.getAllByText("AWS");
    expect(awsLabels).toHaveLength(2);
  });
});
