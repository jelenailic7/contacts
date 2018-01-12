import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {  HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactsService } from './services/contacts.service';

const appRoutes: Routes = [
  {path:'contacts',component: ContactListComponent },
  {path:'contacts/:id',component: ContactListComponent },
  {path:'messages',component: MessagesComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    LayoutComponent,
    NavbarComponent,
    MessagesComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
