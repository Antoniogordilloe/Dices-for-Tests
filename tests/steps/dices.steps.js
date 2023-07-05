const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')

const url = 'http://127.0.0.1:5500/src/dices.html'

async function buttonClick (buttonId) {
  await page.click(`[data-testid="${buttonId}"]`, { force: true })
}

Given('a user opens the app', async () => {
  await page.goto(url)
})


Then('the display should show the following value: {string}', async (string) => {
  const display = await page.locator('data-testid=display').innerText()
  expect(display).toBe(string)
})

Then('the display should show a value between: {string} and {string}', async (string1, string2) => {
  const display = await page.locator('data-testid=display').innerText();
  const value = parseInt(display); // Parse the display value to an integer

  const lowerLimit = parseInt(string1);
  const upperLimit = parseInt(string2);

  expect(value).toBeGreaterThanOrEqual(lowerLimit);
  expect(value).toBeLessThanOrEqual(upperLimit);
})

Then('the display should NOT show the following value: {string}', async (string) => {
  const display = await page.locator('data-testid=display').innerText()
  expect(display).not.toBe(string)
})


When('the user presses the {string} button', async (string) => {
  await buttonClick(string)
})