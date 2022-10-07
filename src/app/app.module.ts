//////////////-----------------ModulesMaterials-----------------////////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
//////////////-----------------Module----------------------///////////////
import { HttpClientModule } from "@angular/common/http";

//////////////-----------------Components-----------------////////////////
import { StockHomeComponent } from './stock/stock-home/stock-home.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';
import { StockEditComponent } from './stock/stock-edit/stock-edit.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfilesHomeComponent } from './component/profiles/profiles-home/profiles-home.component';
import { ProfilesEditComponent } from './component/profiles/profiles-edit/profiles-edit.component';
import { ProfilesCreateComponent } from './component/profiles/profiles-create/profiles-create.component';
import { MenuComponent } from './component/menu/menu.component';
import { WaiverHomeComponent } from './component/waiver/waiver-home/waiver-home.component';
import { WaiverCreateComponent } from './component/waiver/waiver-create/waiver-create.component';
import { WaiverEditComponent } from './component/waiver/waiver-edit/waiver-edit.component';
import { HistoryHomeComponent } from './component/history-waiver/history-home/history-home.component';
import { PrintHomeComponent } from './component/print-waiver/print-home/print-home.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    StockHomeComponent,
    StockCreateComponent,
    StockEditComponent,
    LoginComponent,
    RegisterComponent,
    ProfilesHomeComponent,
    ProfilesEditComponent,
    ProfilesCreateComponent,
    MenuComponent,
    WaiverHomeComponent,
    WaiverCreateComponent,
    WaiverEditComponent,
    HistoryHomeComponent,
    PrintHomeComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
