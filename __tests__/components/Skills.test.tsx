import { render, screen } from "@testing-library/react";
import Skills from "@/components/Skills";

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

describe("Skills", () => {
  it("renders the Skills & Expertise heading", () => {
    render(<Skills />);
    expect(screen.getByText("Skills & Expertise")).toBeInTheDocument();
  });

  it("renders Programming Languages category", () => {
    render(<Skills />);
    expect(screen.getByText("Programming Languages")).toBeInTheDocument();
  });

  it("renders Cloud Platforms category", () => {
    render(<Skills />);
    expect(screen.getByText("Cloud Platforms")).toBeInTheDocument();
  });

  it("renders DevOps Tools category", () => {
    render(<Skills />);
    expect(screen.getByText("DevOps Tools")).toBeInTheDocument();
  });

  it("renders Developer Tools category", () => {
    render(<Skills />);
    expect(screen.getByText("Developer Tools")).toBeInTheDocument();
  });

  it("renders Databases category", () => {
    render(<Skills />);
    expect(screen.getByText("Databases")).toBeInTheDocument();
  });

  it("does NOT render a Soft Skills category", () => {
    render(<Skills />);
    expect(screen.queryByText("Soft Skills")).not.toBeInTheDocument();
  });

  it("renders individual programming language skills", () => {
    render(<Skills />);
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Golang")).toBeInTheDocument();
    expect(screen.getByText("Java")).toBeInTheDocument();
  });

  it("renders AWS as a cloud platform", () => {
    render(<Skills />);
    expect(screen.getByText("Amazon Web Services (AWS)")).toBeInTheDocument();
  });

  it("renders DevOps tools", () => {
    render(<Skills />);
    expect(screen.getByText("AWS CDK")).toBeInTheDocument();
    expect(screen.getByText("Terraform")).toBeInTheDocument();
  });

  it("renders proficiency labels", () => {
    render(<Skills />);
    const expertLabels = screen.getAllByText("Expert");
    expect(expertLabels.length).toBeGreaterThan(0);
    const advancedLabels = screen.getAllByText("Advanced");
    expect(advancedLabels.length).toBeGreaterThan(0);
  });

  it("renders animated progress bars for skills", () => {
    const { container } = render(<Skills />);
    // Each skill has a progress bar div with inline width style applied by framer-motion
    const progressBars = container.querySelectorAll(".rounded-full.bg-gradient-to-r");
    expect(progressBars.length).toBeGreaterThan(0);
  });
});
