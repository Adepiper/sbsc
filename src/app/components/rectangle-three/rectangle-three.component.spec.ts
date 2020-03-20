import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleThreeComponent } from './rectangle-three.component';

describe('RectangleThreeComponent', () => {
  let component: RectangleThreeComponent;
  let fixture: ComponentFixture<RectangleThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
