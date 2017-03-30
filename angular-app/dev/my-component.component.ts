import {Component, OnInit} from 'angular2/core';
import {TestComponent} from './test.component';

@Component({
    selector: 'my-component',
    template: `
        HI, I'm <span [style.color]="inputElement.value === 'yes'?'red':''" >{{name}}</span> -
        
        and this is my very first Angular 2 Component! 


  <span [class.is-awesome]="inputElement.value === 'yes'">it's awesome!</span>
  <br/>
  <input type="text" #inputElement (keyup)="0">
  <br><br>

  <button [disabled]="inputElement.value !== 'yes'">Only enable if yes was entered</button>
  <test></test>

    `,
    styleUrls: ['src/css/mycomponent.css'],
    directives: [TestComponent],
    
})
export class MyComponentComponent implements OnInit
{

    name: string;

    ngOnInit() {
            this.name = "Carlos";
        }


    

    

}

