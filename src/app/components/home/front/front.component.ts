import { Component, OnInit } from '@angular/core';

declare var Sakura: any;

@Component({
	selector: 'app-front',
	templateUrl: './front.component.html',
	styleUrls: ['./front.component.scss'],
})
export class FrontComponent implements OnInit {
    quotes: string[] = [
        "This is the generation",
        "We will rise together",
        "Stand for God",
        "Bring God's light",
        "The lost will be found",
        "The power is ours"
    ];

	constructor() {}

	ngOnInit(): void {
        this.initSakura();
        this.changeQuote();
	}

    changeQuote(): void {
        const quote = document.querySelector("#quote");
        if(quote) quote.innerHTML = this.quotes[Math.floor(Math.random()*this.quotes.length)];
    }

    initSakura(): void {
        const sakura = new Sakura('#sakuraLeaves', {
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
