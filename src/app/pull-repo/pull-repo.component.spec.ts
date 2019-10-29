import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRepoComponent } from './pull-repo.component';

describe('PullRepoComponent', () => {
  let component: PullRepoComponent;
  let fixture: ComponentFixture<PullRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PullRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
