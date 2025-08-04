import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaborariArtistiComponent } from './colaborari-artisti.component';

describe('ColaborariArtistiComponent', () => {
  let component: ColaborariArtistiComponent;
  let fixture: ComponentFixture<ColaborariArtistiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColaborariArtistiComponent]
    });
    fixture = TestBed.createComponent(ColaborariArtistiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
