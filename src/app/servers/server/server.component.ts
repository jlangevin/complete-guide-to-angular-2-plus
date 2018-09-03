import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
		private serversService: ServersService,
		private route: ActivatedRoute,
		private router: Router
	) { }

  ngOnInit() {
		const id = +this.route.snapshot.params['id'];
	  this.server = this.serversService.getServer(id);
		this.route.params.subscribe(
			(params: Params) => {
				this.server = this.serversService.getServer(+params.id);
			}
		)
  }

	onEdit() {
		this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
		// Since we're already on the /servers/:id/ path, we can simply use a relative
		// path above instead of bruilding the complete url from scratch below
		// this.router.navigate(['/servers', this.server.id, 'edit']);
	}

}
