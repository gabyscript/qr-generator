
import {Form, Container, Button, Row, Col, Stack} from 'react-bootstrap';
import {useState, useRef} from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';

import './QRinput.css'

const QRinput = () => {

    const [inputValue, setInputValue] = useState("");
    const [qrValue, setQrValue] = useState(null)    
    const qrRef = useRef(null);

    const generateQR = () => {
        if (inputValue === "") {
            alert("Debe ingresar un link para generar el código QR");
            return
        }
        setQrValue(inputValue);
    }

    const downloadQR = () => {
        html2canvas(qrRef.current).then(function(canvas) {
          var link = document.createElement('a');
          link.download = 'qr-code.png';
          link.href = canvas.toDataURL("image/png");
          link.click();
        });
    }

    return (
        <Container fluid id="qr-container" className="bg-light">
            <Row className="pt-4">
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <h1 className="text-center">Generador QR</h1>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col xs={12} sm={12} md={12} lg={{offset:2, span:8}} xl={{offset:1, span:10}}>
                    <p className="qr-instructions">¡Bienvenido a nuestra nueva aplicación web! En esta aplicación, podrás generar un código QR permanente a partir de cualquier enlace.</p>
                    <p className="qr-instructions">Una vez generado, podrás descargar el código QR en formato .png haciendo clic en el botón "Descargar código QR". </p>   
                    <p className="qr-instructions">Para generar el código QR, solo tienes que ingresar el enlace en el campo de entrada y hacer clic en el botón "Generar código QR". ¡Es así de simple!</p>   
                </Col>
            </Row>
            <Row className="pt-5">
                <Col xs={12} sm={12} md={{offset:1, span:8}} lg={{offset:2, span:6}} xl={{offset:2, span:6}} >
                    <Container >
                        <Form.Control placeholder="Inserte su link aquí" onChange={(e) => setInputValue(e.target.value)} />  
                    </Container>                                      
                </Col>
                <Col xs={12} sm={12} md={3} lg={4} xl={2}>
                    <Container id="generate-container">
                        <Button variant="success" onClick={generateQR}>Generar QR</Button>
                    </Container>                    
                </Col>
            </Row>
            {qrValue === null ? null
                    : <><Row className="pt-5">
                    <Col>
                        <Container ref={qrRef} className="d-flex justify-content-center align-items-center" id="qr-image-container">
                            <QRCode value={qrValue}/>
                        </Container>
                    </Col>
                </Row>
                <Row className="pt-5">            
                    <Col>
                        <Container className="d-flex justify-content-center align-items-center">
                            <Button variant="success" onClick={downloadQR}>Descargar QR</Button>
                        </Container>
                    </Col>
                </Row></>}
            
        </Container>

    )

}

export default QRinput