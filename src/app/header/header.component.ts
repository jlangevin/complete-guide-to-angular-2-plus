import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@Output() pageChanged = new EventEmitter<string>();

	constructor() { }

	ngOnInit() {
	}

	changePage(page: string) {
		console.log('this.changePage', page);
		this.pageChanged.emit(page);
	}

}
