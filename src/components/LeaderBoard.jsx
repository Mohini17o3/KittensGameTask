import React from "react" ; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState , useEffect} from "react";
import {useLocation , useNavigate} from  "react-router-dom" ;  
import axios from "axios";

function LeaderBoard () {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const location = useLocation();
    let path = new URL(".", window.origin + location.pathname + "/")


    const handleClose = () =>{
         setShow(false); 
         navigate("..", { relative: path });
     } 

  
    useEffect ( ()=> {
        if(location.pathname === "/LeaderBoard" || location.pathname === "/submit/LeaderBoard" ) {
            setShow(true);
        } else {
            setShow(false);
        }
    } , [location.pathname]);

    useEffect(()=> {fetchLeaderboard()} , []);

    const fetchLeaderboard = async ()=>{
      try {
        const response = await axios.get("/api/Leaderboard");
        setLeaderboard(response.data);
      } catch(error){
         console.error("error fetching leaderboard: " , error);
      }
    };


  
    return (
      <>
        <Modal show={show} >
          <Modal.Body>
          <Modal.Title> <strong>LeaderBoard</strong> </Modal.Title>
          <ul> 
          {LeaderBoard.map((user , index) => {
            <li key = {index}>{user.username} : {user.points} </li>
          })}
          
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


export default LeaderBoard ;

