const{test,expect} =require('@playwright/test');


test('Uploading resume daily', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const username = 'nihalmunshi47@gmail.com';
    const passwordValue = 'Qbolu@849752';
    const loggedInUser = 'NIHAL MUNSHI';
    const post_upload_message='Resume has been successfully uploaded.';

    await page.goto('https://www.naukri.com/');

    await page.locator('#login_Layer').click();
    await page.locator('.login-layer .form .form-row input[type="text"]').fill(username);
    await page.locator('.form[name="login-form"] input[type="password"]').fill(passwordValue);
    await page.locator("div button[type='submit']").click();

    await expect(page.locator('.info__heading')).toHaveText(loggedInUser);
    await page.locator('.view-profile-wrapper').click();
    await page.locator("//a[text()='Update']").click();

    const resumePath = 'C:\\Users\\Admin\\Downloads\\Nihal_Munshi_Resume_SDET_2026.pdf';

    // Best approach for Naukri: upload using the actual file input
    await page.locator('#attachCV').setInputFiles(resumePath);

    // If the site triggers a native OS chooser instead of the hidden input:
    // const [fileChooser] = await Promise.all([
    //   page.waitForEvent('filechooser'),
    //   page.locator('.dummyUpload').click()
    // ]);
    // await fileChooser.setFiles(resumePath);

    await expect(page.locator('#attachCVMsgBox > div > div > div > p.msg')).toHaveText(post_upload_message);



});
