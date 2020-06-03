import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProdutsService } from './../../../core/services/products/produts.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];


  constructor(private produtsService: ProdutsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number){
    alert(`Product id = ${id}`);
  }

  fetchProducts(){
    this.produtsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    })
  }

}
