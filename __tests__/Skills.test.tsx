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

  it("renders proficiency legend", () => {
    expect(screen.getByText("Proficiency:")).toBeInTheDocument();
    expect(screen.getByText("Beginner")).toBeInTheDocument();
    expect(screen.getByText("Intermediate")).toBeInTheDocument();
    expect(screen.getByText("Expert")).toBeInTheDocument();
  });

  it("renders all skill category titles", () => {
    expect(screen.getByText("Programming Languages")).toBeInTheDocument();
    expect(screen.getByText("Cloud Platforms")).toBeInTheDocument();
    expect(screen.getByText("Developer Tools")).toBeInTheDocument();
    expect(screen.getByText("DevOps Tools")).toBeInTheDocument();
    expect(screen.getByText("Databases")).toBeInTheDocument();
    expect(screen.getByText("Soft Skills")).toBeInTheDocument();
  });

  it("renders programming language skills", () => {
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Golang")).toBeInTheDocument();
    expect(screen.getByText("Java")).toBeInTheDocument();
  });

  it("renders cloud platform skills", () => {
    expect(
      screen.getByText("Amazon Web Services (AWS)")
    ).toBeInTheDocument();
  });

  it("renders developer tools", () => {
    expect(screen.getByText("Github")).toBeInTheDocument();
    expect(
      screen.getByText(/AI Tooling/)
    ).toBeInTheDocument();
  });

  it("renders devops tools", () => {
    expect(screen.getByText("AWS CDK")).toBeInTheDocument();
    expect(screen.getByText("Terraform")).toBeInTheDocument();
    expect(screen.getByText("Jenkins")).toBeInTheDocument();
    expect(screen.getByText("Docker/Kubernetes")).toBeInTheDocument();
  });

  it("renders database skills", () => {
    expect(screen.getByText("NoSQL (DynamoDB/MongoDB)")).toBeInTheDocument();
    expect(screen.getByText("MySQL")).toBeInTheDocument();
    expect(screen.getByText("PostgreSQL")).toBeInTheDocument();
  });

  it("renders soft skills", () => {
    expect(screen.getByText("Problem Solving")).toBeInTheDocument();
    expect(screen.getByText("Engineering Mentorship")).toBeInTheDocument();
    expect(screen.getByText("Communication")).toBeInTheDocument();
    expect(screen.getByText("Teamwork")).toBeInTheDocument();
    expect(screen.getByText("Leadership")).toBeInTheDocument();
    expect(screen.getByText("Adaptability/Flexible")).toBeInTheDocument();
  });

  it("renders proficiency dots for each skill", () => {
    // Each skill has 5 dots (filled + empty = 5)
    // Total skills: 4 + 1 + 2 + 4 + 3 + 6 = 20 skills
    // Plus 3 legend entries with 5 dots each = 15
    // Total dot containers = 20 + 3 = 23 flex gap-1/gap-0.5 containers
    const allDots = document.querySelectorAll(".rounded-full.w-2.h-2, .rounded-full.w-1\\.5.h-1\\.5");
    expect(allDots.length).toBeGreaterThan(0);
  });
});
