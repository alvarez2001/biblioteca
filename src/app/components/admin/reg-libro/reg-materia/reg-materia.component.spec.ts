import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegMateriaComponent } from './reg-materia.component';

describe('RegMateriaComponent', () => {
  let component: RegMateriaComponent;
  let fixture: ComponentFixture<RegMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
