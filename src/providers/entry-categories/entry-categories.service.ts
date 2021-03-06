import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppSettings } from '../../app/app-settings';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EntryCategoriesService {

    constructor(private http: Http) {

    }

    /**
     * Permite obtener las categorias de los ingresos
     * 
     * return array[]
     * 
     */
     getEntryCategories(){

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(AppSettings.API_ENDPOINT+"/entryCategories", options)        
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
     }

     /**
     * Permite obtener las categorias de los ingresos
     * 
     * return array[]
     * 
     */
     getEntryCategoriesForm(){

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(AppSettings.API_ENDPOINT+"/entryForms", options)        
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
