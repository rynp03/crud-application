/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  TableBody,
  Button,
} from "@mui/material";
import { allUsers, deleteUser } from "../Config/Api";
import { Link } from "react-router-dom";

const TContainer = styled(TableContainer)`
  width: 80%;
  margin: 20px auto 0 auto;
`;

const TRow = styled(TableRow)`
  background-color: #16213e;
  & > th {
    color: #fff;
    font-size: 18px;
  }
`;

const TBROW = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #b1e1ff;
  }

  & > td {
    font-size: 16px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await allUsers();
    setUsers(response.data);
  };

  const deleteUserDetails = async (id) => {
      await deleteUser(id);
      getUsers();
  }

  return (
    <TContainer>
      <Table>
        <TableHead>
          <TRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center"></TableCell>
          </TRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TBROW>
              <TableCell align="center">{user._id}</TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.username}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.phone}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  style={{ marginLeft: 10, backgroundColor: "#D61C4E" }}
                  onClick={() => deleteUserDetails(user._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TBROW>
          ))}
        </TableBody>
      </Table>
    </TContainer>
  );
};

export default AllUsers;
