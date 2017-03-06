import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrendingComponent } from './home-trending.component';

describe('HomeTrendingComponent', () => {
  let component: HomeTrendingComponent;
  let fixture: ComponentFixture<HomeTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
