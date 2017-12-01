import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatocajeroComponent } from './platocajero.component';

describe('PlatocajeroComponent', () => {
  let component: PlatocajeroComponent;
  let fixture: ComponentFixture<PlatocajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatocajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatocajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
