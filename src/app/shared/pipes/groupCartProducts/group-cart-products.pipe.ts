import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductsCart } from 'src/app/core/models/productsCarts.model';

@Pipe({
  name: 'groupCartProducts'
})
export class GroupCartProductsPipe implements PipeTransform {

  transform(products: Product[]): unknown {

    const ids = products.map( product => product.id );
    const uniqueIds = ids.filter( this.deleteRepeatedElements ) ;
    const uniqueProducts = products.filter( this.deleteRepeatedElements );

    const productsCarArray: ProductsCart[] = uniqueIds.map( (value, index) => {
      return { ...products[index], quantity: 0 };
    });

    for (const iterator1 of uniqueIds) {
      for (const iterator2 of ids) {
        if ( iterator1 === iterator2 ){
          productsCarArray[uniqueIds.indexOf(iterator1)].quantity++;
        }
      }
    }
    return uniqueProducts;
  }

  private deleteRepeatedElements(value, index, self) {
    return self.indexOf(value) === index;
  }

}
