import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  public color: string;
  public description: string;
  public cmpName: string = 'ComponentA';
  private toggle: boolean = false;
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.allActiveEvents[this.cmpName] = [];
    this.sharedService.allActiveEvents[this.cmpName].push({
      keyCombo: 'Shift A',
      description: 'Toggle component A color',
      color: 'green'
    });
  }
  public callback($evt, i: number) {
    if( $evt ) {
      this.toggle = !this.toggle;
      this.color = this.toggle ?  this.sharedService.allActiveEvents[this.cmpName][i].color : null;
    }
  }
}
