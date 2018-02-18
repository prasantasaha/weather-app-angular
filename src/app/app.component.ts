import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

export class State {
  constructor(public name: string) { }
}


@Component({
  selector: 'weather-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: State[] = [
    {
      name: 'Arkansas'
    },
    {
      name: 'California'
    },
    {
      name: 'Florida'
    },
    {
      name: 'Texas'
    }
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
      startWith(''),
      map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}
