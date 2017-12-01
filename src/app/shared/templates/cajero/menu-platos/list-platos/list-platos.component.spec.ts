import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlatosComponent } from './list-platos.component';

describe('ListPlatosComponent', () => {
  let component: ListPlatosComponent;
  let fixture: ComponentFixture<ListPlatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
