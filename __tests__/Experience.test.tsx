import { render, screen } from "@testing-library/react";
import Experience from "@/components/Experience";

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

describe("Experience", () => {
  beforeEach(() => {
    render(<Experience />);
  });

  it("renders the section heading", () => {
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
  });

  it("renders the experience section with correct id", () => {
    const section = document.getElementById("experience");
    expect(section).toBeInTheDocument();
  });

  it("renders Capital One experience", () => {
    const capitalOnes = screen.getAllByText("Capital One");
    expect(capitalOnes.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText(/McLean, VA, USA/)).toBeInTheDocument();
    expect(screen.getByText("09/2022 - 04/2025")).toBeInTheDocument();
    expect(screen.getByText("03/2019 - 07/2021")).toBeInTheDocument();
  });

  it("renders Capital One role", () => {
    const roles = screen.getAllByText("Senior Software Engineer");
    expect(roles.length).toBeGreaterThanOrEqual(2); // Capital One and Extend both have this role
  });

  it("renders Capital One achievements", () => {
    expect(
      screen.getByText(
        /Led architecting and implementation of high risk issue resolution/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Released controlled deployment acceleration feature/
      )
    ).toBeInTheDocument();
  });

  it("renders Capital One technologies as individual pills", () => {
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("FastAPI")).toBeInTheDocument();
    expect(screen.getByText("AWS Lambda")).toBeInTheDocument();
  });

  it("renders Extend experience", () => {
    expect(screen.getByText("Extend")).toBeInTheDocument();
    expect(screen.getByText(/USA, Remote/)).toBeInTheDocument();
    expect(screen.getByText("07/2021 - 07/2022")).toBeInTheDocument();
  });

  it("renders Extend achievements", () => {
    expect(
      screen.getByText(
        /Designed and Released Customer-Facing Portal/
      )
    ).toBeInTheDocument();
  });

  it("renders Cloudreach experience", () => {
    expect(screen.getByText("Cloudreach")).toBeInTheDocument();
    expect(screen.getByText(/Reston, VA, USA/)).toBeInTheDocument();
    expect(screen.getByText("06/2018 - 03/2019")).toBeInTheDocument();
  });

  it("renders Cloudreach role", () => {
    expect(screen.getByText("Cloud Systems Developer")).toBeInTheDocument();
  });

  it("renders Cloudreach achievements", () => {
    expect(
      screen.getByText(
        /Executed Cloud Infrastructure standups/
      )
    ).toBeInTheDocument();
  });

  it("does not render technologies section for Cloudreach (empty technologies)", () => {
    // Cloudreach has empty technologies; Capital One x2 + Extend = 3 entries with technologies
    const techLabels = screen.getAllByText("Technologies Used:");
    expect(techLabels).toHaveLength(3);
  });

  it("renders all four experiences (Capital One appears twice)", () => {
    const capitalOnes = screen.getAllByText("Capital One");
    expect(capitalOnes.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText("Extend")).toBeInTheDocument();
    expect(screen.getByText("Cloudreach")).toBeInTheDocument();
  });
});
