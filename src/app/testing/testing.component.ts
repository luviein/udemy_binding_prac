import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {


  username : string = "";

  onClick() {
    this.username= "";
  }

  isUsernameEmpty(): boolean{
    return this.username.length === 0;
  }
}
