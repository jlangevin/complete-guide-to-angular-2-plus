import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
	userMoves: {};

	constructor(private counterService: CounterService) { }

	ngOnInit() {
		this.userMoves = this.counterService.userMoves;
	}

}
