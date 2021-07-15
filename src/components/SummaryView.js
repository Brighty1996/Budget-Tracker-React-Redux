
import { connect} from "react-redux";
const SummaryView = ({summary}) => (
<tfoot>
    <tr>

        <td colSpan = "2">Gross</td>
        <td>{summary.totalCredit}</td>
        <td>{summary.totalDebit}</td>
        </tr>
        <tr>
        <td colSpan = "3">Net Balance</td>
        <td>{summary.bal}</td>
    
        </tr>
    </tfoot> 
); 

const mapStateToProps = (state) => ({
    summary: state.summary
});

const mapDispatchToProps = null;

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(SummaryView);