import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Produit } from 'src/app/model/Produit';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[] = [
    {
      id:1,name:'nike',photo:'tttest',price:24,type:true
    },
    {
      id:2,name:'puma',photo:'tttest',price:24,type:true
    }
  ];
  produitSubject = new Subject<any[]>();
  constructor() { }

  emitProduit(){
    this.produitSubject.next(this.produits);
  }

  getProduit(){
    return this.produits;
  }
  saveProduit(Produit){
   this.produits.push(Produit);
  }
}
