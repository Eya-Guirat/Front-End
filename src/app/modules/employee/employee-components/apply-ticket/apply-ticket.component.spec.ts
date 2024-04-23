import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyTicketComponent } from './apply-ticket.component';

describe('ApplyTicketComponent', () => {
  let component: ApplyTicketComponent;
  let fixture: ComponentFixture<ApplyTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
