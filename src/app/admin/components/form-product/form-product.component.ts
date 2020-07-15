import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidators } from '@utils/validators';

import { ProdutsService } from '@core/services/products/produts.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private produtsService: ProdutsService,
    private router: Router,
    private storage: AngularFireStorage
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

  uploadFile(event){
    const file = event.target.files[0];
    const name = event.target.files[0].name;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
  }

}
