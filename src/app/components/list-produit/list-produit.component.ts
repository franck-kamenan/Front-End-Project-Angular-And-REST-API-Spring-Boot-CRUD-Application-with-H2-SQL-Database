import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit {

  listProduit: Produit[] = []

  constructor(private _service: ProduitService) { }

  ngOnInit(): void {

    this._service.getAll().subscribe(produits => this.listProduit = produits);
  }

}
