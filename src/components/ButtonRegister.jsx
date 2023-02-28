import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DataUserContext } from "../aplication/DataUserContext";
import { msgKO, TimedOK } from "../aplication/messages";
import { firebaseApp } from "../aplication/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp);

function LoginModal(props) {
  const { userGlobal, setUserMail } = useContext(DataUserContext);
  async function submitRegister(e) {
    e.preventDefault();
    const mail = e.target.formEmail.value;
    const pswd = e.target.formPswd.value;
    await createUserWithEmailAndPassword(auth, mail, pswd)
      .then((res) => {
        setUserMail(mail);
        e.target.reset();
        TimedOK("Resgistrado correctamente");
      })
      .catch((err) => {
        msgKO(err.message);
      });
  }

  if (userGlobal) {
    <Navigate to="/Trending" />;
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter "
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Registarte como nuevo usuario
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container text-center">
          <form onSubmit={submitRegister}>
            <Form.Group controlId="formEmail">
              <div className="w-75 mx-auto mb-3">
                <Form.Control type="email" placeholder="Email Address" />
              </div>
            </Form.Group>
            <Form.Group controlId="formPswd">
              <div className="w-75 mx-auto mb-3">
                <Form.Control
                  required
                  type="password"
                  placeholder="Password (mínimo 6 caracteres)"
                />
              </div>
            </Form.Group>
            <div className="w-50 mx-auto mb-3">
              <Button type="submit" className="form-control  text-center">
                Crear usuario
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function ButtonRegister() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setModalShow(true)}>
        Registrarse
      </Button>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default ButtonRegister;
