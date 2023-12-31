import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http'
import { HousingService } from './services/housing.service';
import { Routes,RouterModule } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
const appRoutes:Routes=[

  {path: '',component:PropertyListComponent},

  {path: 'add-property',component:AddPropertyComponent},
  {path:'rent-property', component:PropertyListComponent},
  {path:'property-detail/:id', component:PropertyDetailComponent},
  {path:'user/login', component:UserLoginComponent},
  {path:'user/register', component:UserRegisterComponent},
  {path :'**',component:PropertyListComponent} //** ==>is used for rendering page for wrong url;


]


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
    
  
    

    

  ],
  providers: [HousingService,UserServiceService,AlertifyService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
