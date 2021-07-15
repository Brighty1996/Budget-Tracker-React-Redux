import { connect } from "react-redux";
import { createDeleteTxnAction } from "../service/tnxReducer"
const TnxView = ({ tx, remove}) => (

    <tr>
        <td>
            <button className="btn btn-sm btn-danger mr-2" onClick={e => remove(tx.id)}> DELETE</button>
            {tx.id}
        </td>

        <td>{tx.header}</td>
        <td>{tx.tnxType == 'CREDIT' ? tx.amount : ''}</td>
        <td>{tx.tnxType == 'DEBIT' ? tx.amount : ''}</td>
    </tr>

);

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    remove : (id) => dispatch(createDeleteTxnAction(id))
})

const connectToStore = connect(mapStateToProps, mapDispatchToProps);


export default connectToStore(TnxView);
