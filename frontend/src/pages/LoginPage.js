import React from "react";
import { Container, TextField, Button, Link } from "@mui/material";

const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <div style={{ marginTop: "20vh", textAlign: "center" }}>
        <TextField label="Email" fullWidth />
        <TextField
          label="Password"
          type="password"
          fullWidth
          style={{ marginTop: "20px" }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          Login
        </Button>
        <Link href="#" style={{ display: "block", marginTop: "10px" }}>
          Forgot Password?
        </Link>
      </div>
    </Container>
  );
};

export default LoginPage;
