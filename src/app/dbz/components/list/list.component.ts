import { Component, Input ,EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { core } from '@angular/compiler';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('characterInput')
  public characterList: Character[] = [
    {

      name:'Vegeta',
      power:7000
    },
    {

      name:'Bills',
      power:12000
    }
  ]

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter;


 onDeleteCharacter(id?: string) :void {
     console.log({id});
     if (!id) return;

     this.onDelete.emit(id)

  }

}
