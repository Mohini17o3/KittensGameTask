import React from "react" ; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState , useEffect} from "react";
import {useLocation , useNavigate} from  "react-router-dom" ;  

function Rules () {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const location = useLocation();
    let path = new URL(".", window.origin + location.pathname + "/")


    const handleClose = () =>{
         setShow(false); 
         navigate("..", { relative: path });
     } 

  
    useEffect ( ()=> {
        if(location.pathname === "/rules" || location.pathname === "/submit/rules" ) {
            setShow(true);
        } else {
            setShow(false);
        }
    } , [location.pathname])
  
    return (
      <>
        <Modal show={show} >
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


export default Rules ;

