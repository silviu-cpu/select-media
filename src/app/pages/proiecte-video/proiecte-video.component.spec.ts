import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiecteVideoComponent } from './proiecte-video.component';

describe('ProiecteVideoComponent', () => {
  let component: ProiecteVideoComponent;
  let fixture: ComponentFixture<ProiecteVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProiecteVideoComponent]
    });
    fixture = TestBed.createComponent(ProiecteVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
