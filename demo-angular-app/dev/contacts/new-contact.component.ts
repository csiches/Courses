//WITH FORMBUILDER

import {Component, OnInit} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import { ContactService } from "./contact.service";
//<!--[class.clicked]="contact.firstName === 'c' && showDetail === true"-->
import { Contact } from "./contact";
import { Router, RouteParams} from 'angular2/router';


@Component({
    selector: 'new-contact',
    template: `
      <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">

            <div>
                <label for="first-name" >First Name:</label>
                <input type="text" id="first-name" 
                [ngFormControl]="myForm.controls['firstName']"
                #firstName="ngForm"
                >
                <span *ngIf="!firstName.valid">not valid</span>
            </div>
            <div>
                <label for="last-name" >Last Name:</label>
                <input type="text" id="last-name"  
                [ngFormControl]="myForm.controls['lastName']"
                >
            </div>

            <div>
                <label for="phone" >Phone Number:</label>
                <input type="text" id="phone"  
                [ngFormControl]="myForm.controls['phone']"
                >
            </div>

            <div>
                <label for="email" >Email:</label>
                <input type="text" id="email" 
                [ngFormControl]="myForm.controls['email']"
                >
            </div>
            <button type = "submit" [disabled]="!myForm.valid" >Create Contact</button>
        </form>
    `,

    styles: [
        `
        label {
            display: inline-block;
            width: 140px
        }

        input {
            width: 250px;
        }

        .ng-invalid{
            border: 1px solid red;


        }

        `
    ],
    providers: [ContactService],

})
export class NewContactComponent implements OnInit
{
    myForm: ControlGroup;

        ngOnInit(): any 
        {
            this.myForm = this._formBuilder.group({
                'firstName': ['',Validators.required],
                'lastName': [this._routeParams.get('lastName'),Validators.required],
                'phone': ['',Validators.required],
                'email': ['',Validators.required]


            })
            
        }

    onSubmit(value)
    {
        this._contactService.insertContact(value);
        this._router.navigate(['Contacts']);


    }        


    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams, private _formBuilder: FormBuilder)
    {

    }

    // onAddContact(firstName, lastName, phone, email)
    // {
    //     // const dummyContact = {firstName: "Dummy", lastName: "Contact", phone: "", email: "" };

    //     let contact: Contact = {firstName: firstName, lastName: lastName, phone: phone, email: email };
    //     this._contactService.insertContact(contact);
    //     this._router.navigate(['Contacts']);

    // }
    




}


