import { browser } from 'protractor';
import { NotesListPage } from './notes-list.po';
import { NoteDetailsPage } from './note-details.po';

describe(`<${NotesListPage.HtmlTagComponent}>`, () => {
  let page: NotesListPage;
  let details: NoteDetailsPage;

  beforeEach(() => {
    page = new NotesListPage();
    browser.get('');
  });

  it('should add new note', () => {
    page.addNote();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'new');
  });

  it('should filter notes', () => {
    details = new NoteDetailsPage();
    page.addNote();
    details.setTitleNote('Title note');
    details.setBodyNote('Body note');
    details.submitForm();
    page.addNote();
    details.setTitleNote('Other title note ');
    details.setBodyNote('Other body note 2');
    details.submitForm();
    expect(page.filterNotes('Other')).toBe(1);
  });
});
