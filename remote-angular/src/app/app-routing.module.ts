import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularWidgetComponent } from './components/angular-widget/angular-widget.component';

const routes: Routes = [{ path: '', component: AngularWidgetComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }