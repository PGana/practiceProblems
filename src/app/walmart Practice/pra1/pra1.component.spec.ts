import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pra1Component } from './pra1.component';

describe('Pra1Component', () => {
  let component: Pra1Component;
  let fixture: ComponentFixture<Pra1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pra1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pra1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
