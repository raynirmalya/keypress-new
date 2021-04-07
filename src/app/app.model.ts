export interface KeypressEvents <T>{
  T: KeypressEvt[];
}

export interface KeypressEvt {
  keyCombo: string;
  color: string;
  description: string;
}

