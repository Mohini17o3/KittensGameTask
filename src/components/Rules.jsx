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
          <Modal.Title> <strong>RULES TO REMEMBER</strong> </Modal.Title>
          <ul>
            <li> If the card drawn from the deck is a cat card, then the card is removed from the deck.</li>

            <li> If the card is exploding kitten (bomb) then the player loses the game.</li>

            <li> If the card is a defusing card, then the card is removed from the deck. This card can be used to defuse one bomb that may come in subsequent cards drawn from the deck.</li>

            <li> If the card is a shuffle card, then the game is restarted and the deck is filled with 5 cards again.</li>



          </ul>
          </Modal.Body>
          
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

