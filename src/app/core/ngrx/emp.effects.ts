import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { empActionTypes } from './emp.reducer';
@Injectable()
export class EmpEffects {
    @Effect() GetEmp: Observable<any> = this.action$.pipe(
        ofType(empActionTypes.EMP_GET),
        mergeMap(() => 
            this.http.get('http://dummy.restapiexample.com/api/v1/employees').pipe(
                map( (res:any) => ({ type: empActionTypes.EMP_GET_SUCCESS, payload: res.data })),
                catchError(err => of({ type: empActionTypes.EMP_GET_FAILED, payload: err }))
            )
        )
    )
    constructor(private http: HttpClient, private action$: Actions) {}
}