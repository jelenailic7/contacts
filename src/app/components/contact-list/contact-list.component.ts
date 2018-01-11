import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts;
  searchTerm = '';
  constructor(private contactsService: ContactsService) { 
    this.contacts =  this.contactsService.getContacts(); 
} 

removeContact(contact) {
  let index = this.contacts.indexOf(contact);
  this.contacts.splice(index,1);
}

  ngOnInit() {
  }

}
