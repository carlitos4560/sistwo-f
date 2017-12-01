import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourCajeroComponent } from './four.component';

describe('FourCajeroComponent', () => {
  let component: FourCajeroComponent;
  let fixture: ComponentFixture<FourCajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourCajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
