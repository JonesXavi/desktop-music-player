import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    clientId = '2f98992c40b8edf17423d93bda2e04ab';

    constructor(private http: HttpClient) { }

    get(url, attachClientId?) {
        // Should attach client id if the attachToken is true
        let u = null;

        attachClientId ? u = this.prepareUrl(url) : u = url;
        // Returns an obsrevable for the HTTP get request
        return this.http.get(u);
    }

    prepareUrl(url) {
        //Attach client id to stream url
        return `${url}?client_id=${this.clientId}`
    }
}
