import { useState, useEffect } from "react";
import { Button, TextField, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const UserForm = () => {
  const [userData, setUserData] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    window.onbeforeunload = isDirty ? () => true : null;
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  const handleSubmit = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    setIsDirty(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      width="300px"
      margin="auto"
    >
      <TextField
        label="Name"
        name="name"
        value={userData.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <TextField
        label="Phone"
        name="phone"
        value={userData.phone}
        onChange={handleChange}
      />
      <TextField
        label="Address"
        name="address"
        value={userData.address}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
};

export default UserForm;
