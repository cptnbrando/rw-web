import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    faFacebook = faFacebookSquare;
    faInstagram = faInstagramSquare;
    faYoutube = faYoutubeSquare;

    constructor() { }

    ngOnInit(): void {
    }

}
