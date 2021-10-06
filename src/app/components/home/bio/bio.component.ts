import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-bio',
	templateUrl: './bio.component.html',
	styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {

    faX = faArrowCircleLeft;
    exNum: number = 0;

	constructor() {}

	ngOnInit(): void {}

    expand(num: number): void {
        
        this.exNum = num;
    }
}
