import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Modal,Button,Form} from 'react-bootstrap';
import {editTask} from "../JS/actions/action"

const Edit =({task})=> {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [newText , setNewText] = useState(task.text)
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = (e) =>{
        e.preventDefault();
        dispatch(editTask(task.id,newText));
        handleClose()
}
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} style={{margin:"0px 10px"}}  >
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your Task</Modal.Title>
          </Modal.Header>
          <Form style={{margin:"20px 200px",display:"flex"}} onSubmit={handleEdit} >
  <Form.Group className="mb-3" >
    <Form.Label>Edit Task</Form.Label>
    <Form.Control type="text" placeholder="Enter your Task" onChange={(e)=>setNewText(e.target.value)}  name="text"  value={newText} />
  </Form.Group>
  
</Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default Edit