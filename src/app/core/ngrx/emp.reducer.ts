
export const empActionTypes = {
    'EMP_GET': '[EMP_Data] Get',
    'EMP_ADD': '[EMP_Data] Add',
    'EMP_GET_SUCCESS': '[EMP_GET] Get Success',
    'EMP_GET_FAILED': '[EMP_GET_FAILED] Get failed',
    'EMP_REMOVE': '[EMP_REMOVE] Delete'
}

export interface Action {
    type: string;
    payload: any[];
}

export function ReducerEmp(state: any[] = [], req: Action) {
    console.log('Reducer payload :' + JSON.stringify(req.payload))
    switch (req.type) {
        case empActionTypes.EMP_GET_SUCCESS:
            var newState = [];
            if (state.length > 0) {
                newState = [...state, ...req.payload];
            } else {
                newState = req.payload;
            }
            return newState;
        case empActionTypes.EMP_ADD:
            return [...state, req.payload];
        case empActionTypes.EMP_REMOVE:
            return state.filter(ele => ele.name !== req.payload);
        default: return state; break;
    }
}