import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidators } from './../../../utils/validators';

import { ProdutsService } from './../../../core/services/products/produts.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produtsService: ProdutsService,
    private router: Router
  ) {
    this.buldForm();
   }

  ngOnInit(): void {
  }
/*
  When recieved the "$event" sent by HTML and with ".preventDefault();" method
    we avoid that the HTML gerate a defaul page reload
*/
  saveProduct(event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.produtsService.createProduct(product)
      .subscribe((newProduct) => {
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

  private buldForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
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
