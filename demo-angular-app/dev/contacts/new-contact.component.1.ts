// import {Component, OnInit} from 'angular2/core';
// import { ContactService } from "./contact.service";
// //<!--[class.clicked]="contact.firstName === 'c' && showDetail === true"-->
// import { Contact } from "./contact";
// import { Router, RouteParams} from 'angular2/router';
// @Component({
//     selector: 'new-contact',
//     template: `
//       <div>

//             <div>
//                 <label for="first-name" >First Name:</label>
//                 <input type="text" id="first-name" #firstName>
//             </div>
//             <div>
//                 <label for="last-name" >Last Name:</label>
//                 <input type="text" id="last-name" #lastName value={{passedlastName}}>
//             </div>

//             <div>
//                 <label for="phone" >Phone Number:</label>
//                 <input type="text" id="phone" #phone>
//             </div>

//             <div>
//                 <label for="email" >Email:</label>
//                 <input type="text" id="email" #email>
//             </div>
//             <button (click)="onAddContact(firstName.value, lastName.value, phone.value, email.value)" >Create Contact</button>
//         </div>
//     `,

//     styles: [
//         `
//         label {
//             display: inline-block;
//             width: 140px
//         }

//         input {
//             width: 250px;
//         }

//         `
//     ],
//     providers: [ContactService],

// })
// export class NewContactComponent implements OnInit
// {
//     public passedlastName = "";
//         ngOnInit() 
//         {
//             this.passedlastName = this._routeParams.get('lastName');
            
//         }


//     constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams)
//     {

//     }

//     onAddContact(firstName, lastName, phone, email)
//     {
//         // const dummyContact = {firstName: "Dummy", lastName: "Contact", phone: "", email: "" };

//         let contact: Contact = {firstName: firstName, lastName: lastName, phone: phone, email: email };
//         this._contactService.insertContact(contact);
//         this._router.navigate(['Contacts']);

//     }
    




// }


