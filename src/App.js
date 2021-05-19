import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Entry } from './pages/entry/Entry.page';
import  DefaultLayout  from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard.pages';
import AddTicketForm from './components/add-ticket-form/AddTicketForm.comp';
import TicketLists from './pages/ticket-listing/TicketLists.page';
import Ticket from './pages/ticket/Ticket.page';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/*<Dashboard /> */}
        {/*<AddTicketForm />*/}
        {/*<TicketLists />*/}
        <Ticket />
      </DefaultLayout>
   </div>
  );
}

export default App;
