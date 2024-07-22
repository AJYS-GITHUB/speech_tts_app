import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWebComponent } from './page-web.component';

describe('PageWebComponent', () => {
  let component: PageWebComponent;
  let fixture: ComponentFixture<PageWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageWebComponent]
    });
    fixture = TestBed.createComponent(PageWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
