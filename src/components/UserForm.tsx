import { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  FormControl,
  FormHelperText,
} from "@mui/material";

const UserForm = ({ userData, setUserData }: any) => {
  const [formData, setFormData] = useState(userData);
  const [isDirty, setIsDirty] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedData);
    setIsDirty(true); // Mark the form as dirty
    setError(null); // Clear error if the user starts typing
  };

  // Handle form submission
  const handleSubmit = () => {
    // Check if all fields are filled
    const fieldsAreValid =
      formData.name && formData.email && formData.phone && formData.address;

    if (!fieldsAreValid) {
      setError("All fields are required.");
      return; // Don't submit if validation fails
    }

    // Save data to parent component and localStorage
    setUserData(formData);
    localStorage.setItem("userData", JSON.stringify(formData));
    setIsDirty(false); // Reset dirty flag after saving
  };

  // Listen to beforeunload to show alert if there are unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        const message =
          "You have unsaved changes. Are you sure you want to leave?";
        e.returnValue = message; // Standard for most browsers
        return message; // For some browsers like Chrome
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]); // Re-run the effect if isDirty changes

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      width="100%"
      maxWidth="400px"
      margin="auto"
    >
      <h2 className="text-xl font-semibold">User Information</h2>

      <FormControl fullWidth error={Boolean(error)} className="flex gap-4">
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
        />
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        fullWidth
        className="mt-4"
      >
        Save
      </Button>
    </Box>
  );
};

export default UserForm;
