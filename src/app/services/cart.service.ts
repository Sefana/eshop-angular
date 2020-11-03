import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Produit } from '../model/Produit';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  produits: Produit[] = [];
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
