import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  private url = 'http://localhost:3000/';

    constructor(private http: Http) {
     }

     getRequest(endPoint: String){

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.url+endPoint, options)        
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
     }

     postRequest(endPoint: String, body: any){

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url+endPoint, body, options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
     }

    private extractData(res: Response) {
        let response = res.json();
        return response || { };
        //return console.log(res.json());
    }

    private handleError(error: any) {
        console.error('Ha ocurrido un error', error);
        return Promise.reject(error.message || error);
    }
}
