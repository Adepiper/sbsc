import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleSevenComponent } from './rectangle-seven.component';

describe('RectangleSevenComponent', () => {
  let component: RectangleSevenComponent;
  let fixture: ComponentFixture<RectangleSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
