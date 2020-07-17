import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pra1Component } from './walmart Practice/pra1/pra1.component';
import { EmpStateManagementComponent } from './emp-state-management/emp-state-management.component';

const routes: Routes = [
  {
    component: Pra1Component, path: 'practice'
  },
  { component: EmpStateManagementComponent, path: 'stateManage' },
  {path:'', redirectTo:'practice', pathMatch:'full'}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
