import Modal from 'react-bootstrap/Modal';
import { Form, Button } from "react-bootstrap";
import { useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataUserContext } from "../aplication/DataUserContext";
import { msgKO, TimedOK } from '../aplication/messages'
import { firebaseApp } from "../aplication/firebaseConfig";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { Loading } from './Loading';
const auth = getAuth(firebaseApp)

function LoginModal(props) {

  const { setUserMail, setValueMenu, showLoading, setShowLoading } = useContext(DataUserContext)
  const navigate = useNavigate();

  async function submitLogin(e) {
    setShowLoading(true)
    e.preventDefault();
    const mail = e.target.formEmail.value;
    const pswd = e.target.formPswd.value;  
    await signInWithEmailAndPassword(auth, mail, pswd )
      .then((res) => {
        setShowLoading(false)
        setUserMail(mail);
        setValueMenu(0)
        TimedOK(`Bienvenido/a ${mail}, has iniciado sesión.`)
        navigate ('/trending')
        e.target.reset();
      })
      .catch(err => {
        setShowLoading(false)    
        msgKO(err.message)     
        });
    };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter "
      centered
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <div className="container text-center">
      
      <form onSubmit={submitLogin}>
        <Form.Group controlId="formEmail">
          <div className="w-75 mx-auto mb-3">
            <Form.Control type="email" placeholder="Email Address" />
          </div>
        </Form.Group>
        <Form.Group controlId="formPswd">
          <div className="w-75 mx-auto mb-3">
            <Form.Control required type="password" placeholder="Password (mínimo 6 caracteres)" />
          </div>
        </Form.Group>
        <div className="w-25 mx-auto mb-3">
          <Button
            type="submit"
            className="form-control  text-center"
            >Login
          </Button>
        { showLoading && <Loading />}
        </div>
      </form>
    </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function ButtonLogin() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button className='me-2' variant="info" onClick={() => setModalShow(true)}>
        Login
      </Button>

      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default ButtonLogin;

