import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const ANGULAR_MODULES = [CommonModule, RouterModule];

@NgModule({
  declarations: [],
  imports: [...ANGULAR_MODULES],
  exports: [...ANGULAR_MODULES]
})
export class SharedModule {}
