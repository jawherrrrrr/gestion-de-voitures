import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  cars = [
    { id: 1, name: 'Car1', imageUrl: '../assets/kia.jpg' },
    { id: 2, name: 'Car2', imageUrl: '../assets/porsche.png' },
    { id: 3, name: 'Car3', imageUrl: '../assets/ferrari.jpg' },
    { id: 4, name: 'Car4', imageUrl: '../assets/mercedes.jpg' },
    { id: 5, name: 'Car5', imageUrl: '../assets/bmw.jpg' },
    { id: 6, name: 'Car6', imageUrl: '../assets/lambo.jpeg' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDetails(carId: number) {
    this.router.navigate(['/detail', carId]);
  }
}