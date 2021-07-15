
const ADD_TNX = 'add txn'
const DELETE_TNX = 'delete txn'
const WAIT = "WAIT";
const ERR = 'ERR';
const LOAD_TNX = ''
export const createWaitAction = () => ({ type: WAIT });
export const createErrAction = (errMsg) => ({ type: ERR, errMsg });
export const createLoadTxnAction = (txns) => ({ type: LOAD_TNX, txns });
export const createAddTxnAction = (txns) => ({ type: ADD_TNX, txns });
export const createDeleteTxnAction = (id) => ({ type: DELETE_TNX, id });

const initialState = () => ({

    tnxs: [],
    summary: {
        totalCredit: 0,
        totalDebit: 0,
        bal: 0
    },
    wait: false,
    errMsg: null


});

const updateSummary = (tnxs) => {
    let tc = 0;
    let td = 0;
    tnxs.forEach(t => {
        if (t.tnxType === 'CREDIT')
            tc += t.amount;
        else
            td += t.amount;

    })

    return {
        totalCredit: tc,
        totalDebit: td,
        bal: tc - td
    }
}

const tnxReducer = (oldState = initialState(), action) => {
    let modifiedState = null;
    let tnxs = null;
    switch (action.type) {
        case WAIT:
            modifiedState = { ...oldState, wait: true, errMsg: null };
            break;
        case ERR:
            modifiedState = { ...oldState, wait: false, errMsg: action.errMsg };
            break;
        case LOAD_TNX:
            tnxs =  action.txns;
            modifiedState = { ...oldState, tnxs, summary: updateSummary(tnxs), wait: false, errMsg: null };
            break;
        case ADD_TNX:
            tnxs = [...oldState.tnxs, action.txns];
            modifiedState = { ...oldState, tnxs, summary: updateSummary(tnxs) };
            break;
        case DELETE_TNX:
            tnxs = oldState.tnxs.filter(t => t.id != action.id);
            modifiedState = { ...oldState, tnxs, summary: updateSummary(tnxs) };
            break;
        default:
            modifiedState = oldState;

    }
    return modifiedState;
}
export default tnxReducer;