import { DemoTestPage } from './app.po';

describe('demo-test App', function() {
  let page: DemoTestPage;

  beforeEach(() => {
    page = new DemoTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
