import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
  public color: string;
  public description: string;
  public cmpName: string = 'ComponentB';
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.allActiveEvents[this.cmpName] = [];
  }
  public callback($evt, i: number) {
    if( $evt ) {
      this.color = this.sharedService.allActiveEvents[this.cmpName][i] && this.sharedService.allActiveEvents[this.cmpName][i].color ? this.sharedService.allActiveEvents[this.cmpName][i].color : 'black';
    }
  }
}
