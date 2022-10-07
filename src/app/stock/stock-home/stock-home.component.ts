import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product, ProductResponse } from 'src/app/models/product.model';
import { NetworkService } from './../../services/network.service';
import Swal from 'sweetalert2';



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

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.feedData();
  }

  feedData() {

    this.networkService.getProducts().subscribe(
      data => {
        this.dataSource.data = data.map(item => {
          item.image = this.networkService.getProductImageURL(item.image)
          return item;
        })
      },
      error => {
        alert(JSON.stringify(error.error.message))
      },
      () => {

      }
    )


    // const dummy: Product[] = [
    //   {
    //     name: "Aperiam fuga nihil ut cumque eveniet ut nemo et quis. Similique ipsa voluptatum. Voluptas distinctio voluptatibus dolorem possimus ut rerum est optio. Aliquid omnis eum quidem ea et quaerat eos odio soluta. Optio sed voluptatem.",
    //     price: 2000,
    //     stock: 145,
    //     image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
    //   },
    //   {
    //     name: "Ram SSD500GB",
    //     price: 2350,
    //     stock: 22,
    //     image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
    //   },
    //   {
    //     name: "Ram SSD500GB gdjgd",
    //     price: 1999,
    //     stock: 31,
    //     image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
    //   },
    //   {
    //     name: "Ram SSD500GBjhhl",
    //     price: 2109,
    //     stock: 405,
    //     image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
    //   },
    //   {
    //     name: "ssd Ram SSD500GB",
    //     price: 2630,
    //     stock: 512,
    //     image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
    //   },
    //   {
    //     name: "Ram ssd SSD500GB",
    //     price: 2630,
    //     stock: 512,
    //     image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
    //   },
    //   {
    //     name: "gh/Ram SSD500GB",
    //     price: 2630,
    //     stock: 512,
    //     image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
    //   },
    //   {
    //     name: "Ram SSD500GB",
    //     price: 2630,
    //     stock: 512,
    //     image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
    //   },
    //   {
    //     name: "Ram SSD500GB",
    //     price: 2630,
    //     stock: 512,
    //     image: "https://static.techspot.com/images2/news/bigimage/2016/12/2016-12-04-image-10.jpg"
    //   }
    // ]

  }

  onClickDeleteProduct(product: ProductResponse) {

    Swal.fire({
      title: 'คุณต้องการลบหรือไหม?',
      text: `คุนต้องการลบ: ${product.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `ใช่ ฉันต้งการลบ`
    }).then((result) => {
      if (result.isConfirmed) {
        this.networkService.deleteProduct(product.id).subscribe(
          data => {
            Swal.fire(
              'ลบสำเร็จ!',
              'คุณได้ทำการลบเรียบร้อย',
              'success'
            )
            this.feedData()
          },
          error => {
            alert(JSON.stringify(error.error.message))
          }
        )
      }
    })
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
