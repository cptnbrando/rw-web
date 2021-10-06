import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.scss'],
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
