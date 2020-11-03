import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produits: any[] = [];
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.produits = this.produitService.getProduit();
  }






}
