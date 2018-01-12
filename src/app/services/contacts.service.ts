import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ContactsService {

  constructor(private _httpClient: HttpClient) { 
   
  }

  public getContacts() { 
   // console.log(this._httpClient.get<any[]>('http://localhost:8000/contacts.php'));
    return this._httpClient.get<any[]>('http://localhost:8000/contacts.php');
   
   
}
getMessage()
{
 return "Hello Jecika hehe";
}


}
