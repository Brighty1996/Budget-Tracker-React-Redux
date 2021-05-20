import logo from './logo.svg';
import { Fragment } from 'react';
import TnxList from './components/TnxList';


const App = () => (
  <>
    <nav class="navbar navbar-dark bg-dark  navbar-expand-xs">

      <a href="#" className="navbar-brand">BudgetTracker</a>
    </nav>
    <section className="container-fluid p-4">
      <TnxList />
    </section>
  </>
);

export default App;
