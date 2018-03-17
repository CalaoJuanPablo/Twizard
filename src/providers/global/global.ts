import { Injectable } from '@angular/core';


function generateUUID(){
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

export const ResponseCode = {
    SUCCESS: 1,
    NOT_AUTHORIZED: 2,
    NO_SUCH_METHOD: 4,
    NO_SUCH_FORMAT: 8,
    ACCOUNT_SUSPENDED: 16,
    INVALID_REQUEST: 32,
    UNKNOWN_SERVER_ERROR: 64,
    DATABASE_ERROR: 128
};
/*
  Generated class for the GlobalProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KumulosClient {
    sessionToken: string;
    headers: { Authorization: string; };
  public apiKey: string;
  public secretKey: string;

    setTokken() {
        this.headers = {
            Authorization: `Basic ${btoa(`${this.apiKey}:${this.secretKey}`)}`
        };
        this.sessionToken = generateUUID();
    }

    getTokken() {
        return this.sessionToken;
    }

    call(method, params = {}) {
        let data = new FormData();
        data.append('sessionToken', this.sessionToken);

        Object.keys(params).forEach(key => {
            data.append('params['+key+']', params[key]);
        });

        const url = `https://api.kumulos.com/b2.2/${this.apiKey}/${method}.json`;

        const options = {
            method: 'POST',
            headers: this.headers,
            body: data
        };

        return fetch(url, options)
            .then(response => this.parseJson(response))
            .then(data => this.handleResponse(data)).catch( error =>  console.log(error) );
    }

    parseJson(response) {
        return response.json();
    }

    handleResponse(data) {
        if (data.sessionToken) {
            this.sessionToken = data.sessionToken;
        }

        switch (data.responseCode) {
            case ResponseCode.SUCCESS:
                return data.payload;
            default:
                return Promise.reject(data);
        }
    }

}