// e2e-tests/pokedex.test.js:

/* eslint-disable no-undef */
// Disables 'no-undef' warnings for this file so ESLint won't flag Node/Playwright globals (like 'require').

// Import core testing utilities from the Playwright test runner.
// - 'test': Defines individual test cases.
// - 'describe': Groups related tests together into a test suite.
// - 'expect': Provides assertion methods to verify page state/elements.
const { test, describe, expect } = require("@playwright/test");
// Group all end-to-end tests for the Pokédex feature under a single test suite named "Pokedex".
describe("Pokedex", () => {
  // Test Case 1: Verifies that the home/landing page loads correctly and renders key initial content.
  // The 'async ({ page })' fixture automatically opens an isolated browser tab ('page') for this test.
  test("front page can be opened", async ({ page }) => {
    // Navigate to the root URL (''). Playwright prepends the 'baseURL' ('http://localhost:8080') defined in playwright.config.js.
    await page.goto("");
    // Find the element containing the text "ivysaur" and assert that it is visible on the page.
    await expect(page.getByText("ivysaur")).toBeVisible();
    // Assert that the copyright footer text is also rendered and visible in the browser viewport.
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo."
      )
    ).toBeVisible();
  });

  // Test Case 2: Verifies user interaction and navigation from the home view to a specific Pokémon's detail view.
  test("one can navigate from the front page to the page of a particular Pokemon, e.g. ivysaur", async ({
    page
  }) => {
    // Open a fresh browser instance to the home page ('http://localhost:8080/').
    await page.goto("");
    // Locate the element/card displaying 'ivysaur' and trigger a click event on it.
    await page.getByText("ivysaur").click();
    // After navigation completes, assert that the detail page displays the ability string 'chlorophyll'.
    await expect(page.getByText("chlorophyll")).toBeVisible();
  });
});
