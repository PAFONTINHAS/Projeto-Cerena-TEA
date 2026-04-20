import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContatos } from './home-contatos';

describe('HomeContatos', () => {
  let component: HomeContatos;
  let fixture: ComponentFixture<HomeContatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContatos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContatos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
