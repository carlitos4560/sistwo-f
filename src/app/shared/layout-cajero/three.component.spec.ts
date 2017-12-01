import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCajeroComponent } from './three.component';

describe('ThreeCajeroComponent', () => {
  let component: ThreeCajeroComponent;
  let fixture: ComponentFixture<ThreeCajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeCajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
