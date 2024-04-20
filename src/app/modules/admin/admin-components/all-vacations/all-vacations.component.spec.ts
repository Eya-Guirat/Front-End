import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVacationsComponent } from './all-vacations.component';

describe('AllVacationsComponent', () => {
  let component: AllVacationsComponent;
  let fixture: ComponentFixture<AllVacationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVacationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
