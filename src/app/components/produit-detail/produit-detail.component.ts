import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit {

  // produit: Produit | undefined;
  produit!: Produit;
  
  constructor(
    
    private _service: ProduitService, 
    private _actiRoute: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit(): void {

    const id = this._actiRoute.snapshot.params["id"];
    this._service.getOne(id).subscribe({

      next: produit => this.produit = produit,
      error: error => {

        alert("id incorrect");
        this._router.navigateByUrl("list-produit");
      },
      complete: () => console.log("complete")
    });
    // this._service.getOne(id).subscribe(produit => this.produit = produit);
  }

}
