import { Component } from '@angular/core';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-project';

  getName(): string {
    return this.title;
  }
}
