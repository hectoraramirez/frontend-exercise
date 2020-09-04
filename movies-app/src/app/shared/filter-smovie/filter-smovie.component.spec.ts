import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSMovieComponent } from './filter-smovie.component';

describe('FilterSMovieComponent', () => {
  let component: FilterSMovieComponent;
  let fixture: ComponentFixture<FilterSMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
