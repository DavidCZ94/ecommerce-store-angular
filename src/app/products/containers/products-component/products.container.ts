import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Product } from '@core/models/product.model';
import { ProdutsService } from '@core/services/products/produts.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {

  products: Product[] = [];

  page_size : number = 9;
  page_number : number = 1;
  pageSizeOptions = [9, 24, 54, 90];

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
    });
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

}
