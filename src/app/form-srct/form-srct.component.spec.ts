import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSrctComponent } from './form-srct.component';

describe('FormSrctComponent', () => {
  let component: FormSrctComponent;
  let fixture: ComponentFixture<FormSrctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSrctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSrctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
