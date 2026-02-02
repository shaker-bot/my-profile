import { render, screen } from "@testing-library/react";
import Education from "@/components/Education";

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

describe("Education", () => {
  beforeEach(() => {
    render(<Education />);
  });

  it("renders the Education section heading", () => {
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  it("renders the Certifications section heading", () => {
    expect(screen.getByText("Certifications")).toBeInTheDocument();
  });

  it("renders the education section with correct id", () => {
    const section = document.getElementById("education");
    expect(section).toBeInTheDocument();
  });

  it("renders Georgia Tech degree", () => {
    expect(screen.getByText("MS in Computer Science")).toBeInTheDocument();
    expect(
      screen.getByText("Georgia Institute of Technology")
    ).toBeInTheDocument();
    expect(screen.getByText("Atlanta, GA, USA")).toBeInTheDocument();
    expect(screen.getByText("GPA: 3.71")).toBeInTheDocument();
    expect(screen.getByText("08/2022")).toBeInTheDocument();
  });

  it("renders George Mason degree", () => {
    expect(screen.getByText("BS in Computer Science")).toBeInTheDocument();
    expect(screen.getByText("George Mason University")).toBeInTheDocument();
    expect(screen.getByText("Fairfax, VA, USA")).toBeInTheDocument();
    expect(screen.getByText("GPA: 3.42")).toBeInTheDocument();
    expect(screen.getByText("08/2013 - 05/2017")).toBeInTheDocument();
  });

  it("renders AWS Solutions Architect certification", () => {
    expect(
      screen.getByText("Certified Solutions Architect Associate")
    ).toBeInTheDocument();
  });

  it("renders AWS SysOps certification", () => {
    expect(
      screen.getByText("Certified SysOps Associate")
    ).toBeInTheDocument();
  });

  it("renders AWS as issuer for both certifications", () => {
    const awsIssuers = screen.getAllByText("AWS");
    expect(awsIssuers).toHaveLength(2);
  });
});
