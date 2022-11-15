import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
 
import {Reglementation} from '../models/Reglementation';
import { Piece } from 'app/models/Piece';

@Injectable({
  providedIn: 'root'
})
export class ReglementationsService {


  url: string = environment.backend + '/reglementations';

  constructor(private http: HttpClient) { }

  // Enregistrement des pieces
  saveFile(id: number, piece: Piece): Observable<Object> {
    return this.http.post(`${this.url}/save-file/${id}`, piece);
  }


  // Enregistrement des reglementation
  save(reglementation: Reglementation): Observable<Object> {
    return this.http.post(`${this.url}/save`, reglementation);
  }

  // Supression des Accord
  delete(reglementation: Reglementation): Observable<Object> {
    return this.http.post(`${this.url}/delete`, reglementation);
  }

  // liste des Accord
  list(): Observable<Object> {
    return this.http.get(`${this.url}/list`);
  }


  // liste des IDE par id
  getById(id: number): Observable<Object> {
    return this.http.get(`${this.url}/detail/${id}`);
  }

}
