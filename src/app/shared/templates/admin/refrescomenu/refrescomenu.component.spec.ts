import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrescomenuComponent } from './refrescomenu.component';

describe('RefrescomenuComponent', () => {
  let component: RefrescomenuComponent;
  let fixture: ComponentFixture<RefrescomenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrescomenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrescomenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
