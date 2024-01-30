import {Component} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
    active: boolean = true;
    allMonth= [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","December" ];

    toggle() {
        this.active = !this.active;
    }
}
