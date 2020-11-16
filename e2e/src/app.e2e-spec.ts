import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe(`<${AppPage.HtmlTagComponent}>`, () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to principal url', async () => {
    await page.navigateTo();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
  });

  /* afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  }); */
});
