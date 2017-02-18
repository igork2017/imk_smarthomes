import { HomesPage } from './app.po';

describe('homes App', function() {
  let page: HomesPage;

  beforeEach(() => {
    page = new HomesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
