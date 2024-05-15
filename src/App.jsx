import "./App.scss";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRuote = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="./login" />;
    }
    return children;
  };
  console.log(currentUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRuote>
                  <Home />
                </ProtectedRuote>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Home /> */}
    </>
  );
}

export default App;
