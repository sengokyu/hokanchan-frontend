import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionResultComponent } from './suggestion-result.component';

describe('SuggestionResultComponent', () => {
  let component: SuggestionResultComponent;
  let fixture: ComponentFixture<SuggestionResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
