import Modal from 'react-bootstrap/Modal';
import QRCode from "react-qr-code";
import { Button } from "react-bootstrap";
import { useState } from 'react';
import { ImQrcode } from "react-icons/im"

function QRModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter "
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Código QR
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <QRCode value={`https://xcl.es/#/SelectedMovie/${props.movie}/${props.type}`} />
      </Modal.Body>
    </Modal>
  );
}

function ButtonViewQR({ MovieId, MovieType }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className='ms-2'
        variant="info"
        onClick={() => setModalShow(true)}
        data-bs-toggle="tooltip" data-bs-placement="top" title="Mostrar código QR para compartir">
        <ImQrcode />
      </Button>

      <QRModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        movie={MovieId}
        type={MovieType}
      />
    </>
  );
}
export default ButtonViewQR;

