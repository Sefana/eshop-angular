import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  formProduit:FormGroup;
  produitSubscription:Subscription;
  produits: any[] = [];
  constructor(
    private formBuilder : FormBuilder,
    private produitService : ProduitService
  ) { }

  ngOnInit(): void {
    this.initFormProduit();
    this.produitService.produitSubject.subscribe(
      (data) => {
        this.produits = data;
        
      }
    );
    this.produitService.emitProduit();
  }


  
  initFormProduit(){
    this.formProduit = this.formBuilder.group({
      name: ['',Validators.required],
      photo: ['',Validators.required],
      price: ['',Validators.required],
      type: ['',Validators.required],
    });
}

  openModal(){
    $('#produitModal').modal('show');
  }
  closeModal(){
    $('#produitModal').modal('hide');
  }
  EnEnvoiProduit(){
    const newProduit = this.formProduit.value;
    this.produitService.saveProduit(newProduit);
    console.log(this.produits);
    
  }

}
