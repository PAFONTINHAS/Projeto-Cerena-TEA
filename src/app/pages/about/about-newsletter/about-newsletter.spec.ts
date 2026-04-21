import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNewsletter } from './about-newsletter';

describe('AboutNewsletter', () => {
  let component: AboutNewsletter;
  let fixture: ComponentFixture<AboutNewsletter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutNewsletter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutNewsletter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
