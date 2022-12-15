import { Col, Row } from 'react-bootstrap';
import './App.css';
import SideBar from './components/SideBar';
import { Routes, Route} from "react-router-dom";
import Leaflet from './components/Leaflet';
import MenuTwo from './components/MenuTwo';
import TableData from './components/TableData';
import MenuOne from './pages/MenuOne';
import Maps from './components/Maps';
import MapsTwo from './components/MapsTwo';

function App() {
  return (
    <div className="App">
      <Row>
        <Col className="col-3 ">
          <div className='sidebar-item'>
            <SideBar/>
          </div>
        </Col>
        <Col>
          <Routes>
            <Route exac path="/" element={<Leaflet />} />
            <Route exac path="/menu2" element={<MenuTwo />} />
            <Route exac path="/table" element={<TableData/>} />
            <Route exac path="/maps-one" element={<Maps/>} />
            <Route exac path="/maps-two" element={<MapsTwo/>} />
          </Routes>
        </Col>
      </Row>

      
    </div>
  );
}

export default App;
