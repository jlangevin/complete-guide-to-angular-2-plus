import { Injectable } from '../../../node_modules/@angular/core';
import { CounterService } from './counter.service';

// Old way and app.module.ts would import and add service in the providers array
// @Injectable()

// New way as of Angular 6
@Injectable({providedIn: 'root'})
export class UsersService {
	activeUsers = ['Max', 'Anna'];	
	inactiveUsers = ['Chris', 'Manu'];

	constructor(
		private counterService: CounterService
	) {}

	setToInactive(id: number) {
		this.inactiveUsers.push(this.activeUsers[id]);
		this.activeUsers.splice(id, 1);
		this.counterService.logUserMove('inactive');
	}

	setToActive(id: number) {
		this.activeUsers.push(this.inactiveUsers[id]);
		this.inactiveUsers.splice(id, 1);
		this.counterService.logUserMove('active');
	}
}