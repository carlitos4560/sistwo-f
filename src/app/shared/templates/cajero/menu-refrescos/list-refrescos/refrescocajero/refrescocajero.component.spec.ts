import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrescocajeroComponent } from './refrescocajero.component';

describe('RefrescocajeroComponent', () => {
  let component: RefrescocajeroComponent;
  let fixture: ComponentFixture<RefrescocajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrescocajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrescocajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
