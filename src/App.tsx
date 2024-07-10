import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import UserForm from "./components/UserForm";
import Data from "./components/Data";

const App = () => {
  return (
    <Box className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
