import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyProjectComponent } from './apply-project.component';

describe('ApplyProjectComponent', () => {
  let component: ApplyProjectComponent;
  let fixture: ComponentFixture<ApplyProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
