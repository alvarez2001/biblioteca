import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegIdiomaComponent } from './reg-idioma.component';

describe('RegIdiomaComponent', () => {
  let component: RegIdiomaComponent;
  let fixture: ComponentFixture<RegIdiomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegIdiomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
