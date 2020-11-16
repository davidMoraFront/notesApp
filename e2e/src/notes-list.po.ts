import { browser, by, element, ElementFinder, $ } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class NotesListPage {
  static HtmlTagComponent = 'app-notes-list';

  navigateToAddNote(): Promise<unknown> {
    return browser.get(browser.baseUrl + 'new') as Promise<unknown>;
  }

  addNote(): Promise<void> {
    return element(by.css('.main-container button')).click() as Promise<void>;
  }

  navigateToNote(title: string) {
    element
      .all(by.css('.notes-list .card'))
      .each(async (element, index) =>
        (await element.$('.card-header-title').getText()) === title
          ? element.$('a').click()
          : ''
      );
  }

  filterNotes(text: string) {
    element(by.css('.control input')).sendKeys(text);
    browser.sleep(1000);
    return element.all(by.css('.notes-list .card')).count();
  }
}
