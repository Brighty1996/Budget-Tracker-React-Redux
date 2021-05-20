
 const ADD_TNX = 'add txn'
 const DELETE_TNX = 'delete txn'

export const createAddTxnAction = (txns) => ({type:ADD_TNX, txns})
export const createDeleteTxnAction = (tnxId) => ({type:DELETE_TNX, tnxId})
const initialState = () => ({

    tnxs: [
        { tnxId: 1, header: 'Salary', amount: 50000, tnxType: 'CREDIT' },
        { tnxId: 2, header: 'Salary', amount: 51000, tnxType: 'DEBIT' },
        { tnxId: 3, header: 'Salary', amount: 52000, tnxType: 'CREDIT' },
        { tnxId: 4, header: 'Salary', amount: 53000, tnxType: 'DEBIT' },
        { tnxId: 5, header: 'Salary', amount: 54000, tnxType: 'CREDIT' }

    ]
});

const tnxReducer = (oldState = initialState(), action) => {
    let modifiedState = null;
    let tnxs = null;
    switch (action.type) {
        case ADD_TNX:
            tnxs = [...oldState.tnxs, action.txns];
            modifiedState = { ...oldState, tnxs };
            break;
        case DELETE_TNX:
            tnxs = oldState.tnxs.filter(t => t.id != action.tnxId);
            modifiedState = { ...oldState, tnxs };
            break;
        default:
            modifiedState = oldState;

    }
    return modifiedState;
}
export default tnxReducer;