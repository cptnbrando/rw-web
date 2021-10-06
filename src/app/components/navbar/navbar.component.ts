import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faBars, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
    animations: [
		trigger('fadeIn', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate(
					'.6s ease-in',
					style({ opacity: 1 })
				),
			])
		]),
		trigger('sizin', [
			transition(':enter', [
				style({ transform: "scaleY(0)", position: "absolute" }),
				animate(
					'.6s ease-in',
					style({ transform: "scaleY(1)", position: "absolute" })
				),
			]),
			transition(':leave', [
				style({ transform: "scaleY(1)", position: "absolute" }),
				animate(
					'.6s ease-in',
					style({ transform: "scaleY(0)", position: "absolute" })
				),
			]),
		])
	],
})
export class NavbarComponent implements OnInit {

	faBars = faBars;
    faMinus = faMinus;

    menu: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
