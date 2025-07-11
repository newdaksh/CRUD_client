import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importing pages

import Login from "./pages/Login";
import Register from "./pages/Register";
import UserList from "./pages/UserList";
import EditUser from "./pages/EditUser";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";


//defining function

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        {/* Default route: agar koi galat path pe jaaye toh login pe bhej do */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}


export default App;