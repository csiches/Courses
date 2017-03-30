import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
        <h3 
        (click)="onSelect()"
        [class.clicked]="showDetail === true"
        > {{contact.firstName}} {{contact.lastName}} </h3>

        <input type="text" [(ngModel)]="contact.firstName" />    
        <div *ngIf="showDetail === true">
            phone number: {{contact.phone}} <br>
            Email: {{contact.email}} 
        </div>

    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
    public contact = {firstName: "Carlos", lastName: "Siches", phone: "123 456 789", email: "csiches@live.com" }
    public showDetail = false;

    onSelect()
    {
        this.showDetail = true;

    }


}


