import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  voitures = [
    { id: '1', nom: 'Voiture 1', image: '../assets/kia.jpg', details: 'hvv'},
    { id: '2', nom: 'Voiture 2', image: '../assets/porsche.png', details: 'hvv'},
    { id: '3', nom: 'Voiture 3', image: '../assets/ferrari.jpg', details: 'hvv'},
    { id: '4', nom: 'Voiture 4', image: '../assets/mercedes.jpg', details: 'hvv'},
    { id: '5', nom: 'Voiture 5', image: '../assets/bmw.jpg', details: 'hvv'},
    { id: '6', nom: 'Voiture 6', image: '../assets/lambo.jpeg', details: 'hvv'},

  ];

  ajouterVoiture() {
    console.log('Voiture ajoutée !');
  }
}
