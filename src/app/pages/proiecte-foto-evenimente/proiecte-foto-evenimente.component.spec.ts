import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiecteFotoEvenimenteComponent } from './proiecte-foto-evenimente.component';

describe('ProiecteFotoEvenimenteComponent', () => {
  let component: ProiecteFotoEvenimenteComponent;
  let fixture: ComponentFixture<ProiecteFotoEvenimenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProiecteFotoEvenimenteComponent]
    });
    fixture = TestBed.createComponent(ProiecteFotoEvenimenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
