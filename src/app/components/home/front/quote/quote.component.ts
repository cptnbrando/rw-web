import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fadeInLeft } from 'ng-animate';
import { Teximate, TextAnimation } from 'ngx-teximate';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit, OnDestroy {
	quotes: string[] = [
		'This is the generation',
		'We will rise together',
		'Stand for God',
		"Bring God's light",
		'The lost will be found',
		'The power is ours',
	];

    quote: string = '';
    timer!: Subscription;

    @ViewChild(Teximate) teximate!: Teximate;

    enterAnimation: TextAnimation = {
        id: 'custom',
        animation: fadeInLeft,
        delay: 100,
        type: 'letter'
    };

	constructor() {}

    ngOnDestroy(): void {
        // this.timer.unsubscribe();
    }

	ngOnInit(): void {
        this.quote = this.getRandomQuote();
    }

	changeQuote(): string {
		this.quote = this.getRandomQuote();
        return this.quote;
	}

    getRandomQuote(): string {
        let newQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        while(this.quote === newQuote) newQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        return newQuote;
    }
}
