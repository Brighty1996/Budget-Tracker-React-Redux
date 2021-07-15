import axios from 'axios';
import {createErrAction,createWaitAction,createLoadTxnAction,createAddTxnAction, createDeleteTxnAction  } from '../service/tnxReducer.js'
const apiUrl ="http://localhost:7777/tnxs";

const onError = (err, dispatch, errMsg) => {
    console.log(err);
    dispatch(createErrAction(errMsg));
}
export const loadTnxThunk = () => (dispatch) =>{
    dispatch(createWaitAction());

    axios.get(apiUrl).then(
        response => dispatch(createLoadTxnAction(response.data)),
        err => onError(err, dispatch,"unable to fetch")

    )
}

 export const addTnxThunk = (tnx) => (dispatch) => {
    dispatch(createWaitAction());

    axios.post(apiUrl, tnx).then(
        response => dispatch(createAddTxnAction(response.data)),
        err => onError(err, dispatch,"unable to save")

    )  
}

 export const deleteTnxThunk = (id) => (dispatch) => {
    dispatch(createWaitAction());

    axios.post(`${apiUrl}/${id}`).then(
        response => dispatch(createDeleteTxnAction(response.data)),
        err => onError(err, dispatch,"unable to delete")

    )  
}

// export default const tnxThunk;


