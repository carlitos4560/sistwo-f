import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRefrescosComponent } from './list-refrescos.component';

describe('ListRefrescosComponent', () => {
  let component: ListRefrescosComponent;
  let fixture: ComponentFixture<ListRefrescosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRefrescosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRefrescosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
