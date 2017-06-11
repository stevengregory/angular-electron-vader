import { VaderPage } from './app.po';

describe('vader App', () => {
  let page: VaderPage;

  beforeEach(() => {
    page = new VaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
