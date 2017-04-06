import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from "./contact";
//<!--[class.clicked]="contact.firstName === 'c' && showDetail === true"-->

@Component({
    selector: 'contact',
    template: `
        <div>

            <div>
                <label for="first-name" >First Name:</label>
                <input [(ngModel)]="contact.firstName" type="text" id="first-name">
            </div>
            <div>
                <label for="last-name" >Last Name:</label>
                <input [(ngModel)]="contact.lastName" type="text" id="last-name">
            </div>

            <div>
                <label for="phone" >Phone Number:</label>
                <input [(ngModel)]="contact.phone" type="text" id="phone">
            </div>

            <div>
                <label for="email" >Email:</label>
                <input [(ngModel)]="contact.email" type="text" id="email">
            </div>
            <button (click) = "onCreateNew()" >Create a new contact from this contact</button>
        </div>
    `,
    inputs: ["contact"],

    styles: [
        `
        label {
            display: inline-block;
            width: 140px
        }

        input {
            width: 250px;
        }

        `
    ]

})
export class ContactComponent 
{
    public contact: Contact = null;

    onCreateNew(){ 
        //this._router.navigate(['NewContactFromContact', {lastName: this.contact.lastName}])
        this._router.navigate(['NewContact', {lastName: this.contact.lastName}])

    }

    constructor(private _router:Router)
    {
        

    }




}


