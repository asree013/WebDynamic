import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profile } from 'src/app/models/profile.model';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-profiles-create',
  templateUrl: './profiles-create.component.html',
  styleUrls: ['./profiles-create.component.css']
})
export class ProfilesCreateComponent implements OnInit {

  imagePreview: string | ArrayBuffer | null |undefined;
  file: File | undefined;

  constructor(private networkService: NetworkService, private location :Location) { }

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

  onSubmit(ProfileForm : NgForm){

    if (ProfileForm.invalid){
      return;
    }

    const value = ProfileForm.value;
    let profiles = new Profile();
    profiles.firstName = value.firstName;
    profiles.lastName = value.lastName;
    profiles.idStudent = value.lastName;
    profiles.idCard = value.idCard;
    profiles.tellNumber = value.tellNumber;
    profiles.nameDad = value.nameDad;
    profiles.nameMon = value.nameMon;
    profiles.homeNumber = value.homeNumber;
    profiles.moo = value.moo;
    profiles.soi = value.soi;
    profiles.subDistrict = value.subDisterict;
    profiles.district = value.district;
    profiles.province = value.province;
    profiles.zipCode = value.zipCode;
    profiles.image = this.file

    console.log(profiles);
    // this.networkService.addProduct(product).subscribe(
    //   data => {
    //     this.location.back()
    //   },
    //   error => {
    //     alert(error.error.message)
    //   }
    // )
  }
}
