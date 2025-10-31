import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Week7 from "./pages/Week7";
import Week8 from "./pages/Week8";
import Week9 from "./pages/Week9";
import Week10 from "./pages/Week10";
import Week11 from "./pages/Week11";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/week7" replace />} />
          <Route path="/week7" element={<Week7 />} />
          <Route path="/week8" element={<Week8 />} />
          <Route path="/week9" element={<Week9 />} />
          <Route path="/week10" element={<Week10 />} />
          <Route path="/week11" element={<Week11 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

