import { Component, Input } from '@angular/core';

import { Todo } from '../../models/home.models';

@Component({
  selector: 'ngx-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  @Input() set info(value: Todo) {
    console.log(value);
  }
}
