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
    expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Golang").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Java").length).toBeGreaterThan(0);
  });

  it("renders AWS as a cloud platform", () => {
    render(<Skills />);
    expect(screen.getAllByText("Amazon Web Services (AWS)").length).toBeGreaterThan(0);
  });

  it("renders DevOps tools", () => {
    render(<Skills />);
    expect(screen.getAllByText("AWS CDK").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Terraform").length).toBeGreaterThan(0);
  });

  it("renders skills as pill badges, not progress bars", () => {
    render(<Skills />);
    expect(screen.getAllByText("Python").length).toBeGreaterThan(0);
    expect(screen.queryByText("Expert")).not.toBeInTheDocument();
    expect(screen.queryByText("Advanced")).not.toBeInTheDocument();
  });

  it("renders Docker and Kubernetes as separate pills", () => {
    render(<Skills />);
    expect(screen.getAllByText("Docker").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Kubernetes").length).toBeGreaterThan(0);
  });

  it("renders developer tools pills", () => {
    render(<Skills />);
    expect(screen.getAllByText("GitHub").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Cursor").length).toBeGreaterThan(0);
    expect(screen.getAllByText("GitHub Copilot").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Claude Code").length).toBeGreaterThan(0);
  });
});
