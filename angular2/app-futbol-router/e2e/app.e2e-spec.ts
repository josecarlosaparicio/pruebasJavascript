import { AppFutbolRouterPage } from './app.po';

describe('app-futbol-router App', () => {
  let page: AppFutbolRouterPage;

  beforeEach(() => {
    page = new AppFutbolRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
