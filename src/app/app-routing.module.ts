import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProfilesCreateComponent } from './component/profiles/profiles-create/profiles-create.component';
import { ProfilesEditComponent } from './component/profiles/profiles-edit/profiles-edit.component';
import { ProfilesHomeComponent } from './component/profiles/profiles-home/profiles-home.component';
import { RegisterComponent } from './component/register/register.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';
import { StockEditComponent } from './stock/stock-edit/stock-edit.component';
import { StockHomeComponent } from './stock/stock-home/stock-home.component';
import { MenuComponent } from './component/menu/menu.component';
import { WaiverHomeComponent } from './component/waiver/waiver-home/waiver-home.component';
import { WaiverCreateComponent } from './component/waiver/waiver-create/waiver-create.component';
import { WaiverEditComponent } from './component/waiver/waiver-edit/waiver-edit.component';
import { HistoryHomeComponent } from './component/history-waiver/history-home/history-home.component';
import { PrintHomeComponent } from './component/print-waiver/print-home/print-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profiles', component: ProfilesHomeComponent },
  { path: 'profiles/create', component: ProfilesCreateComponent },
  { path: 'profile/edit', component: ProfilesEditComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'waiver', component: WaiverHomeComponent },
  { path: 'waiver/create', component: WaiverCreateComponent },
  { path: 'waiver/edit', component: WaiverEditComponent },
  { path: 'history', component: HistoryHomeComponent },
  { path: 'print', component: PrintHomeComponent },
  { path: 'stock', component: StockHomeComponent },
  { path: 'stock/create', component: StockCreateComponent },
  { path: 'stock/edit/:id', component: StockEditComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
