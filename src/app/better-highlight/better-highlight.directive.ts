import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {
	@Input() defaultColor: string = 'transparent';
	@Input('appBetterHighlight') highlightColor: string = 'blue';

	// You can use HostBinding instead of renderer.  You pass a string that references 
	// which property of the host element you want to bind to.
	@HostBinding('style.backgroundColor') backgroundColor: string;

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		// this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
		this.backgroundColor = this.defaultColor;
	}

	@HostListener('mouseenter') mouseenter(eventData: Event) {
		// this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
		this.backgroundColor = this.highlightColor;
	}

	@HostListener('mouseleave') mouseleave(eventData: Event) {
		// this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
		this.backgroundColor = this.defaultColor;
	}
}