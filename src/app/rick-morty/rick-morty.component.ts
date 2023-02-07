import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Characters } from 'src/utils/interfaces/characters';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.scss']
})
export class RickMortyComponent {
  characters$: Subscription;
  characters: Characters = {} as Characters

  constructor(private service: ApiService){
    this.characters$ = this.service.getCharacters().subscribe((data) => {
      this.characters = data;
    });
  }
}


