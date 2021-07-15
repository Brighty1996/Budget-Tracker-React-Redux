import { useState } from "react";
import { connect } from "react-redux";
import { addTnxThunk } from "../service/tnxThunk.js"
const AddTnx = ({ add }) => {

    let [id, setId] = useState("");
    let [header, setHeader] = useState("");
    let [tnxType, setTnxType] = useState("");
    let [amount, setAmount] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        add({ id, header, tnxType, amount });
        setId("");
        setHeader("");
        setTnxType("");
        setAmount("");
    }

    return (
        <form className="form-inline m-2 col-sm-9 mx-auto" onSubmit={handleSubmit}>
            <input type="number" placeholder="Txn Id" className="form-control mr-1" value={id}  required
                onChange={e => setId(parseInt(e.target.value))} />
            <input type="text"  value = "23"  className="form-control mr-1" value={header}  required
                onChange={e => setHeader(e.target.value)} />
            <select placeholder="Tnx Type" className="form-control mr-1" value={tnxType} required
                onChange={e => setTnxType(e.target.value)}>
                <option value="CREDIT">Income</option>
                <option value="DEBIT">Spending</option>
            </select>
            <input type="number" placeholder="Amount" className="form-control mr-1" value={amount}  required
                onChange={e => setAmount(e.target.value != " " ? parseFloat(e.target.value) : "")} />
            <button className="btn btn-sm btn-primary">ADD</button>
        </form>
    );
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    add: (tnx) => dispatch(addTnxThunk(tnx))
})

const connectToStore = connect(mapStateToProps, mapDispatchToProps);


export default connectToStore(AddTnx);
