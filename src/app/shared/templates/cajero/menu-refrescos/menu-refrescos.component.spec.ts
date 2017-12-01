import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRefrescosComponent } from './menu-refrescos.component';

describe('MenuRefrescosComponent', () => {
  let component: MenuRefrescosComponent;
  let fixture: ComponentFixture<MenuRefrescosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRefrescosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRefrescosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
