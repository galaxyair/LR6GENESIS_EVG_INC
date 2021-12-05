const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page/home');
const { LoginPage } = require('../page/login');
const { SignInPage } = require('../page/register');
const { chromium } = require('playwright');
const { saveVideo } = require('playwright-video');

test('test1', async ({ page }) => {
  const user = 'EVG INC'

  const homePage = new HomePage(page);
  await homePage.open();
  await homePage.clickLogin();
  
  const loginPage = new LoginPage(page);
  
  await loginPage.typeLogin(user);
  await loginPage.typePassword(user);
  await loginPage.clickLogin();
  
  await expect(homePage.usernameLabel).toContainText(user);
  await expect(page).toHaveURL(homePage.url);
});


test('test2', async ({ page }) => {
  
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await context.tracing.start({ screenshots: true, snapshots: true });
  const user = 'RandIntMustBE'
  
  const homePage = new HomePage(page);
  
  await homePage.open();

  await homePage.clickSignIn();

  const signInPage = new SignInPage(page);

  await signInPage.typeNewLogin(user);
  await signInPage.typeNewPassword(user);
  await signInPage.clickSignUp();

  await homePage.clickLogin();

  const loginPage = new LoginPage(page);
  
  await loginPage.typeLogin(user);
  await loginPage.typePassword(user);
  await loginPage.clickLogin();
  
  await context.tracing.stop({ path: 'trace.zip' });
  await expect(homePage.usernameLabel).toContainText(user);
  await expect(page).toHaveURL(homePage.url);
  await saveVideo(page, '/RECORD.mp4');
  await browser.close();
});


