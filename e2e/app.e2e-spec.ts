import { ThruwayMinimalExamplePage } from './app.po';

describe('thruway-minimal-example App', () => {
  let page: ThruwayMinimalExamplePage;

  beforeEach(() => {
    page = new ThruwayMinimalExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
