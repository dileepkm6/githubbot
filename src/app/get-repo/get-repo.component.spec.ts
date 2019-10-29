import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRepoComponent } from './get-repo.component';

describe('GetRepoComponent', () => {
  let component: GetRepoComponent;
  let fixture: ComponentFixture<GetRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
