import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleSixComponent } from './rectangle-six.component';

describe('RectangleSixComponent', () => {
  let component: RectangleSixComponent;
  let fixture: ComponentFixture<RectangleSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectangleSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
