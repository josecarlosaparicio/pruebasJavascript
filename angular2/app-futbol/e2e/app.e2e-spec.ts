import { AppFutbolPage } from './app.po';

describe('app-futbol App', function() {
  let page: AppFutbolPage;

  beforeEach(() => {
    page = new AppFutbolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();    
  });
});
