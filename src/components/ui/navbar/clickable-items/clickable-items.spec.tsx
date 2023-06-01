import { usePathname } from "next/navigation";
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { ClickableLinks } from "./index";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn().mockReturnValue("/contact"),
}));

describe("<ClickableLink />", () => {
  it("should render icon when link is same as current path", () => {
    render(
      <ClickableLinks
        linkName="contact"
        href="/contact"
        fontAwsomeKey="phone"
      />
    );

    expect(screen.getByText("contact")).toBeInTheDocument();
    expect(screen.getByTestId("active-icon")).toBeInTheDocument();
  });

  it("should NOT render icon when link is same as current path", () => {
    render(<ClickableLinks linkName="home" href="/" fontAwsomeKey="phone" />);

    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.queryByTestId("active-icon")).not.toBeInTheDocument();
  });
});
