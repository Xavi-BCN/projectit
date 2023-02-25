
const SendEmailMe = () => {

    const sendEmail = () => {
      //const { email } = userGlobal;
      const email = "xavi@xcl.es";
  
      window.open(`mailto:${email}`);
    };
  
    return (
        <>
            
            <button className="btn btn-primary" onClick={sendEmail}>Send Email</button> 
        </>
    );
  };
  
  export default SendEmailMe;