import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit {
  public color: string;
  public description: string;
  public cmpName: string = 'ComponentC';
  public toggle: boolean = false;
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.allActiveEvents[this.cmpName] = [];
    this.sharedService.allActiveEvents[this.cmpName].push({
      keyCombo: 'Alt Ctrl A',
      description: 'Toggle component C color',
      color: 'red'
    });
  }
  public callback($evt, i: number) {
    if( $evt ) {
      this.toggle = !this.toggle;
      this.color = this.toggle ?  this.sharedService.allActiveEvents[this.cmpName][i].color : null;
    }
  }

}
