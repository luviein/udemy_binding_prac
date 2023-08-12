import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isHidden : boolean = false;
  noOfClicks : number[] = [];

  buttonClick() {
    this.noOfClicks.push(this.noOfClicks.length + 1)
  }

  // returns true if index is higher than 4
  // index starts at 0, so 5th item onwards is at position 4
  hasBlueBackground(index : number) : boolean {
    return index > 3;
  }
}
