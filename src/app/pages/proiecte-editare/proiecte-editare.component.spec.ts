import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiecteEditareComponent } from './proiecte-editare.component';

describe('ProiecteEditareComponent', () => {
  let component: ProiecteEditareComponent;
  let fixture: ComponentFixture<ProiecteEditareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProiecteEditareComponent]
    });
    fixture = TestBed.createComponent(ProiecteEditareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
