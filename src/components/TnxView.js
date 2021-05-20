const TnxView = ({tx}) => (

    <tr>

        <td>{tx.tnxId}</td>
        <td>{tx.header}</td>
        <td>{tx.tnxType == 'CREDIT' ? tx.amount:''}</td>
        <td>{tx.tnxType == 'DEBIT' ? tx.amount:''}</td>
    </tr>
   
); 

export default TnxView;