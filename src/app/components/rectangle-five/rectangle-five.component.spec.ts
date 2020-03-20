import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleFiveComponent } from './rectangle-five.component';

describe('RectangleFiveComponent', () => {
  let component: RectangleFiveComponent;
  let fixture: ComponentFixture<RectangleFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
