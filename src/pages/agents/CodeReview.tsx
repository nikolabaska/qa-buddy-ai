import React from 'react';
import { AgentLayout } from '@/components/AgentLayout';

const CodeReview = () => {
  return (
    <AgentLayout 
      title="Automation Code Review"
      description="Checks scripts for hard-coded data, weak assertions, unstable locators, fixed waits and duplicated code."
      systemPrompt="You are a Test Automation Architect. Review the provided test script. Check for: 1) Hard-coded data, 2) Weak assertions (e.g., just checking if page contains text), 3) Unstable locators (e.g., absolute XPaths), 4) Fixed waits (Thread.sleep), 5) Code duplication. Provide the critique and suggested code improvements."
      examples={[
        {
          label: "Playwright Script",
          content: `test('Login Test', async ({ page }) => {
  await page.goto('https://myapp.com/login');
  await page.fill('#username', 'test_user_123');
  await page.fill('#password', 'Pass123!');
  await page.click('xpath=//div[2]/div[1]/button');
  await page.waitForTimeout(5000);
  const content = await page.textContent('.welcome-msg');
  expect(content).toContain('Welcome');
});`
        },
        {
          label: "Selenium Java",
          content: `public void testLogin() {
    driver.get("https://myapp.com/login");
    driver.findElement(By.id("user")).sendKeys("admin");
    driver.findElement(By.id("pass")).sendKeys("12345");
    Thread.sleep(3000);
    driver.findElement(By.xpath("/html/body/div[1]/div/div/button")).click();
    assertTrue(driver.getPageSource().contains("Dashboard"));
}`
        }
      ]}
    />
  );
};

export default CodeReview;
