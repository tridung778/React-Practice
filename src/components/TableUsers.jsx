import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchAllUser } from "../services/UserService";
import ReactPaginate from "react-paginate";
import ModalAddNew from "./ModalAddNew";

const TableUsers = () => {
  const [listUser, setListUser] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [totalUsers, setTotalUsers] = useState(0);

  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getUsers(1);
  }, []);

  const getUsers = async (page) => {
    let res = await fetchAllUser(page);

    if (res && res.data) {
      setTotalUsers(res.total);
      setTotalPages(res.total_pages);
      setListUser(res.data);
    }
  };

  const handlePageClick = (event) => {
    getUsers(event.selected + 1);
  };

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const handleClose = () => setIsShowModalAddNew(false);

  const handleUpdateTable = (user) => {
    setListUser([user, ...listUser]);
  };

  return (
    <Container className="mt-3">
      <div className="my-3 d-flex justify-content-between">
        <div> List User:</div>
        <a
          className="btn btn-primary"
          onClick={() => setIsShowModalAddNew(true)}
        >
          Add new user
        </a>
      </div>
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
      <div className="d-flex justify-content-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>

      <ModalAddNew
        show={isShowModalAddNew}
        handleClose={handleClose}
        handleUpdateTable={handleUpdateTable}
      />
    </Container>
  );
};

export default TableUsers;
