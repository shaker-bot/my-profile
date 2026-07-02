import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // --- Navbar ---
  test("navbar renders the AM logo button", async ({ page }) => {
    await expect(page.getByRole("button", { name: "AM", exact: true })).toBeVisible();
  });

  test("navbar renders section links", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Experience" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Skills" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Education" })).toBeVisible();
  });

  test("navbar renders the Hobbies page link", async ({ page }) => {
    await expect(page.getByRole("link", { name: "Hobbies" })).toBeVisible();
  });

  test("navbar renders the dark mode toggle", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /toggle dark mode/i })
    ).toBeVisible();
  });

  // --- Hero ---
  test("hero renders the name heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Abhishek Mathews", level: 1 })
    ).toBeVisible();
  });

  test("hero renders the bio text", async ({ page }) => {
    await expect(
      page.getByText(/7\+ years of experience/i)
    ).toBeVisible();
  });

  test("hero renders the Download Resume link pointing to Vercel Blob", async ({
    page,
  }) => {
    const link = page.getByRole("link", { name: /download resume/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute(
      "href",
      /blob\.vercel-storage\.com/
    );
    await expect(link).toHaveAttribute("target", "_blank");
  });

  test("hero renders the View My Work button", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /view my work/i })
    ).toBeVisible();
  });

  test("hero renders email contact link", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: /abhishekd\.mathews@gmail\.com/i })
    ).toBeVisible();
  });

  test("hero renders LinkedIn link", async ({ page }) => {
    const link = page.getByRole("link", { name: /linkedin/i }).first();
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", /linkedin\.com/);
  });

  test("hero renders GitHub link", async ({ page }) => {
    const link = page.getByRole("link", { name: /github/i }).first();
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", /github\.com/);
  });

  test("hero renders the location", async ({ page }) => {
    await expect(page.getByText("McLean, VA", { exact: true })).toBeVisible();
  });

  // --- Experience ---
  test("experience section renders heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Work Experience" })
    ).toBeVisible();
  });

  test("experience section renders all companies", async ({ page }) => {
    await expect(page.getByText("Alarm.com", { exact: true })).toBeVisible();
    await expect(page.getByText("Capital One").first()).toBeVisible();
    await expect(page.getByText("Extend", { exact: true })).toBeVisible();
    await expect(page.getByText("Cloudreach")).toBeVisible();
  });

  test("experience section renders technology pills", async ({ page }) => {
    await expect(page.getByText("Python").first()).toBeVisible();
    await expect(page.getByText("FastAPI").first()).toBeVisible();
  });

  test("experience section renders tenure durations", async ({ page }) => {
    await expect(page.getByText("· 2 yrs 7 mo", { exact: true })).toBeVisible();
    await expect(page.getByText("· 1 yr", { exact: true })).toBeVisible();
    await expect(page.getByText("· 9 mo", { exact: true })).toBeVisible();
  });

  // --- Skills ---
  test("skills section renders heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /skills & expertise/i })
    ).toBeVisible();
  });

  test("skills section renders all category headings", async ({ page }) => {
    const skills = page.locator("#skills");
    await expect(skills.getByText("Programming Languages")).toBeVisible();
    await expect(skills.getByText("Cloud Platforms")).toBeVisible();
    await expect(skills.getByText("DevOps Tools")).toBeVisible();
    await expect(skills.getByText("Developer Tools", { exact: true })).toBeVisible();
    await expect(skills.getByText("Databases")).toBeVisible();
  });

  test("skills section renders skill pills", async ({ page }) => {
    const skills = page.locator("#skills");
    await expect(skills.getByText("TypeScript").first()).toBeVisible();
    await expect(skills.getByText("Golang")).toBeVisible();
    await expect(skills.getByText("Docker")).toBeVisible();
    await expect(skills.getByText("Kubernetes")).toBeVisible();
    await expect(skills.getByText("DynamoDB", { exact: true })).toBeVisible();
  });

  // --- Education ---
  test("education section renders heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Education" })
    ).toBeVisible();
  });

  test("education section renders both degrees", async ({ page }) => {
    await expect(page.getByText("MS in Computer Science")).toBeVisible();
    await expect(page.getByText("BS in Computer Science")).toBeVisible();
  });

  test("education section renders institutions", async ({ page }) => {
    await expect(
      page.getByText("Georgia Institute of Technology")
    ).toBeVisible();
    await expect(page.getByText("George Mason University")).toBeVisible();
  });

  test("education section renders certifications", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Certifications" })
    ).toBeVisible();
    await expect(
      page.getByText("Certified Solutions Architect Associate")
    ).toBeVisible();
    await expect(page.getByText("Certified SysOps Associate")).toBeVisible();
  });

  // --- Footer ---
  test("footer renders Let's Connect heading", async ({ page }) => {
    await expect(page.getByText("Let's Connect")).toBeVisible();
  });

  test("footer renders LinkedIn link", async ({ page }) => {
    const link = page.getByRole("link", { name: /linkedin profile/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute(
      "href",
      "https://linkedin.com/in/mathewsabhishek"
    );
  });

  test("footer renders GitHub link", async ({ page }) => {
    const link = page.getByRole("link", { name: /github profile/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute(
      "href",
      "https://github.com/shaker-bot"
    );
  });

  test("footer renders email link", async ({ page }) => {
    const link = page.getByRole("link", { name: /send email/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute(
      "href",
      "mailto:abhishekd.mathews@gmail.com"
    );
  });

  test("footer renders copyright with current year", async ({ page }) => {
    const year = new Date().getFullYear().toString();
    await expect(
      page.locator("footer").getByText(new RegExp(year))
    ).toBeVisible();
  });
});
