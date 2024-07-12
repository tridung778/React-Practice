import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { createUser } from "../services/UserService";
import { toast } from "react-toastify";

const ModalAddNew = (props) => {
  /* eslint-disable react/prop-types */
  const { show, handleClose, handleUpdateTable } = props;

  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleAddNewUser = async () => {
    let res = await createUser(name, job);
    if (res && res.id) {
      handleClose();
      setName("");
      setJob("");
      toast.success("Add new user successfully");
      handleUpdateTable({ first_name: name, last_name: job, id: res.id });
    } else {
      toast.error("Error");
    }
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
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Job</label>
              <input
                type="text"
                className="form-control"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
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
