import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  imagePreview: string | ArrayBuffer | null |undefined;
  file: File | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onPrevieImage(event: any){
    const metaImage = event.target.files[0];
    if(metaImage){
      this.file = metaImage;
      console.log(this.file);

      const reader = new FileReader();
      reader.readAsDataURL(metaImage)
      reader.onload = () => {
        this.imagePreview = reader.result;
      }
    }
  }

  onSubmit(productForm : NgForm){

    if (productForm.invalid){
      return;
    }

    const value = productForm.value;
    let product = new Product();
    product.name = value.name;
    product.price = value.price;
    product.stock = value.stock;
    product.image = this.file

    console.log(product);
  }
}
