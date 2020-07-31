import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAreaComponent } from './editar-area.component';

describe('EditarAreaComponent', () => {
  let component: EditarAreaComponent;
  let fixture: ComponentFixture<EditarAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
