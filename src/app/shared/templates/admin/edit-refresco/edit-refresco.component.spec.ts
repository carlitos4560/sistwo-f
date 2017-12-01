import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRefrescoComponent } from './edit-refresco.component';

describe('EditRefrescoComponent', () => {
  let component: EditRefrescoComponent;
  let fixture: ComponentFixture<EditRefrescoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRefrescoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRefrescoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
