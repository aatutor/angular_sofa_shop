import { Input, Component } from "@angular/core";
// import {FormsModule} from '@angular/forms';
     
@Component({
    selector: "list-products",
    standalone: true,
    templateUrl: `./sofa-list.html`,
		styleUrls: [ `./sofa-list.css` ]
})
export class SofaListComponent {
		@Input() target = '';
		list = [
			{ name: 'Кожанный', price: 1000, color: 'brown' },
			{ name: 'Мягкий', price: 500, color: 'gray' },
		];
		basket = [];
}