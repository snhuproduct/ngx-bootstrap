import { async, TestBed } from '@angular/core/testing';
import { TypeaheadModule } from './typeahead.module';

describe('TypeaheadModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TypeaheadModule]
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(TypeaheadModule).toBeDefined();
  });
});
