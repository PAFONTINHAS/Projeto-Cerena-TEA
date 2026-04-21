import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLocation } from './contact-location';

describe('ContactLocation', () => {
  let component: ContactLocation;
  let fixture: ComponentFixture<ContactLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
