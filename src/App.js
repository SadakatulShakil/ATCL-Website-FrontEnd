import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
// import Login from "./components/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import AddServices from "./components/Dashboard/Services/AddServices";
import ManageServices from "./components/Dashboard/Services/ManageServices";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCategories from "./components/Dashboard/Category/AddCategories";
import ManageCategories from "./components/Dashboard/Category/ManageCategories";
import AddTeamMember from "./components/Dashboard/TeamMember/AddTeamMember";
import ManageTeamMember from "./components/Dashboard/TeamMember/ManageTeamMember";
import Navbar from "./components/Nav/Navbar";
import NewNav from "./components/Nav/HeaderNavBar";
import HeaderNavBar from "./components/Nav/HeaderNavBar";
import AddNews from "./components/Dashboard/News/AddNews";
import MyDashbaord from "./components/Dashboard/MyDashbaord/MyDashbaord";
import { useState } from "react";
import Users from "./components/Dashboard/MyDashbaord/Users";
// import Users from "./components/Dashboard/MyDashbaord/Users";

function App() {
  //  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className=" min-h-screen bg-base-100 text-black ">
      <TopNav></TopNav>
      <Nav></Nav>
      {/* <Navbar></Navbar> */}
      {/* <HeaderNavBar></HeaderNavBar> */}

      <Routes>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/users-login" element={<Users />}></Route>

        <Route path="/" element={<Home />}></Route>

        {/* <Route
  path="/dashboard"
  element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
/> */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard></Dashboard>
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <ProtectedRoute>
                <MyDashbaord />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="add-services"
            element={
              <ProtectedRoute>
                <AddServices />
              </ProtectedRoute>
            }
          />
          <Route
            path="manage-services"
            element={
              <ProtectedRoute>
                <ManageServices />
              </ProtectedRoute>
            }
          />
          <Route
            path="add-product"
            element={
              <ProtectedRoute>
                <AddCategories />
              </ProtectedRoute>
            }
          />
          <Route
            path="manage-category"
            element={
              <ProtectedRoute>
                <ManageCategories />
              </ProtectedRoute>
            }
          />
          <Route
            path="add-team-member"
            element={
              <ProtectedRoute>
                <AddTeamMember />
              </ProtectedRoute>
            }
          />
          <Route
            path="manage-team-member"
            element={
              <ProtectedRoute>
                <ManageTeamMember />
              </ProtectedRoute>
            }
          />
          <Route
            path="add-news"
            element={
              <ProtectedRoute>
                <AddNews />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
