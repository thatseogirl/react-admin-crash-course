import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2em",
        height: "100vh",
      }}
    >
      <Typography variant="h6" component={"div"} gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Manage your users and post effortlesslywith the tools provided.
        Naviagate through the menu to get started.
      </Typography>
    </Box>
  );
};

export default HomePage;
