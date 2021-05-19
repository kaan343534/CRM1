import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Entry } from './pages/entry/Entry.page';
import  DefaultLayout  from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard.pages';
import AddTicketForm from './components/add-ticket-form/AddTicketForm.comp';
import TicketLists from './pages/ticket-listing/TicketLists.page';
import Ticket from './pages/ticket/Ticket.page';
import PrivateRoute from './components/private-route/PrivateRoute.comp'
import { 
  BrowserRouter as Router,
  Switch, Route, Link } from'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/"> <Entry /></Route>
    
        <PrivateRoute path="/dashboard"> <Dashboard /></PrivateRoute>
        <PrivateRoute path="/add-ticket"> <AddTicketForm /></PrivateRoute>
        <PrivateRoute path="/tickets"> <TicketLists /></PrivateRoute>
        <PrivateRoute path="/ticket/:tId"> <Ticket /></PrivateRoute>
      
      </Switch>
      </Router>
   </div>
  );
}

export default App;
