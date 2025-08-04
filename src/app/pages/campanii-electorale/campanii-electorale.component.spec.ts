import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniiElectoraleComponent } from './campanii-electorale.component';

describe('CampaniiElectoraleComponent', () => {
  let component: CampaniiElectoraleComponent;
  let fixture: ComponentFixture<CampaniiElectoraleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaniiElectoraleComponent]
    });
    fixture = TestBed.createComponent(CampaniiElectoraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
