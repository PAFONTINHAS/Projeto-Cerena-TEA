import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleSection } from './blog-article-section';

describe('BlogArticleSection', () => {
  let component: BlogArticleSection;
  let fixture: ComponentFixture<BlogArticleSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArticleSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogArticleSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
