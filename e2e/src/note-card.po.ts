import { browser, by, element } from 'protractor';

export class NoteCardPage {
  static HtmlTagComponent = 'app-note-card';

  editNote() {
    return element(by.css('.card a')).click();
  }

  deleteNote() {
    return element(by.css('.card-header-icon')).click();
  }
}
