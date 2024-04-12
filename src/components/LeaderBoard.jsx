import React from "react" ; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState , useEffect} from "react";
import {useLocation , useNavigate} from  "react-router-dom" ;  

function LeaderBoard () {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const location = useLocation();
   

    const handleClose = () =>{
         setShow(false);
         navigate("..", { relative: "/" });
    }

  
    useEffect ( ()=> {
        if(location.pathname == "/LeaderBoard") {
            setShow(true);
        } else {
            setShow(false);
        }
    } , [location.pathname])
  
    return (
      <>
        <Modal show={show} onHide={handleClose} >
          <Modal.Body>
          <Modal.Title>LeaderBoard</Modal.Title>
          Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
         
          </Modal.Footer>
        </Modal>
    
      </>
    );
  }


export default LeaderBoard ;

