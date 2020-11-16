import { browser, by, element } from 'protractor';

export class NoteDetailsPage {
  static HtmlTagComponent = 'app-note-details';

  getTitleNote() {
    return element(by.css('.form-container input[name="title"]'));
  }

  getBodyNote() {
    return element(by.css('.form-container textarea[name="body"]'));
  }

  setTitleNote(title: string): Promise<void> {
    return element(by.css('.form-container input[name="title"]')).sendKeys(
      title
    ) as Promise<void>;
  }

  setBodyNote(body: string): Promise<void> {
    return element(by.css('.form-container textarea[name="body"]')).sendKeys(
      body
    ) as Promise<void>;
  }

  saveNote() {
    return element(by.css('.form-container button.save')).click();
  }

  cancelNote() {
    return element(by.css('.form-container button.is-light')).click();
  }

  submitForm() {
    return element(by.css('.form-container form')).submit();
  }
}
