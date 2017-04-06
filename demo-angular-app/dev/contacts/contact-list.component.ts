import { Component, OnInit } from 'angular2/core';
import { ContactComponent } from "./contact.component";
import { ContactService } from "./contact.service";
import { Contact } from "./contact";

//<!--[class.clicked]="contact.firstName === 'c' && showDetail === true"-->

@Component({
    selector: 'contact-list',
    template: `
        <ul>
            <li *ngFor="#contact of contacts"
            (click)="onSelect(contact)"
            [class.clicked]="selectedContact === contact"
            >{{contact.firstName}} {{contact.lastName}}
            </li>
        </ul>
        <contact *ngIf = "selectedContact != null" [contact] = selectedContact ></contact>
    `,
    styleUrls: ["../src/css/contact-list.css"],
    directives: [ContactComponent],
    providers: [ContactService],
})
export class ContactListComponent implements OnInit {

    ngOnInit():any 
    {
       this.getContacts()
    }


    public contacts: Contact[];

    constructor(private _contactservice: ContactService)
    {


    }

    getContacts()
    {
        this._contactservice.getContacts().then((contacts: Contact[]) => this.contacts = contacts)

    }



    public showDetail = false;
    public selectedContact = null;

    onSelect(contact)
    {
        this.selectedContact = contact;
    }


}


