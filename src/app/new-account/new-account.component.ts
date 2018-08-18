import { Component } from '@angular/core';
// import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
//   providers: [LoggingService]
})
export class NewAccountComponent {
	constructor(
		// private loggingService: LoggingService,
		private accountsService: AccountsService
	) {
		this.accountsService.statusUpdated.subscribe(
			(status: string) => alert('New Status: ' + status)
		);
	}

	onCreateAccount(accountName: string, accountStatus: string) {
		this.accountsService.addAccount(accountName, accountStatus);

		// this.loggingService.logStatusChange(accountStatus);
		// While this technically would work, this is wrong in Angular
		// const service = new LoggingService();
		// service.logStatusChange(accountStatus);
	}
}
