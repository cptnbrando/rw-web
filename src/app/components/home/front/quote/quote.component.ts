import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.scss'],
	animations: [
		trigger('fadeSlideInOut', [
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
export class QuoteComponent implements OnInit {
	quotes: string[] = [
		'This is the generation',
		'We will rise together',
		'Stand for God',
		"Bring God's light",
		'The lost will be found',
		'The power is ours',
	];

	quote: string = '';

	constructor() {}
    
	ngOnInit(): void {
        this.quote = this.getRandomQuote();
	}

	getRandomQuote(): string {
		const newQuote =
			this.quotes[Math.floor(Math.random() * this.quotes.length)];
		return newQuote;
	}
}
