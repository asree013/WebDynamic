import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  displayColumns = ['image','name','price','stock','action'] 

  dataSource = new MatTableDataSource<Product>();

  constructor() { }

  ngOnInit(): void {
    this.feedData();
  }

  feedData(){
    const dummy: Product[] = [
      {
        name: "Ram SSD500GB",
        price: 2500,
        stock:  1,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      },
      {
        name: "Ram SSD500GB",
        price: 2500,
        stock:  2,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      },
      {
        name: "Ram SSD500GB",
        price: 2500,
        stock:  3,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      },
      {
        name: "Ram SSD500GB",
        price: 2500,
        stock:  4,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      },
      {
        name: "Ram SSD500GB",
        price: 2500,
        stock:  5,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      }
    ]
    this.dataSource.data = dummy
  }

}
