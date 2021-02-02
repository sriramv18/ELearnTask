import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'view',
      pathMatch: 'full',
    },
    {
        path : 'view',
        component : ListViewComponent
    } 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
