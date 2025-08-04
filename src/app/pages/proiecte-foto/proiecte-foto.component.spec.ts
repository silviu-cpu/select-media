import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiecteFotoComponent } from './proiecte-foto.component';

describe('ProiecteFotoComponent', () => {
  let component: ProiecteFotoComponent;
  let fixture: ComponentFixture<ProiecteFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProiecteFotoComponent]
    });
    fixture = TestBed.createComponent(ProiecteFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
