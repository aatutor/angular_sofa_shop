import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from "@angular/router";

// компоненты, которые сопоставляются с маршрутами
import {HomeComponent} from "./app/home.component";
import {CardComponent} from "./app/card.component";
import {BasketComponent} from "./app/basket.component";
 
// определение маршрутов
const appRoutes: Routes =[
	{ path: "", component: HomeComponent},
	{ path: "card", component: CardComponent},
	{ path: "basket", component: BasketComponent},
];

bootstrapApplication(AppComponent, 
	{
		providers: [
			provideHttpClient(),
			provideRouter(appRoutes)
		],
	}
	/*, appConfig*/
	)
  .catch((err) => console.error(err));
