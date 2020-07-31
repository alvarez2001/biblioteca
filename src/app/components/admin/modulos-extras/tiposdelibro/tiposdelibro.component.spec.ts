import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposdelibroComponent } from './tiposdelibro.component';

describe('TiposdelibroComponent', () => {
  let component: TiposdelibroComponent;
  let fixture: ComponentFixture<TiposdelibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposdelibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposdelibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
