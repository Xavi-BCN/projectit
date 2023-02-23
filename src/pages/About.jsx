import Thanks from "../assets/img/ninothanks.png";

const AboutMe = () => {
  return (
    <>
      <div className="pageTitle">About
        <img
          src={Thanks}
          alt=""
          width="10%"
          // height="5%"
          className="d-inline-block align-text-top"
        />
      </div>
    </>
  )
}

export default AboutMe