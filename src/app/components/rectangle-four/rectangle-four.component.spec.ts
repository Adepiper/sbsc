import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleFourComponent } from './rectangle-four.component';

describe('RectangleFourComponent', () => {
  let component: RectangleFourComponent;
  let fixture: ComponentFixture<RectangleFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
