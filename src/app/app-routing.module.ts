import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'produitAdd',component:ProduitComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
