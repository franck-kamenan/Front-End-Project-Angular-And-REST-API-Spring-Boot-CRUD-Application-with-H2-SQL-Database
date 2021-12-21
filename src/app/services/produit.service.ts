import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private _client : HttpClient) { }

  public getAll(): Observable<Produit[]> {
    
    return this._client.get<Produit[]>("http://localhost:8080/produit");
    
    // return <Observable<Produit[]>> this._client.get("http://localhost:8080/produit");
    // return this._client.get("http://localhost:8080/produit") as Observable<Produit[]>;
  }
  
  public getOne(id: number): Observable<Produit> {
    
    // return this._client.get<Produit>("http://localhost:8080/produit/" + id);
    
    // return this._client.get<Produit>("http://localhost:8080/produit", {
    // params: {
    //   "id": id
    // }
    // });
        
    return this._client.get<Produit>("http://localhost:8080/produit?id=" + id);
  }
}
