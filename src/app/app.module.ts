import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    LayoutComponent,
    NavBarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
