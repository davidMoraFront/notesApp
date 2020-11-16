import { browser, by, element } from 'protractor';

export class MainLayoutPage {
  static HtmlTagComponent = 'app-main-layout';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-main-layout .top-bar h1')).getText() as Promise<
      string
    >;
  }
}
