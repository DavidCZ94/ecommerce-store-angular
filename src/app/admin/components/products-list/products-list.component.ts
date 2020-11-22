import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent} from '@angular/material/paginator';

import { ProdutsService } from '@core/services/products/produts.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  page_size : number = 10;
  page_number : number = 1;
  pageSizeOptions = [10, 20, 50, 100];

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

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

}
