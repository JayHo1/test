import { Directive, Input, ElementRef } from '@angular/core';


@Directive({
	selector: '[appCarousel]'
})

export class CarouselDirective {
	@Input() options: object;

	$owlElement: any;

	defaultOptions: object = {};

	constructor(private el: ElementRef) {}

	ngAfterViewInit() {
		for (var key in this.options) {
			this.defaultOptions[key] = this.options[key];
		}
		this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);
	}

	ngOnDestroy() {
		this.$owlElement.owlCarousel('destroy');
		this.$owlElement = null;
	}
}