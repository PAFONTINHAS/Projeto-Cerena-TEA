import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSocial } from './home-social';

describe('HomeSocial', () => {
  let component: HomeSocial;
  let fixture: ComponentFixture<HomeSocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSocial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSocial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
