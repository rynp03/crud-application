/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Typography,
  FormControl,
  TextField,
  Container,
  styled,
  FormGroup,
  Button,
} from "@mui/material";
import { getUser, editUser } from "../Config/Api";
import { useNavigate, useParams } from "react-router-dom";

const AddForm = styled(FormControl)`
  display: flex;
  gap: 20px;
`;

const defaultState = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(defaultState);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data[0]);
  };

  const handleSubmit = async () => {
    if (user !== defaultState) {
      await editUser(user, id);
      navigate("/all");
    }
  };

  return (
    <Container style={{ width: "50%" }}>
      <FormGroup>
        <Typography variant="h4" style={{ margin: "20px 0 10px 0" }}>
          Edit User
        </Typography>
        <AddForm>
          <FormControl>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              onChange={(e) => handleInputChange(e)}
              value={user.name}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Username"
              variant="outlined"
              name="username"
              onChange={(e) => handleInputChange(e)}
              value={user.username}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              onChange={(e) => handleInputChange(e)}
              value={user.email}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Phone"
              variant="outlined"
              name="phone"
              onChange={(e) => handleInputChange(e)}
              value={user.phone}
            />
          </FormControl>
          <Button variant="contained" onClick={handleSubmit}>
            Edit User
          </Button>
        </AddForm>
      </FormGroup>
    </Container>
  );
};

export default EditUser;
