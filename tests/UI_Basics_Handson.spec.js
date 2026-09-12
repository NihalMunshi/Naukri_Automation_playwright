const {test, expect} = require('@playwright/test');

test('UI Basics Hands-on Test', async ({ browser }) => {
  // Navigate to the application

  const context= await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  const title =await page.title();
  console.log("Title of the page is: "+title);
   //await page.pause();

  
   const username = "test.user1@example.com";
   const passwordValue = 'Test@1234';


   await page.locator('#userEmail').fill(username);
   await page.locator('#userPassword').fill(passwordValue);

   await page.locator('#login').click();

   await page.waitForLoadState('networkidle');

   await page .locator("//div[@class='card-body']/h5/b[text()='ZARA COAT 3']/parent::h5/following-sibling::button[text()=' Add To Cart']").click();
   console.log("Product added to cart successfully");


   //await page.pause();
   await page.locator("[routerlink*='cart']").click();

   await page.locator("div li").first().waitFor();
   const bool =await page.locator("h3:has-text('ZARA COAT 3')").isVisible();

   expect(bool).toBeTruthy();

   await page.locator("text=checkout").click();
   
   await page .locator(".input txt").fill("234");
   await page.locator("")








});
