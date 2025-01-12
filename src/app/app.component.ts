import { Component} from "@angular/core";
import { RouterOutlet} from "@angular/router";
 
@Component({
	selector: "my-app",
	standalone: true,
	imports: [RouterOutlet],
	template: `<div><router-outlet></router-outlet></div>`,
})
export class AppComponent {}