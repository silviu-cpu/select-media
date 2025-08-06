import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiecteFotoProdusComponent } from './proiecte-foto-produs.component';

describe('ProiecteFotoProdusComponent', () => {
  let component: ProiecteFotoProdusComponent;
  let fixture: ComponentFixture<ProiecteFotoProdusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProiecteFotoProdusComponent]
    });
    fixture = TestBed.createComponent(ProiecteFotoProdusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
