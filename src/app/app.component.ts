import { Component } from "@angular/core";
import {FormsModule} from '@angular/forms';
import { SofaListComponent } from "./sofa-list";
     
@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule, SofaListComponent],
    templateUrl: `./app.component.html`,
		styleUrls: [ `./app.component.css` ]
})
export class AppComponent { 
    name= 'на диване';
		search = 'диван';
}