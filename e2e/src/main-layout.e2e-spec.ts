import { MainLayoutPage } from './main-layout.po';

describe(`<${MainLayoutPage.HtmlTagComponent}>`, () => {
  let page: MainLayoutPage;

  beforeEach(() => {
    page = new MainLayoutPage();
  });

  it('should display title app', async () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('notesApp');
  });
});
