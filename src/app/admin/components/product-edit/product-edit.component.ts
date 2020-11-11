import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from '@utils/validators';

import { ProdutsService } from '@core/services/products/produts.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private produtsService: ProdutsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buldForm();
   }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.produtsService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }
/*
  When recieved the "$event" sent by HTML and with ".preventDefault();" method
    we avoid that the HTML gerate a defaul page reload
*/
  saveProduct(event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.produtsService.updateProduct(this.id, product)
      .subscribe((newProduct) => {
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

  private buldForm(){
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  get priceField(){
    return this.form.get('price');
  }
}
