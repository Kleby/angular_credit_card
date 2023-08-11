import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedCardComponent } from './completed-card.component';

describe('CompletedCardComponent', () => {
  let component: CompletedCardComponent;
  let fixture: ComponentFixture<CompletedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedCardComponent]
    });
    fixture = TestBed.createComponent(CompletedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
