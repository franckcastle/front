import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeComponentComponent } from './update-employee-component.component';

describe('UpdateEmployeeComponentComponent', () => {
  let component: UpdateEmployeeComponentComponent;
  let fixture: ComponentFixture<UpdateEmployeeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
