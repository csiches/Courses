import { ContactListComponent } from "./contacts/contact-list.component";
import { NewContactComponent } from "./contacts/new-contact.component";

import { Component, OnInit } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http";
//import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

//<!--[class.clicked]="contact.firstName === 'c' && showDetail === true"-->

@Component({
    selector: 'app',
    template: `
    <header>
        <nav>
            <a [routerLink]="['Contacts']">Contacts</a>
            <a [routerLink]="['NewContact']">New Contact</a>
        </nav>
    </header>

    <div class="main">
        <router-outlet></router-outlet>
    </div>
        



    `,
    styleUrls: ["../src/css/app.css"],
    directives: [ContactListComponent,NewContactComponent,ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig(
    [
        {path: '/contact', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
        {path: '/newcontact', name: 'NewContact', component: NewContactComponent},
        {path: '/newcontact/:lastName', name: 'NewContactFromContact', component: NewContactComponent}
    ]
)
export class AppComponent {



}


