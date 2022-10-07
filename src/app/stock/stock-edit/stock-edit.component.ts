import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  imagePreview: string | ArrayBuffer | null | undefined;
  file: File | undefined;

  @ViewChild('productForm', { static: true }) productForm: NgForm | undefined

  constructor(
    private networkService: NetworkService,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }



  onPrevieImage(event: any) {
    const metaImage = event.target.files[0];
    if (metaImage) {
      this.file = metaImage;
      console.log(this.file);

      const reader = new FileReader();
      reader.readAsDataURL(metaImage)
      reader.onload = () => {
        this.imagePreview = reader.result;
      }
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.feedData(params['id'])
      }
    )
  }
  feedData(id: number) {
    this.networkService.getProduct(id).subscribe(
      data => {
        var { id, name, price, stock, image } = { ...data }
        this.imagePreview = this.networkService.getProductImageURL(image)
        this.productForm?.setValue({name, price, stock, id})
      },
      error => {
        alert(error.error.message)
      }
    )
  }


  onSubmit(productForm: NgForm) {

    if (productForm.invalid) {
      return;
    }

    const value = productForm.value;
    let product = new Product();
    product.name = value.name;
    product.price = value.price;
    product.stock = value.stock;
    product.image = this.file

    this.networkService.editProduct(value.id, product).subscribe(
      data => {
        this.location.back()
      },
      error => {
        alert(error.error.message)
      }
    )
  }

}
