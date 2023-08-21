import { Component } from '@angular/core';
import { expand } from './animations/expand.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [expand],
})
export class AppComponent {


  ngOnInit(): void {}
}
