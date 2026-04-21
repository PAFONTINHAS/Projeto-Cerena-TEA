import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsComp } from './contact-us-comp';

describe('ContactUsComp', () => {
  let component: ContactUsComp;
  let fixture: ComponentFixture<ContactUsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
