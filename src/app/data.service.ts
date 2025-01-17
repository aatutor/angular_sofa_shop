import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/');
  }
	getFilter(select: string): Observable<any[]> {
		return this.http.get<any[]>('http://localhost:3000/filter?select='+select);
	}
	getSofa(name: string): Observable<any> {
		return this.http.get<any>('http://localhost:3000/sofa?name='+name);
	}
}