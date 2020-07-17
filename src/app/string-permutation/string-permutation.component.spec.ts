import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringPermutationComponent } from './string-permutation.component';

describe('StringPermutationComponent', () => {
  let component: StringPermutationComponent;
  let fixture: ComponentFixture<StringPermutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringPermutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringPermutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
