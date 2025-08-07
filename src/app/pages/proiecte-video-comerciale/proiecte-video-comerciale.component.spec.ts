import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiecteVideoComercialeComponent } from './proiecte-video-comerciale.component';

describe('ProiecteVideoComercialeComponent', () => {
  let component: ProiecteVideoComercialeComponent;
  let fixture: ComponentFixture<ProiecteVideoComercialeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProiecteVideoComercialeComponent]
    });
    fixture = TestBed.createComponent(ProiecteVideoComercialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
