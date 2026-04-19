import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoioTea } from './apoio-tea';

describe('ApoioTea', () => {
  let component: ApoioTea;
  let fixture: ComponentFixture<ApoioTea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApoioTea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoioTea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
