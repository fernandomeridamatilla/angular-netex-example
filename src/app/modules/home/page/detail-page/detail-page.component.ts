import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from '../../models/home.models';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'ngx-detail-page',
  templateUrl: './detail-page.component.html'
})
export class DetailPageComponent implements OnInit {
  todo: Todo;

  constructor(
    private router: Router,
    private homeService: HomeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTodoDetail();
  }

  onClickButton(): void {
    this.router.navigate(['/']);
  }

  private getTodoDetail(): void {
    const { id } = this.route.snapshot.params;

    this.todo = {
      userId: 3,
      id: 45,
      title: 'velit soluta adipisci molestias reiciendis harum',
      completed: false
    };

    setTimeout(() => {
      this.homeService
        .getDetail(Number(id))
        .subscribe((todo: Todo) => (this.todo = todo));
    }, 3000);
  }
}
