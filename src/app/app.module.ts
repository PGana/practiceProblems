import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Pra1Component } from './walmart Practice/pra1/pra1.component';
import { BinarySearchTreeComponent } from './walmart Practice/Binary Search Tree/bst.component';
import { EmpStateManagementComponent } from './emp-state-management/emp-state-management.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { ReducerEmp } from '../app/core/ngrx/emp.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { EmpEffects } from './core/ngrx/emp.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { StringPermutationComponent } from './string-permutation/string-permutation.component';
@NgModule({
  declarations: [
    AppComponent,
    Pra1Component,
    BinarySearchTreeComponent,
    EmpStateManagementComponent,
    StringPermutationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      emps: ReducerEmp
    }),
    HttpClientModule,
    EffectsModule.forRoot([EmpEffects]),
    /// Monitor Statemanage In browser side , age defines the number state need to monitor
    StoreDevtoolsModule.instrument({maxAge:12})
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
