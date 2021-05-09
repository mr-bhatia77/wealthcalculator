import './App.css';
import NetWorth from './components/NetWorth'
import Navibar from './components/Navibar'
import { BrowserRouter,Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Footer from './components/Footer'
// import {Row,Col,Card,Button} from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
    <Navibar></Navibar>
    <Route path='/' exact><NetWorth></NetWorth></Route>
    <Route path="/calculator/:id"><Calculator/></Route>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
