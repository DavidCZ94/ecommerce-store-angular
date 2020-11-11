import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ProdutsService } from './produts.service';
import { environment } from 'src/environments/environment';

describe('ProdutsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProdutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProdutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  /*
  Arrange
  Assert
  Act
 */
  describe('tests for getAllProducts', () => {
    it('should return products', () => {
      //Arrange
      const expectData = [
        {
          id: '1',
          title: 'Holaaaa',
          price: 123,
          description: 'description',
          image: 'omg/img.jpg',
        },
        {
          id: '2',
          title: 'Hola2222',
          price: 321,
          description: 'description32',
          image: 'omg/img2.jpg',
        },
      ];

      let dataError, dataResponse;

      //Act
      service.getAllProducts()
      .subscribe((response) => {
          dataResponse = response;
        },
        (error) => {
          dataError = error;
        }
      );
      const req = httpTestingController.expectOne(`${environment.url_api}/products`);
      req.flush(expectData);
      //assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
