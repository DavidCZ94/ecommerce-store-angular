import { Component, OnInit } from '@angular/core';

import { ProdutsService } from './../../../core/services/products/produts.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private produtsService: ProdutsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.produtsService.getAllProducts()
    .subscribe( products => {
      this.products = products;
    });
  }

  deleteProduct(id: string){
    this.produtsService.deleteProduct(id)
    .subscribe( rta => {
      this.fetchProducts()
    })
  }

}
