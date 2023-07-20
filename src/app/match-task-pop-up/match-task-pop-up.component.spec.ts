import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTaskPopUpComponent } from './match-task-pop-up.component';

describe('MatchTaskPopUpComponent', () => {
  let component: MatchTaskPopUpComponent;
  let fixture: ComponentFixture<MatchTaskPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchTaskPopUpComponent]
    });
    fixture = TestBed.createComponent(MatchTaskPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
