import {Component, Input, OnInit} from '@angular/core';
import {Battle} from '../../shared/models/battle/battle';

@Component({
  selector: 'app-battle-arena',
  templateUrl: './battle-arena.component.html',
  styleUrls: ['./battle-arena.component.css']
})
export class BattleArenaComponent implements OnInit {
  public static ArenaNumber = 2;

  @Input()
  battle: Battle;
  chooseArena: string;

  ngOnInit(): void {
      const randArena = Math.floor(Math.random() * BattleArenaComponent.ArenaNumber) + 1;
      this.chooseArena = `/assets/pictures/arenas/${randArena}.png`;
  }
}
