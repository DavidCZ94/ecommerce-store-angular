import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChange,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '@core/models/product.model';

import { CartService } from '@core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
// export class ProductComponent implements OnInit, DoCheck, OnDestroy {
export class ProductComponent {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(
        private cartService: CartService
    ){

    }

    addCart(){
        this.cartService.addCart(this.product);
    }

/*     constructor(){
        console.log('1. Constructor');
    }

    ngOnChanges(changes: SimpleChange) {
        // This methos is native to angular
        console.log('2. ngOnChanges');
        console.log(changes);
    }

    ngOnInit(): void {
        console.log('3. ngOnInit');
    }

    ngDoCheck(): void {
        // Here we can to do our own changes implements
        console.log('4. ngDoCheck')
    }

    ngOnDestroy(): void {
        console.log('5. ngOnDestroy');
    } */

}
