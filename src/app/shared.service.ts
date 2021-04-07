import { Injectable } from '@angular/core';
import { KeypressEvents } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public allActiveEvents: KeypressEvents<string> = {} as KeypressEvents<string>;
  constructor() { }
}
