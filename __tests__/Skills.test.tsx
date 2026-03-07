import { render, screen } from "@testing-library/react";
import Skills from "@/components/Skills";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {
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
      return <div {...domProps}>{children}</div>;
    },
  },
}));

describe("Skills", () => {
  beforeEach(() => {
    render(<Skills />);
  });

  it("renders the section heading", () => {
    expect(screen.getByText("Skills & Expertise")).toBeInTheDocument();
  });

  it("renders the skills section with correct id", () => {
    const section = document.getElementById("skills");
    expect(section).toBeInTheDocument();
  });

  it("renders all skill category titles", () => {
    expect(screen.getByText("Programming Languages")).toBeInTheDocument();
    expect(screen.getByText("Cloud Platforms")).toBeInTheDocument();
    expect(screen.getByText("Developer Tools")).toBeInTheDocument();
    expect(screen.getByText("DevOps Tools")).toBeInTheDocument();
    expect(screen.getByText("Databases")).toBeInTheDocument();
  });

  it("does not render a Soft Skills category", () => {
    expect(screen.queryByText("Soft Skills")).not.toBeInTheDocument();
  });

  it("renders programming language skills as pills", () => {
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Golang")).toBeInTheDocument();
    expect(screen.getByText("Java")).toBeInTheDocument();
  });

  it("renders cloud platform skills", () => {
    expect(screen.getByText("Amazon Web Services (AWS)")).toBeInTheDocument();
  });

  it("renders developer tools as individual pills", () => {
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("Cursor")).toBeInTheDocument();
    expect(screen.getByText("GitHub Copilot")).toBeInTheDocument();
    expect(screen.getByText("Claude Code")).toBeInTheDocument();
  });

  it("renders devops tools as individual pills", () => {
    expect(screen.getByText("AWS CDK")).toBeInTheDocument();
    expect(screen.getByText("Terraform")).toBeInTheDocument();
    expect(screen.getByText("Jenkins")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
    expect(screen.getByText("Kubernetes")).toBeInTheDocument();
  });

  it("renders database skills as individual pills", () => {
    expect(screen.getByText("DynamoDB")).toBeInTheDocument();
    expect(screen.getByText("MongoDB")).toBeInTheDocument();
    expect(screen.getByText("MySQL")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
  });

  it("renders WIP tag on the section heading", () => {
    expect(screen.getByText("WIP")).toBeInTheDocument();
  });

  it("does not render proficiency labels", () => {
    expect(screen.queryByText("Expert")).not.toBeInTheDocument();
    expect(screen.queryByText("Advanced")).not.toBeInTheDocument();
    expect(screen.queryByText("Beginner")).not.toBeInTheDocument();
  });
});
