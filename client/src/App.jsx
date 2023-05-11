import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import UserTable from "./components/UserTable";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/users" element={<UserTable />} />
      </Routes>
    </Router>
  );
};

export default App;
