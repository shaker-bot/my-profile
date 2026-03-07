import { test, expect } from "@playwright/test";

test.describe("Hobbies page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/hobbies");
  });

  test("renders the page title in the document", async ({ page }) => {
    await expect(page).toHaveTitle(/hobbies/i);
  });

  test("navbar renders on hobbies page", async ({ page }) => {
    await expect(page.getByRole("button", { name: "AM" })).toBeVisible();
  });

  test("navbar Hobbies link is highlighted as active", async ({ page }) => {
    const hobbiesLink = page.getByRole("link", { name: "Hobbies" });
    await expect(hobbiesLink).toBeVisible();
    await expect(hobbiesLink).toHaveClass(/text-blue-600/);
  });

  test("renders hobby category cards", async ({ page }) => {
    await expect(page.getByText("Video Games")).toBeVisible();
    await expect(page.getByText("TV Shows")).toBeVisible();
    await expect(page.getByText("Reading")).toBeVisible();
  });

  test("footer renders on hobbies page", async ({ page }) => {
    await expect(page.getByText("Let's Connect")).toBeVisible();
  });
});
