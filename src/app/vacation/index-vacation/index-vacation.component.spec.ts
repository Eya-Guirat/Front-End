import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexVacationComponent } from './index-vacation.component';

describe('IndexVacationComponent', () => {
  let component: IndexVacationComponent;
  let fixture: ComponentFixture<IndexVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexVacationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
