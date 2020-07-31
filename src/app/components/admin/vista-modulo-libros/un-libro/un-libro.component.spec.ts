import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnLibroComponent } from './un-libro.component';

describe('UnLibroComponent', () => {
  let component: UnLibroComponent;
  let fixture: ComponentFixture<UnLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
