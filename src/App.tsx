import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Footer from "./pages/footer";
import Landing from "./pages/landing";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;