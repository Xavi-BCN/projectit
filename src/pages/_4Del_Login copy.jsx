import FormSignIn from '../components/FormSignIn'
import FormLogin from '../components/FormLogin'

const Login = () => {
  return (
    <>
      <div className="pageTitle">Registro</div>
        <div className='container text-center'>
          
            <FormLogin className=""/>
          <h6 className='fw-light text-primary text-opacity-50'>Si no está registrado, cree una cuenta desde aquí mismo.</h6>
          
            <FormSignIn />
            <p></p>
          
        </div>
        
      
    </>
  )
}

export default Login