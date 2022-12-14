import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('media_query') mobileQueryMax: boolean | undefined;
  @Output() navtoggle = new EventEmitter();
  @Output() sayHi = new EventEmitter<string>();

  mailNoti = 16
  noti = 15
  report = 2

  imgLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png?20160527092314';

  constructor() { }

  ngOnInit(): void {
  }

  clickSidenavToggle() {
    this.navtoggle.emit();
    this.sayHi.emit('menuที่1 ไม่มีอะไร menuที่2ก็ไม่มีอะไร เพราะยังไม่ได้ทำอะไร');
  }

  SWARedial() {
    Swal.fire({
      icon: 'error',
      title: 'ขออภัย',
      text: 'เรายังไม่ได้ทำใน่ส่วนนี้',
      footer: '<a href="https://www.facebook.com/asree.hayeema/">โปนติดต่อ Developer เพื่อแจ้งปัญหา</a>'
    })
  }

  SWAimg() {
    Swal.fire({
      imageUrl: 'https://shanebart-cdn.azureedge.net/wp-content/uploads/2021/11/3h5gjh43gj5hhg43j-1-279x300.png',
      imageHeight: 500,
      imageAlt: 'A tall image'
    })
  }

  SWAWarn() {
    Swal.fire({
      title: 'บอกแล้วอย่ากดพี่พลออกมาเลยเห็นไหม',
      width: 600,
      padding: '3em',
      color: '#fff',
      background: '#7285C3 url(https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.15752-9/300018056_5758639744168172_961567393489229698_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFmHKc5HoFgAB0_zmkkbWYy3ZBGQoTs9a_dkEZChOz1rx-tkRqpOkVfx7fufXgbiVCaRcIvE_OI4HsAtdn1ojBm&_nc_ohc=ZxeLUS7U408AX-J_SIC&_nc_ht=scontent.fbkk5-5.fna&oh=03_AVL3nFCiaGkoXh9hSynjiI2b_1P504GRlKZTDzaNfEM3Vg&oe=632D94EB)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://cdn.kibrispdr.org/data/1757/best-gifs-25.gif")
        left top
        no-repeat
      `
    })
  }

  reportEven() {
    Swal.fire({
      title: 'โปรดแจ้งปัญหาโยกสารส่ง Mail GitHub',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })
  }

}
