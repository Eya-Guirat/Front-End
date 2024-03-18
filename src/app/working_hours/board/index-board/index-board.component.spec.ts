import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBoardComponent } from './index-board.component';

describe('IndexBoardComponent', () => {
  let component: IndexBoardComponent;
  let fixture: ComponentFixture<IndexBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
