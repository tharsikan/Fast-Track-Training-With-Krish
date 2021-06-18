import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pet } from '../Pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-home',
  templateUrl: './pet-home.component.html',
  styleUrls: ['./pet-home.component.scss'],
})
export class PetHomeComponent implements OnInit {
  pets$!: Observable<Pet[]>;
  refreshPets$ = new BehaviorSubject<boolean>(true);

  constructor(public petService: PetService) {}

  ngOnInit(): void {
    this.refreshPets$.next(false);
    this.pets$ = this.petService.getAll();
    this.refreshPets$.subscribe(l => console.log(l));
  }
}
