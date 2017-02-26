import { MyFormPrestinePage } from './app.po';

describe('my-form-prestine App', () => {
  let page: MyFormPrestinePage;

  beforeEach(() => {
    page = new MyFormPrestinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
