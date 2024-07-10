import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchAllUser } from "../services/UserService";

const TableUsers = () => {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let res = await fetchAllUser();

    if (res.status === 200) {
      setListUser(res.data.data);
    }
  };
  return (
    <Container className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((user, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableUsers;
