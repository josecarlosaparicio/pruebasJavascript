import { Injectable } from '@angular/core';
import { Http, ConnectionBackend,  RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class HttpService extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) { 
      //let token = localStorage.getItem('auth_token'); // your custom token getter function here
      //options.headers.set('Authorization', `Bearer ${token}`);
      super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
      return this.intercept(super.request(url, options));
  }

  intercept(observable: Observable<Response>): Observable<Response> {    
  
    observable.subscribe((res) => {
        console.log("Response: " + res);
    },(error) => {
        console.log("Caught error: " + error);
    });

    return observable;
  }

}