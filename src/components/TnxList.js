import TnxView from "./TnxView";
import { connect} from "react-redux";
const TnxList = ( {tnxs} ) => (

    <table className="table table-border table-hover">
        
        <thead>
            <tr>
                <th>Txn Id</th>
                <th>Header</th>
                <th>Credit</th>
                <th>Debit</th>
            </tr>

        </thead>
        <tbody>
         
            {(!tnxs || tnxs.length == 0) &&
                <tr>
                    <td colSpan="4">No Transactions</td>
                </tr>
            }

            {(tnxs || tnxs.length > 0) &&
                tnxs.map(t => <TnxView key={t.tnxId} tx={t} />)
            }
        </tbody>

    </table>
);

const mapStateToProps = (state) => ({
    tnxs: state.tnxs
});

const mapDispatchToProps = null;

const connectToStore = connect(mapStateToProps, mapDispatchToProps);


export default connectToStore(TnxList);