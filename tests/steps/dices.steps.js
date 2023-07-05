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

Then('{int} dices should appear on screen', async (number) => {
  const diceCount = await page.locator('[data-testid="display"]').count();

  expect(diceCount).toBe(number);
})

Then('the display should show a value between: {string} and {string}', async (string1, string2) => {
  const display = await page.locator('data-testid=display').innerText();
  const value = parseInt(display); 
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


When('the user presses the {string} button {int} times', async (buttonName, times) => {
  await buttonClickMultipleTimes(buttonName, times);
})

const buttonClickMultipleTimes = async (buttonName, times) => {
  for (let i = 0; i < times; i++) {
    await buttonClick(buttonName);
  }
};

Then('the {string} button should be disabled', async (string) => {
  const locator = page.locator(`[data-testid="${string}"]`)
  await expect(locator).toBeDisabled()
})
