import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import UserForm from "./components/UserForm";
import Data from "./components/Data";

const App = () => {
  return (
    <Box className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/home" element={<Data />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
