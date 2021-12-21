import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ListProduitComponent } from './components/list-produit/list-produit.component';
import { ProduitDetailComponent } from './components/produit-detail/produit-detail.component';

const routes: Routes = [

  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'list-produit', component: ListProduitComponent},
  {path: 'detail/:id', component: ProduitDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
