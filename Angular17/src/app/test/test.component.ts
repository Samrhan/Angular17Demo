import {Component} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
     active: boolean = true;
  allMonth= [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","December" ];
  toggle() {
          this.active = !this.active;
     }
}
