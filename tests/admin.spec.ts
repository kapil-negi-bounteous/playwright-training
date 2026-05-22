
import { expect, test } from '../fixtures/authFixture';

test.describe('OrangeHRM Admin flow', () => {
    test.beforeAll(async () => Promise.resolve().then(() => console.log('Running before each test in Admin flow')));{
      
    }

    test.afterAll(async () => Promise.resolve().then(() => console.log('Running after each test in Admin flow')));{
      
    }
  test('@smoke searches for an admin user', async ({ dashboardPage, adminPage, request }) => {
    await dashboardPage.expectLoaded();
    // await adminPage.goto();
    await adminPage.clickMenuTab('Admin');
    // const response = await request.get('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC');
    // expect(response.status()).toBe(200);
    // const responseBody = await response.json();
    // console.log('Response Body:', responseBody);
    await adminPage.searchUser('Admin');
    await adminPage.expectRecordsVisible();
  });

  test.skip('searches for ABC user', async ({ dashboardPage, adminPage }) => {
    await dashboardPage.expectLoaded();
    // await adminPage.goto();
    await adminPage.clickMenuTab('Admin');
    await adminPage.searchUser('ABC');
    await adminPage.expectRecordsVisible();
  });

  test.skip('@smoke searches for XYZ user', async ({ dashboardPage, adminPage }) => {
    await dashboardPage.expectLoaded();
    // await adminPage.goto();
    await adminPage.clickMenuTab('Admin');
    await adminPage.searchUser('XYZ');
    await adminPage.expectRecordsVisible();
  });
});
