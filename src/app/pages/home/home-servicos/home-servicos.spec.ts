import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicos } from './home-servicos';

describe('HomeServicos', () => {
  let component: HomeServicos;
  let fixture: ComponentFixture<HomeServicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeServicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeServicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
