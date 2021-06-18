import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pet, PetType } from '../Pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-home',
  templateUrl: './pet-home.component.html',
  styleUrls: ['./pet-home.component.scss'],
})
export class PetHomeComponent implements OnInit {
  pets$!: Observable<Pet[]>;
  pet$!: Observable<Pet>;
  refreshPets$ = new BehaviorSubject<boolean>(true);
  public petType: typeof PetType = PetType;
  constructor(public petService: PetService) {}

  ngOnInit(): void {
    this.refreshPets$.next(false);
    this.pets$ = this.petService.getAll();
    this.refreshPets$.subscribe((l) => console.log(l));
  }
  delete(id: string, name: string): void {
    if (confirm('Are you sure to delete ' + name)) {
      this.petService.delete(id).subscribe((data) => {
        this.ngOnInit();
        console.log(data);
      });
    }
  }
  // update(id: string): void {
  //   console.log('hi hello ' + id);
  //   this.petService.getById(id).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
