import { render, screen, fireEvent } from "@testing-library/react";
import Hobbies from "@/components/Hobbies";

jest.mock("framer-motion", () => {
  const React = require("react");
  const makeMotion = (tag: string) =>
    React.forwardRef(({ children, ...props }: any, ref: any) => {
      const { initial, animate, exit, transition, variants, custom, viewport, whileHover, whileTap, ...rest } = props;
      return React.createElement(tag, { ...rest, ref }, children);
    });
  return {
    motion: {
      div: makeMotion("div"),
      button: makeMotion("button"),
      section: makeMotion("section"),
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

describe("Hobbies – grid view", () => {
  it("renders the section heading", () => {
    render(<Hobbies />);
    expect(screen.getByText("Beyond the Code")).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<Hobbies />);
    expect(
      screen.getByText(/A few things I enjoy when I'm not in front of a terminal/i)
    ).toBeInTheDocument();
  });

  it("renders all hobby cards", () => {
    render(<Hobbies />);
    expect(screen.getByText("Video Games")).toBeInTheDocument();
    expect(screen.getByText("TV Shows")).toBeInTheDocument();
    expect(screen.getByText("Reading")).toBeInTheDocument();
    expect(screen.getByText("Music")).toBeInTheDocument();
    expect(screen.getByText("Side Projects")).toBeInTheDocument();
  });

  it("does not render removed hobbies", () => {
    render(<Hobbies />);
    expect(screen.queryByText("Hiking & Outdoors")).not.toBeInTheDocument();
    expect(screen.queryByText("Photography")).not.toBeInTheDocument();
    expect(screen.queryByText("Travel")).not.toBeInTheDocument();
  });

  it("renders a tap prompt on each card", () => {
    render(<Hobbies />);
    const prompts = screen.getAllByText(/Read More/i);
    expect(prompts).toHaveLength(5);
  });
});

describe("Hobbies – detail view", () => {
  it("opens the detail view when a hobby card is clicked", () => {
    render(<Hobbies />);
    fireEvent.click(screen.getByRole("button", { name: /Video Games/i }));
    // breadcrumb and back button should appear
    expect(screen.getByRole("button", { name: /Back to all hobbies/i })).toBeInTheDocument();
    expect(screen.getByText("All Hobbies")).toBeInTheDocument();
    // hobby name appears as breadcrumb segment and as detail heading
    expect(screen.getAllByText("Video Games").length).toBeGreaterThanOrEqual(1);
  });

  it("shows the item list for the selected hobby", () => {
    render(<Hobbies />);
    fireEvent.click(screen.getByRole("button", { name: /TV Shows/i }));
    expect(screen.getAllByText("Watching").length).toBeGreaterThan(0);
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("Law & Order: SVU")).toBeInTheDocument();
  });

  it("hides the grid cards when a detail is open", () => {
    render(<Hobbies />);
    fireEvent.click(screen.getByRole("button", { name: /Reading/i }));
    // Other hobby titles should not be in the document
    expect(screen.queryByText("Video Games")).not.toBeInTheDocument();
    expect(screen.queryByText("TV Shows")).not.toBeInTheDocument();
    expect(screen.queryByText("Music")).not.toBeInTheDocument();
    expect(screen.queryByText("Side Projects")).not.toBeInTheDocument();
  });

  it("navigates back to the grid when the back button is clicked", () => {
    render(<Hobbies />);
    fireEvent.click(screen.getByRole("button", { name: /Video Games/i }));
    expect(screen.queryByText("TV Shows")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Back to all hobbies/i }));
    // Grid should be restored
    expect(screen.getByText("Video Games")).toBeInTheDocument();
    expect(screen.getByText("TV Shows")).toBeInTheDocument();
    expect(screen.queryByText("All Hobbies")).not.toBeInTheDocument();
  });

  it("shows numbered rows in the detail item list", () => {
    render(<Hobbies />);
    fireEvent.click(screen.getByRole("button", { name: /Side Projects/i }));
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
  });
});
