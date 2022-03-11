import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../../models/home.models';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'ngx-list-page',
  templateUrl: './list-page.component.html'
})
export class ListPageComponent implements OnInit, OnDestroy {
  todos: Todo[];

  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit(): void {
    this.getTodoList();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  onNavigateToDetail(id: number): void {
    this.router.navigate(['/', id]);
  }

  private getTodoList(): void {
    this.homeService
      .getAll()
      .subscribe((todos: Todo[]) => (this.todos = todos));
  }
}
