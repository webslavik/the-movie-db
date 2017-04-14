import { CodeAngular2Page } from './app.po';

describe('code-angular2 App', () => {
  let page: CodeAngular2Page;

  beforeEach(() => {
    page = new CodeAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
