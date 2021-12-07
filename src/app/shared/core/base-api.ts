import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class BaseApi {
    private baseUrl = 'http://localhost:3000/';

    constructor(public http: HttpClient) {}

    private getUrl(url: string = ''): string {
        return this.baseUrl + url;
    }

    public get(url: string = ''): Observable<any> {
        return this.http.get<any>(this.getUrl(url));
    }

    public post(url: string = '', data: any = {}): Observable<any> {
        return this.http.post<any>(this.getUrl(url), data);
    }

    public delete(url: string = ''): Observable<void> {
        return this.http.delete<void>(this.getUrl(url));
    }

    public put(url: string = '', data: any = {}): Observable<any> {
        return this.http.put<any>(this.getUrl(url), data);
    }
}