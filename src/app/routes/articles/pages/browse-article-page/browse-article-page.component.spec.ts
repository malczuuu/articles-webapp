import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseArticlePageComponent } from './browse-article-page.component';

describe('BrowseArticlePageComponent', () => {
  let component: BrowseArticlePageComponent;
  let fixture: ComponentFixture<BrowseArticlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseArticlePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
