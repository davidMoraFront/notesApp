import { NoteDetailsPage } from './note-details.po';
import { browser } from 'protractor';
import { NoteCardPage } from './note-card.po';
import { NotesListPage } from './notes-list.po';

describe(`<${NoteCardPage.HtmlTagComponent}>`, () => {
  let page: NoteCardPage;
  let list: NotesListPage;
  let details: NoteDetailsPage;

  beforeEach(() => {
    page = new NoteCardPage();
    list = new NotesListPage();
    details = new NoteDetailsPage();
    browser.get('');
    list.addNote();
    list.navigateToAddNote();
    details.setTitleNote('Title note');
    details.setBodyNote('Body note');
    details.submitForm();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
  });

  it('should display title text', () => {
    list.navigateToNote('Title note');
    expect(details.getTitleNote().getAttribute('value')).toEqual('Title note');
  });

  it('should display body text', () => {
    list.navigateToNote('Title note');
    expect(details.getBodyNote().getAttribute('value')).toEqual('Body note');
  });

  it('should navigate to edit card selection', () => {
    page.editNote();
    expect(browser.getCurrentUrl()).toContain('0');
  });

  it('should delete a note', () => {
    page.deleteNote();
    expect(list.navigateToNote('Title note')).toBeUndefined();
  });
});
