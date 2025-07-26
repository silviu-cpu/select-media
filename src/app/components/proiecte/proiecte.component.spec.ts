import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiecteComponent } from './proiecte.component';

describe('ProiecteComponent', () => {
  let component: ProiecteComponent;
  let fixture: ComponentFixture<ProiecteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProiecteComponent]
    });
    fixture = TestBed.createComponent(ProiecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
