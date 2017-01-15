import {SimpleGPACalcPage} from "./app.po";

describe('simple-gpacalc App', function () {
  let page: SimpleGPACalcPage;

  beforeEach(() => {
    page = new SimpleGPACalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
