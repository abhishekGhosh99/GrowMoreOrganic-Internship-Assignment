import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const UserForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (name && phone && email) {
      const userDetails = { name, phone, email };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      window.location.href = "/data";
    } else {
      alert(
        "Please fill in all the fields. You cannot go to the homepage until you fill these information."
      );
    }
  };

  return (
    <Container
      className="userform"
      maxWidth="sm"
      sx={{ py: "40px", width: "100%", height: "100vh" }}
    >
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: "40px",
          fontSize: "60px",
          fontWeight: "bold",
          color: "#fff",
          textShadow:
            "7px 2px 3px rgba(0, 0, 0, 0.2), 5px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        Welcome
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "white",
          textShadow:
            "2px 2px 3px rgba(0, 0, 0, 0.2), 5px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        Fill in all the details
      </Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        sx={{ my: "10px" }}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};

export default UserForm;
