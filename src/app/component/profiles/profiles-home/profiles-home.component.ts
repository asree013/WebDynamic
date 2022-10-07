import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Profile } from 'src/app/models/profile.model';
import { NetworkService } from 'src/app/services/network.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-profiles-home',
  templateUrl: './profiles-home.component.html',
  styleUrls: ['./profiles-home.component.css']
})
export class ProfilesHomeComponent implements OnInit {

  displayColumns = ['image', 'idStudent', 'firstName', 'lastName', 'idCard', 'tellNumber', 'nameDad',
    'nameMon', 'homeNumber', 'moo', 'soi', 'road', 'subDistrict', 'district', 'province', 'zipCode', 'action', 'role']

  dataSource = new MatTableDataSource<Profile>();

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
    // this.networkService.getProducts().subscribe(
    //   data => {
    //     this.dataSource.data = data.map(item => {
    //       item.image = this.networkService.getProductImageURL(item.image)
    //       return item;
    //     })
    //   },
    //   error => {
    //     alert(JSON.stringify(error.error.message))
    //   },
    //   () => {

    //   }
    // )

    const dummy: Profile[] = [
      {
        image: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.6435-9/92569772_2915175978528025_7769237921659355136_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qAup0ug9PLkAX9NF03L&tn=XXRRPpa1VJJ9t91-&_nc_ht=scontent.fbkk5-6.fna&oh=00_AT8V6Xm2nzp3ySfq1iuTYM-6pyHryRO2plp60UB1oCeNDA&oe=635C96D8",
        firstName: "อัสรี",
        lastName: "หะยีมะ",
        idStudent: '163432110013',
        idCard: '1969921312996',
        tellNumber: "0801478101",
        nameDad: "มินลาดน",
        nameMon: "ซูใบดะห์",
        homeNumber: "14/1",
        moo: '7',
        soi: "พนาสณฑ์4",
        road: "พนาสณฑ์",
        subDistrict: "บางนาค",
        district: "เมือง",
        province: "นราธิวาส",
        zipCode: '96000',
        role: 1
      },
      {
        image: "https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.6435-9/106099895_3254818551236182_5069427029560505890_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y7ldjLYSioAAX9eg0G8&_nc_ht=scontent.fbkk5-8.fna&oh=00_AT_Vah1Mo0ZHW8eupZLPuAybcjbD3_H1pd4S5vLKM4YELg&oe=635FBB5A",
        firstName: "นัฒวุติ",
        lastName: "ทองศร",
        idStudent: '163457110025',
        idCard: '1969906982996',
        tellNumber: "0801478101",
        nameDad: "มินลาดน",
        nameMon: "ซูใบดะห์",
        homeNumber: "14/1",
        moo: '7',
        soi: "พนาสณฑ์4",
        road: "พนาสณฑ์",
        subDistrict: "บางนาค",
        district: "เมือง",
        province: "นราธิวาส",
        zipCode: '96000',
        role: 3
      },
      {
        image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/291641709_5242034415874811_8806498411091561220_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=feSxfd1J0BoAX-BbCjv&_nc_ht=scontent.fbkk5-4.fna&oh=00_AT9MrUY16up09cvtSQdz1AiCkxnxctrRPpaYt8XRfKkNHg&oe=633DA9D0",
        firstName: "ปานดวงใจ",
        lastName: "สุยโช",
        idStudent: '163405169053',
        idCard: '1969900319796',
        tellNumber: "0801478101",
        nameDad: "มินลาดน",
        nameMon: "ซูใบดะห์",
        homeNumber: "14/1",
        moo: '7',
        soi: "พนาสณฑ์4",
        road: "พนาสณฑ์",
        subDistrict: "บางนาค",
        district: "เมือง",
        province: "นราธิวาส",
        zipCode: '96000',
        role: 1
      },
      {
        image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/307465801_5221197904646196_3321865570584881538_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7f7Mg2e-iskAX-9wefI&_nc_ht=scontent.fbkk5-7.fna&oh=00_AT-pkta5PDKIIb21FkUPM1qYOaGLcTjwTxjva7WJYxaCOA&oe=633CC3EC",
        firstName: "มูฮัมหมัดอาซิม",
        lastName: "หะยีดิง",
        idStudent: '163405110025',
        idCard: '19611100312996',
        tellNumber: "0801478101",
        nameDad: "มินลาดน",
        nameMon: "ซูใบดะห์",
        homeNumber: "26/1",
        moo: '-',
        soi: "พนาสณฑ์6",
        road: "พนาสณฑ์",
        subDistrict: "บางนาค",
        district: "เมือง",
        province: "นราธิวาส",
        zipCode: '96000',
        role: 2
      },
    ]
    this.dataSource.data = dummy
  }

  // onClickDeleteProduct(product: ProfileResponse) {

  //   Swal.fire({
  //     title: 'คุณต้องการลบหรือไหม?',
  //     text: `คุนต้องการลบ: ${profile.firstName}?`,
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: `ใช่ ฉันต้งการลบ`
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.networkService.deleteProduct(profile.id).subscribe(
  //         data => {
  //           Swal.fire(
  //             'ลบสำเร็จ!',
  //             'คุณได้ทำการลบเรียบร้อย',
  //             'success'
  //           )
  //           this.feedData()
  //         },
  //         error => {
  //           alert(JSON.stringify(error.error.message))
  //         }
  //       )
  //     }
  //   })
  // }

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

