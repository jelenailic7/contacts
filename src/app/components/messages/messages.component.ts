import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  message = '';
  constructor(private contactsService: ContactsService) { 
    this.message = this.contactsService.getMessage();
  }

  ngOnInit() {
  }

}
