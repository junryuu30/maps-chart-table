import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { MapContainer, Marker, Popup, SVGOverlay, TileLayer } from "react-leaflet";
import { useNavigate } from 'react-router-dom';
import ChartData from './ChartData';
import TableData from './TableData';

function Maps() {
    const navigate = useNavigate()

  return (
    <>
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1 ms-2">Menu 1</span>
      </nav>
    <Row>
            <h4 className='my-3'>Maps Kota Jakarta</h4>  
        <Col>
            <Card className='p-3'>
                <MapContainer
                    // menampilkan lokasi yang ditampilkan
                    // longtitude
                    // latitude
                    // center={[51.505, -0.09]}
                    center={[-6.2008406, 106.7987143]}
                    zoom={13}
                    scrollWheelZoom={false}
                >
                    
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* marker==penanda */}
                    <Marker 
                    // position={[51.505, -0.09]}
                    // position={[107.613144, -6.905977]}
                    position={[-6.2008406, 106.7987143]}
                    >
                    <Popup>
                       Kota Jakarta. <br /> Ibu Kota Indonesia.
                    </Popup>
                    </Marker>
                </MapContainer>
            </Card>       
        </Col>
        <Col className='col-2'>
            <Card className='text-start' style={{width:"80%", cursor:"pointer"}}>
                <ul className='py-1'>
                    <li className='my-2' onClick={()=>navigate("/maps-one")}>Maps 1</li>
                    <li className='my-2' onClick={()=>navigate("/maps-two")}>Maps 2</li>
                </ul>
            </Card>

        </Col>
    </Row>
    <div>
        <ChartData/>
    </div>
    <div>
        <TableData/>
    </div>

    </>
  )
}

export default Maps