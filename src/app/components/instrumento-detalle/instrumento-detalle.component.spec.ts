import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentoDetalleComponent } from './instrumento-detalle.component';

describe('InstrumentoDetalleComponent', () => {
  let component: InstrumentoDetalleComponent;
  let fixture: ComponentFixture<InstrumentoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
