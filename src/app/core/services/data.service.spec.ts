import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { environment } from '../../../environments/environment';
import { MOCK_TODO } from '../../../assets/mock-todo';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it(
    'should make GET request and get JSON data from API on call "getTodos"',
    inject([DataService, HttpTestingController], (service: DataService, httpMock: HttpTestingController) => {
      service.getTodos().subscribe(todos => expect(todos).toEqual([MOCK_TODO]));

      const mockReq = httpMock.expectOne(environment.API_URL + '/todos');

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      expect(mockReq.request.method).toEqual('GET');
      mockReq.flush([MOCK_TODO]);

      httpMock.verify();
    })
  );
});
