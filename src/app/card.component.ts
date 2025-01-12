import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { DataService } from './data.service';

@Component({
    selector: "my-app",
    templateUrl: `./card.component.html`,
		styleUrls: [ `./card.component.css` ]
})
export class CardComponent { 
	name: string='идеальный';
	price: number=999999;
	color: string='великолепный';
	img: string='noindex.jpg';

	constructor(private route: ActivatedRoute, private dataService: DataService) {
		route.queryParams.subscribe((query: Params) => {
			this.name = query['name'];
			this.dataService.getSofa(this.name).subscribe((response) => {
				this.price = response['price'];
				this.color = response['color'];
				this.img = response['img'];
			});
		});
	}
}
