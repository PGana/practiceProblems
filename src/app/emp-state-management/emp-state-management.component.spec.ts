import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpStateManagementComponent } from './emp-state-management.component';

describe('EmpStateManagementComponent', () => {
  let component: EmpStateManagementComponent;
  let fixture: ComponentFixture<EmpStateManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpStateManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpStateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
