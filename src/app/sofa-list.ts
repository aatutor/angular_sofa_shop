import { Input, Component } from "@angular/core";
// import {FormsModule} from '@angular/forms';
import { DataService } from './data.service';
     
@Component({
    selector: "list-products",
    standalone: true,
    templateUrl: `./sofa-list.html`,
		styleUrls: [ `./sofa-list.css` ]
})
export class SofaListComponent {
		basket = [];
		list: any[] = [];
		
		constructor(private dataService: DataService) {}

		ngOnInit() {
			this.dataService.getData().subscribe((response) => {
				this.list = response;
			});
		}

		@Input()
		set target(select: string) {
			this.dataService.getFilter(select).subscribe((response) => {
				this.list = response;
			});
		}
}