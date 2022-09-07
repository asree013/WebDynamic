import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  displayColumns = ['image', 'name', 'price', 'stock', 'action']

  dataSource = new MatTableDataSource<Product>();

  textSeacrh = '';

  @ViewChild(MatSort, { static: true }) sort!: MatSort
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.feedData();
  }

  feedData() {
    const dummy: Product[] = [
      {
        name: "Aperiam fuga nihil ut cumque eveniet ut nemo et quis. Similique ipsa voluptatum. Voluptas distinctio voluptatibus dolorem possimus ut rerum est optio. Aliquid omnis eum quidem ea et quaerat eos odio soluta. Optio sed voluptatem.",
        price: 2000,
        stock: 145,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      },
      {
        name: "Ram SSD500GB",
        price: 2350,
        stock: 22,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      },
      {
        name: "Ram SSD500GB gdjgd",
        price: 1999,
        stock: 31,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      },
      {
        name: "Ram SSD500GBjhhl",
        price: 2109,
        stock: 405,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      },
      {
        name: "ssd Ram SSD500GB",
        price: 2630,
        stock: 512,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      },
      {
        name: "Ram ssd SSD500GB",
        price: 2630,
        stock: 512,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      },
      {
        name: "gh/Ram SSD500GB",
        price: 2630,
        stock: 512,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      },
      {
        name: "Ram SSD500GB",
        price: 2630,
        stock: 512,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      },
      {
        name: "Ram SSD500GB",
        price: 2630,
        stock: 512,
        image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
      }
    ]
    this.dataSource.data = dummy
  }

  search(event: Event) {
    let filterValue = ""
    if (event) {
      filterValue = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clearSearch() {
    this.textSeacrh = "";
    this.search(null!)
  }

}
