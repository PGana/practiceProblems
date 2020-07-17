import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { empActionTypes } from './../core/ngrx/emp.reducer';

@Component({
  selector: 'app-emp-state-management',
  templateUrl: './emp-state-management.component.html',
  styleUrls: ['./emp-state-management.component.scss']
})
export class EmpStateManagementComponent implements OnInit {

  emp: Observable<any>;
  constructor(private store: Store<any>) { }
  tbox;
  ngOnInit(): void {
    // this.store.select('emp');
    this.emp = this.store.select('emps');
    this.store.dispatch({type:empActionTypes.EMP_GET})
  }


  insertData(data) {
    const dispathAction = {
      type: empActionTypes.EMP_ADD,
      payload: Object.assign({}, { name: data })
    }
    this.store.dispatch(dispathAction);
  }

  removeName(name: string) {
    const actions = {
      type:empActionTypes.EMP_REMOVE,
      payload:name
    }
    this.store.dispatch(actions);
  }
}
