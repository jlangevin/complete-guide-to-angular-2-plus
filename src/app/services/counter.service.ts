import { Injectable } from '../../../node_modules/@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
	userMoves = {
		active: 0,
		inactive: 0
	};

	logUserMove(type: string) {
		this.userMoves[type]++;
	}
}