import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDetailsPageComponent } from './movies-details-page.component';

describe('MoviesDetailsPageComponent', () => {
  let component: MoviesDetailsPageComponent;
  let fixture: ComponentFixture<MoviesDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
