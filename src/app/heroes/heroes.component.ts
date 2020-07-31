import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes: Hero[];

  //this is a dead code, no more selectedHero
  // selectedHero: Hero;

  //inject the hero service
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  //no more need for this method since we added routing to hero detail page.
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`Heroes Component: Selected hero id ${hero.id}`);
  // }

  //method that retrieve the heroes from the service
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  //since getHereos method return observable<Hero[]> we need to adjust it
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
