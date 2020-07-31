import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegGeneroComponent } from './reg-genero.component';

describe('RegGeneroComponent', () => {
  let component: RegGeneroComponent;
  let fixture: ComponentFixture<RegGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
