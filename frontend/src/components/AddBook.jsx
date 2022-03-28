import { FormLabel, TextField, Box, Button } from "@mui/material";
import React from "react";

const AddBook = () => {
  return (
    <form>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth="700px"
        alignContent="center"
        marginLeft="auto"
        marginRight="auto"
        marginTop="20px"
      >
        <FormLabel>Name</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="name" />

        <FormLabel>Author</FormLabel>
        <TextField margin="normal" fullWidth variant="outlined" name="author" />

        <FormLabel>Description</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />

        <FormLabel>Price</FormLabel>
        <TextField
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
