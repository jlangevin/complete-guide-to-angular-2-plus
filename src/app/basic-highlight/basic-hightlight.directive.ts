/*
* While this method works, it is bad practice.  It assumes there
* will be a DOM.  But many environments this app could run in won't
* have a DOM to alter.  Use the renderer in Better Higlight for this.
*/

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
	selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
	constructor(private elementRef: ElementRef) {}

	ngOnInit() {
		this.elementRef.nativeElement.style.backgroundColor = 'green';
	}
}