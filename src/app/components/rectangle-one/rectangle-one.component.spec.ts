import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleOneComponent } from './rectangle-one.component';

describe('RectangleOneComponent', () => {
  let component: RectangleOneComponent;
  let fixture: ComponentFixture<RectangleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
