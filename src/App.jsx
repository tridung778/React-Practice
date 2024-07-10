import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="app-container">
      <Container>
        <Header />
        <TableUsers />
      </Container>
    </div>
  );
}

export default App;
