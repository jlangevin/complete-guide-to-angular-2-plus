import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	page = 'recipes';

	onChangePageEmitted(page: string) {
		console.log('onChangePageEmitted:', page);
		this.page = page;
	}
}
