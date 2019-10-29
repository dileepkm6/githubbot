import { TestBed } from '@angular/core/testing';

import { GithubservicesService } from './githubservices.service';

describe('GithubservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubservicesService = TestBed.get(GithubservicesService);
    expect(service).toBeTruthy();
  });
});
