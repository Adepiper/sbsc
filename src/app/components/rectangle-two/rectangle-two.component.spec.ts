import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleTwoComponent } from './rectangle-two.component';

describe('RectangleTwoComponent', () => {
  let component: RectangleTwoComponent;
  let fixture: ComponentFixture<RectangleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
