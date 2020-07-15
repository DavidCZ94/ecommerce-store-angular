import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProdutsService } from '@core/services/products/produts.service';
import { Product } from '@core/models/product.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private produtsService: ProdutsService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.params
    .pipe(
      switchMap(( params: Params ) => {
        return this.produtsService.getProduct(params.id);
      })
    );
  }

  createProduct(){
    const newProduct: Product = {
      id: '98798',
      title: 'Nuevo desde angular',
      image: 'assets/images/banner-3.jpg',
      price: 9999,
      description: 'Helloo, this is a new prouct'
    }
    this.produtsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      title: 'Nuevo titulo',
      price: 999999999999999,
      description: 'Helloo, this is a adited product'
    }
    this.produtsService.updateProduct('99', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(){
    const deledProduct = '98798';
    this.produtsService.deleteProduct(deledProduct)
    .subscribe( rta => {
      console.log(rta);
    });
  }

}
