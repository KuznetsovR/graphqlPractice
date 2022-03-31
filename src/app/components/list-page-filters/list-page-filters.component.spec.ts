import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageFiltersComponent } from './list-page-filters.component';

describe('ListPageFiltersComponent', () => {
  let component: ListPageFiltersComponent;
  let fixture: ComponentFixture<ListPageFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPageFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
