import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

declare var Sakura: any;

@Component({
	selector: 'app-front',
	templateUrl: './front.component.html',
	styleUrls: ['./front.component.scss'],
    animations: [
		trigger('fadeIn', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate(
					'1s ease-in',
					style({ opacity: 1 })
				),
			]),
		]),
	],
})
export class FrontComponent implements OnInit {

	constructor() {}

    sakura: any;

	ngOnInit(): void {
        this.initSakura();
	}

    initSakura(): void {
        this.sakura = new Sakura('#sakuraLeaves', {
			maxSize: 50,
			minSize: 20,
            colors: [
                {
                    gradientColorStart: 'rgba(255, 183, 197, 1)',
                    gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
                    gradientColorDegree: 120,
                },
                {
                    gradientColorStart: 'rgba(255, 255, 255, 0.8)',
                    gradientColorEnd: 'rgba(255, 20, 147, 0.8)',
                    gradientColorDegree: 60,
                },
                {
                    gradientColorStart: 'rgb(212, 152, 163)',
                    gradientColorEnd: 'rgb(242, 185, 196)',
                    gradientColorDegree: 120,
                },
                {
                    gradientColorStart: 'rgba(255, 192, 0, 0.5)',
                    gradientColorEnd: 'rgba(255, 189, 189, 0.9)',
                    gradientColorDegree: 60,
                },
            ],
		});
    }
}
