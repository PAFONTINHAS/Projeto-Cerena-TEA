import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutResults } from './about-results';

describe('AboutResults', () => {
  let component: AboutResults;
  let fixture: ComponentFixture<AboutResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
