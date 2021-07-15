import logo from './logo.svg';
import { Fragment } from 'react';
import TnxList from './components/TnxList';
import AddTnx from './components/AddTnx';


const App = () => (
  <Fragment>
    <nav class="navbar navbar-dark bg-dark  navbar-expand-xs">

      <a href="#" className="navbar-brand">BudgetTracker</a>
    </nav>
    <section className="container-fluid p-4">
      <AddTnx/>
      <TnxList />
    </section>
  </Fragment>
);

export default App;
