import { CommunityTuberPage } from './app.po';

describe('community-tuber App', () => {
  let page: CommunityTuberPage;

  beforeEach(() => {
    page = new CommunityTuberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
