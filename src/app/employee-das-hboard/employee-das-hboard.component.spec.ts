import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDasHboardComponent } from './employee-das-hboard.component';

describe('EmployeeDasHboardComponent', () => {
  let component: EmployeeDasHboardComponent;
  let fixture: ComponentFixture<EmployeeDasHboardComponent>;

  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDasHboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDasHboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
