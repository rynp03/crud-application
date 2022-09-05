import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavigationBar = styled(AppBar)`
  background-color: #293462;
`;

const Links = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 300;
`;

const NavBar = () => {
  return (
    <NavigationBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Links to="/" style={{ fontSize: 20, fontWeight: 500 }}>
          CRUD APPLICATION
        </Links>
        <div style={{ display: "flex", gap: 30 }}>
          <Links to="add">Add User</Links>
          <Links to="all">All Users</Links>
        </div>
      </Toolbar>
    </NavigationBar>
  );
};

export default NavBar;
