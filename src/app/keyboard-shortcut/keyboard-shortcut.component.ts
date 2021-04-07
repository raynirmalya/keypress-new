import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import keypress from "keypress.js";
@Component({
  selector: 'app-keyboard-shortcut',
  templateUrl: './keyboard-shortcut.component.html',
  styleUrls: ['./keyboard-shortcut.component.scss']
})
export class KeyboardShortcutComponent implements OnInit, OnDestroy {
  @Input() combo: string;
  @Input() description: string;
  @Output() callback = new EventEmitter();
  private  listener: any;
  constructor() { }

  ngOnInit(): void {
    this.listener = new keypress.Listener();
    if(this.combo) {
        const combo = this.combo.toLowerCase();
        if ( combo.match(/([\s]+)/g).length > 1) {
          this.listener.sequence_combo(combo, () =>{
            console.log(`You pressed ${this.combo}`);
            this.callback.emit({combo: this.combo, description: this.description});
          });
        } else {
          this.listener.simple_combo(combo, () =>{
            console.log(`You pressed ${this.combo}`);
            this.callback.emit({combo: this.combo, description: this.description});
          });
        }
    }
  }

  ngOnDestroy() {
    this.listener.unregister_combo(this.combo.toLowerCase());
  }

}
