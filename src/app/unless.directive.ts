import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
	// set turns this into the a method that gets set every time the attribute changes
	@Input() set appUnless(condition: boolean) {
		if (!condition) {
			this.vcRef.createEmbeddedView(this.templateRef);
		} else {
			this.vcRef.clear();
		}
	}

	constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
}
