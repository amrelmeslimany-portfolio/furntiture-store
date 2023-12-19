import { CSSSelector, SwiperOptions } from "swiper/types";

export class NavigationSettings {
	private previousClassname: CSSSelector;
	private nextClassname: CSSSelector;

	constructor(previousClassname: CSSSelector, nextClassname: CSSSelector) {
		this.previousClassname = previousClassname;
		this.nextClassname = nextClassname;
	}

	get getOptions(): SwiperOptions["navigation"] {
		return {
			prevEl: this.previousClassname,
			nextEl: this.nextClassname,
			disabledClass: "bg-opacity-20 bg-secondary",
		};
	}

	get getClasses() {
		return {
			prev: this.classToString(this.previousClassname),
			next: this.classToString(this.nextClassname),
		};
	}

	private classToString(className: CSSSelector): string {
		return className.slice(1);
	}
}
