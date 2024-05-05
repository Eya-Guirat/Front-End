import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHrComponent } from './post-hr.component';

describe('PostHrComponent', () => {
  let component: PostHrComponent;
  let fixture: ComponentFixture<PostHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
