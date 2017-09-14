import { ProjectPhotoPage } from './app.po';

describe('project-photo App', () => {
  let page: ProjectPhotoPage;

  beforeEach(() => {
    page = new ProjectPhotoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
