import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("clicking Hobbies link navigates to /hobbies", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Hobbies" }).click();
    await expect(page).toHaveURL(/\/hobbies/);
    await expect(page.getByText("Video Games")).toBeVisible();
  });

  test("clicking AM logo on hobbies page scrolls to top (stays on page)", async ({
    page,
  }) => {
    await page.goto("/hobbies");
    await page.getByRole("button", { name: "AM", exact: true }).click();
    // AM button calls scrollTo on hobbies page — URL stays at /hobbies
    await expect(page).toHaveURL(/\/hobbies/);
  });

  test("View My Work button scrolls to experience section", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /view my work/i }).click();
    // After scroll, the experience section should be in the viewport
    const section = page.locator("#experience");
    await expect(section).toBeInViewport({ ratio: 0.1 });
  });

  test("navbar Experience button scrolls to experience section", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Experience" }).click();
    await expect(page.locator("#experience")).toBeInViewport({ ratio: 0.1 });
  });

  test("navbar Skills button scrolls to skills section", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Skills" }).click();
    await expect(page.locator("#skills")).toBeInViewport({ ratio: 0.1 });
  });

  test("navbar Education button scrolls to education section", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Education" }).click();
    await expect(page.locator("#education")).toBeInViewport({ ratio: 0.1 });
  });
});
