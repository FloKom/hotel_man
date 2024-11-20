import { TestBed } from '@angular/core/testing';

import { BedroomCategoryService } from './bedroom-category.service';

describe('BedroomCategoryService', () => {
  let service: BedroomCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BedroomCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
