import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Login from "./pages/Loginpage/Login";
import Layout from "./Layout";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
