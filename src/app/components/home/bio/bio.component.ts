import { trigger, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from 'src/app/app.component';

@Component({
	selector: 'app-bio',
	templateUrl: './bio.component.html',
	styleUrls: ['./bio.component.scss'],
	animations: [
		trigger('fadePadding', [
			transition(':enter', [
				style({ opacity: 0, transform: 'translateX(-100%)' }),
				animate(
                    '500ms',
                    style({ opacity: 1, transform: 'translateX(0%)' })
				),
			]),
			transition(':leave', [
                style({ opacity: 1, transform: 'translateX(0%)' }),
				animate(
					'500ms',
					style({ opacity: 0, transform: 'translateX(-100%)' })
				),
			]),
		]),
		trigger('fadeSlide', [
			transition(':enter', [
				style({ opacity: 0, transform: 'translateX(100%)', position: "absolute" }),
				animate(
					'500ms',
					style({ opacity: 1, transform: 'translateX(0%)', position: "absolute" })
				),
			]),
			transition(':leave', [
                style({ opacity: 1, transform: 'translateX(0%)', position: "absolute" }),
				animate(
					'500ms',
					style({ opacity: 0, transform: 'translateX(100%)', position: "absolute" })
				),
			]),
		]),
	],
})
export class BioComponent implements OnInit {

    href: string = AppComponent.href;
	faX = faArrowCircleLeft;
	exNum: number = 0;

	constructor() {}

	ngOnInit(): void {}

	expand(num: number): void {
		this.exNum = num;
	}
}
