import { NotesListPage } from './notes-list.po';
import { browser, element, by } from 'protractor';
import { NoteDetailsPage } from './note-details.po';

describe(`<${NoteDetailsPage.HtmlTagComponent}>`, () => {
  let page: NoteDetailsPage;
  let list: NotesListPage;

  describe('new note', () => {
    beforeEach(() => {
      browser.get('');
      list = new NotesListPage();
      page = new NoteDetailsPage();
      list.addNote();
      list.navigateToAddNote();
    });

    it('should type in a title', () => {
      let titleNote = page.getTitleNote();
      titleNote.sendKeys('Title card');
      expect(titleNote.getAttribute('value')).toEqual('Title card');
    });

    it('should type in a body', () => {
      let bodyNote = page.getBodyNote();
      bodyNote.sendKeys('Body card');
      expect(bodyNote.getAttribute('value')).toEqual('Body card');
    });

    it('should click the save button', async () => {
      let titleNote = page.getTitleNote();
      titleNote.sendKeys('Title card');
      let bodyNote = page.getBodyNote();
      bodyNote.sendKeys('Body card');
      page.saveNote();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);

      let navigateTitleNote = element
        .all(by.css('.notes-list .card'))
        .each((element, index) =>
          index === 0 ? element.$('.card-header-title').getText() : ''
        );
      list.navigateToNote(await navigateTitleNote);
      expect(browser.getCurrentUrl()).toContain('0');
    });

    it('should click the cancel button', () => {
      let titleNote = page.getTitleNote();
      titleNote.sendKeys('Title card');
      let bodyNote = page.getBodyNote();
      bodyNote.sendKeys('Body card');
      page.cancelNote();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);

      let notFoundTitleNote = element
        .all(by.css('.notes-list .card'))
        .each((element, index) =>
          index === 0 ? element.$('.card-header-title').getText() : ''
        );
      expect(notFoundTitleNote).toBeNull();
    });
  });

  describe('update note', () => {
    beforeEach(() => {
      browser.get('');
      list = new NotesListPage();
      page = new NoteDetailsPage();
      list.addNote();
      list.navigateToAddNote();
      page.setTitleNote('Title note');
      page.setBodyNote('Body note');
      page.submitForm();
      list.navigateToNote('Title note');
      expect(browser.getCurrentUrl()).toContain('0');
    });

    it('should type in a title', () => {
      let titleNote = page.getTitleNote();
      titleNote.clear();
      titleNote.sendKeys('Update title note');
      expect(titleNote.getAttribute('value')).toEqual('Update title note');
    });

    it('should type in a body', () => {
      let bodyNote = page.getBodyNote();
      bodyNote.clear();
      bodyNote.sendKeys('Update body note');
      expect(bodyNote.getAttribute('value')).toEqual('Update body note');
    });

    it('should click the save button', async () => {
      let titleNote = page.getTitleNote();
      titleNote.clear();
      titleNote.sendKeys('Update title note');
      let bodyNote = page.getBodyNote();
      bodyNote.clear();
      bodyNote.sendKeys('Update body note');
      page.saveNote();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);

      let updatetitleNote = element
        .all(by.css('.notes-list .card'))
        .each((element, index) =>
          index === 0 ? element.$('.card-header-title').getText() : ''
        );
      list.navigateToNote(await updatetitleNote);
      expect(browser.getCurrentUrl()).toContain('0');
    });

    it('should click the cancel button', async () => {
      let titleNote = page.getTitleNote();
      titleNote.clear();
      titleNote.sendKeys('Update title note');
      let bodyNote = page.getBodyNote();
      bodyNote.clear();
      bodyNote.sendKeys('Update body note');
      page.cancelNote();
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);

      let updatetitleNote = element
        .all(by.css('.notes-list .card'))
        .each((element, index) =>
          index === 0 ? element.$('.card-header-title').getText() : ''
        );
      list.navigateToNote(await updatetitleNote);
      expect(browser.getCurrentUrl()).toContain('0');
    });
  });
});
