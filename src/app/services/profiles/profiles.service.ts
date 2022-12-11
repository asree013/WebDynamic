import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { profileResponse, Profile } from 'src/app/models/profile.model';


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getprofile(): Observable<profileResponse[]> {
    return this.httpClient.get<profileResponse[]>(`${environment.baseURL}profile`)
  }
  //edit
  getProfileOne(id: number){
    return this.httpClient.get<any>(`${environment.baseURL}product/${id}`)
  }

  // editProfile(id: number, profile: profileResponse) {
  //   return this.httpClient.put<profileResponse>(`${environment.baseURL}profile/${id}`, this.makeFormData(profile))
  // }

  getProductImageURL(image: string): string {
    if (image) {
      return `${environment.baseURL}images/${image}`
    }
    return 'assets/images/no-images.jpg'
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.baseURL}product/${id}`)
  }

  // addProduct(product: Profile): Observable<profileResponse> {
  //   return this.httpClient.post<profileResponse>(`${environment.baseURL}product/`, this.makeFormData(product))
  // }

  // makeFormData(profile: Profile): FormData{
  //   // const formData = new FormData();
  //   // formData.append('name', profile.name)
  //   // formData.append('price', `${profile.price}`)
  //   // formData.append('stock', `${profile.stock}`)
  //   // formData.append('photo', profile.image)
  //   // return formData
  // }
}
