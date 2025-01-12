import { Component } from "@angular/core";
import {FormsModule} from '@angular/forms';
import { SofaListComponent } from "./sofa-list";
     
@Component({
    selector: "home-app",
    standalone: true,
    imports: [FormsModule, SofaListComponent],
    templateUrl: `./home.component.html`,
		styleUrls: [ `./home.component.css` ]
})
export class HomeComponent { 
    name= 'на диване';
		search = '';
}
