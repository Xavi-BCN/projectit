import { Link } from "react-router-dom";
import LogoApp from '../assets/img/logo.jpg'

const Logo = () => {
  
  return (
      <div className='logo_container container d-flex justify-content-start'>
      <Link to={"/Wellcome"} className=""  >
          <img
            src={LogoApp}
            alt=""
            width="38px"
            height="38px"
            className=""
          />{/* <h6 className="d-inline text-muted">XCL React Films</h6> */}
        </Link>
      </div>
  )
}
export default Logo