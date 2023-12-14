import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailComponent implements OnInit {
  cars = [
    { id: 1, name: 'Car1', model: 'kia', year: 2022, color: 'white', price: '850dt/jour', imageUrl: '../assets/kia.jpg' },
    { id: 2, name: 'Car2', model: 'porsche', year: 2021, color: 'gray', price: '900dt/jour', imageUrl: '../assets/porsche.png' },
    { id: 3, name: 'Car3', model: 'ferrari', year: 2023, color: 'yellow',  price: '2500dt/jour',imageUrl: '../assets/ferrari.jpg' },
    { id: 3, name: 'Car4', model: 'mercedes', year: 2023, color: 'white',  price: '600dt/jour',imageUrl: '../assets/mercedes.jpg' },
    { id: 3, name: 'Car5', model: 'bmw', year: 2023, color: 'white',  price: '500dt/jour',imageUrl: '../assets/bmw.jpg' },
    { id: 3, name: 'Car6', model: 'lambo', year: 2023, color: 'red',  price: '4500dt/jour',imageUrl: '../assets/lambo.jpeg' },
  ];

  showDetails = false; // Ajout de cette variable pour contrôler l'affichage des détails

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}