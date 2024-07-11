import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import { Container } from "react-bootstrap";
import ModalAddNew from "./components/ModalAddNew";

function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const handleClose = () => setIsShowModalAddNew(false);

  return (
    <div className="app-container">
      <Container>
        <Header />
        <div className="my-3 d-flex justify-content-between">
          <div> List User:</div>
          <a
            className="btn btn-primary"
            onClick={() => setIsShowModalAddNew(true)}
          >
            Add new user
          </a>
        </div>
        <TableUsers />
      </Container>

      <ModalAddNew
        show={isShowModalAddNew}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
