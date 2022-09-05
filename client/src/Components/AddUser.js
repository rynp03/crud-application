import React, { useState } from "react";
import {
  Typography,
  FormControl,
  TextField,
  Container,
  styled,
  FormGroup,
  Button,
} from "@mui/material";
import { addUser } from "../Config/Api";
import { useNavigate } from "react-router-dom";

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

const AddUser = () => {
  const [user, setUser] = useState(defaultState);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (user !== defaultState) {
      await addUser(user);
      navigate("/all");
    }
  };

  return (
    <Container style={{ width: "50%" }}>
      <FormGroup>
        <Typography variant="h4" style={{ margin: "20px 0 10px 0" }}>
          Add User
        </Typography>
        <AddForm>
          <FormControl>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Username"
              variant="outlined"
              name="username"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Phone"
              variant="outlined"
              name="phone"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          <Button variant="contained" onClick={handleSubmit}>
            Add User
          </Button>
        </AddForm>
      </FormGroup>
    </Container>
  );
};

export default AddUser;
