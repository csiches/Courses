import { Component } from 'angular2/core';
import { ContactListComponent } from "./contacts/contact-list.component";
import { ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

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
    directives: [ContactListComponent]
})
@RouteConfig(
    [
        {path: '/contacts', name: 'Contacts', component: ContactListComponent},
        {path: '/newcontact', name: 'Newcontact', component: ContactListComponent}
    ]
)
export class AppComponent {



}


