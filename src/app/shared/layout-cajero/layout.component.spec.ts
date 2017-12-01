import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCajeroComponent } from './layout.component';

describe('LayoutCajeroComponent', () => {
  let component: LayoutCajeroComponent;
  let fixture: ComponentFixture<LayoutCajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
