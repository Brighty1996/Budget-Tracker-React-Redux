import TnxView from "./TnxView";
import { connect } from "react-redux";
import SummaryView from "./SummaryView";
import { loadTnxThunk } from "../service/tnxThunk.js"
import { useEffect } from "react";
const TnxList = ({ tnxs }) => (
    useEffect({load},[])

    );

const load = (tnxs) =>{
    return (
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
                    tnxs.map(t => <TnxView key={t.id} tx={t} />)
                }
            </tbody>

            <SummaryView />

        </table>
    );
}





const mapStateToProps = (state) => ({
    tnxs: state.tnxs
});

const mapDispatchToProps = (dispatch) => ({
    load: () => dispatch(loadTnxThunk())
})
const connectToStore = connect(mapStateToProps, mapDispatchToProps);


export default connectToStore(TnxList);