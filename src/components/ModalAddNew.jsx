import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalAddNew = (props) => {
  /* eslint-disable react/prop-types */
  const { show, handleClose } = props;

  const [name, setName] = useState("");
  const [job, setJob] = useState("");


  const handleAddNewUser = () => {
    console.log(name, job);
  };

  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Job</label>
              <input type="text" className="form-control" value={job} onChange={(e) => setJob(e.target.value)} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAddNewUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddNew;
