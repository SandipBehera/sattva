import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slides = [
    {image: "assets/img/sattva/Lake-Ridge-banner-2.webp"},
    {image: "assets/img/sattva/Semi-Aerial_Eminence_1-scaled.webp"},
    {image: "assets/img/sattva/gallery10.webp"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
