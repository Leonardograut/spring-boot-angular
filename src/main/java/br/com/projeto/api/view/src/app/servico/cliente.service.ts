import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //url da api
private url :String ='http://localhost:8080'

//Construtor
  constructor(private http:HttpClient) { }
}
