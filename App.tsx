import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Trangchu from "./components/Trangchu";
import MyDepartment from "./components/MyDepartment";
import DepartmentManager from "./components/DepartmentManager";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 15, borderBottom: "1px solid #ccc", marginBottom: 20, background: "#f9f9f9" }}>
        <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
           <Link to="/" style={{ fontWeight: "bold", textDecoration: "none" }}>🏠 Trang chủ</Link>
          
           
           <span style={{color: "#ccc"}}>|</span>

           <Link to="/bo-phan-cua-ban" style={{ color: "blue", fontWeight: "bold", textDecoration: "none" }}>
            Bộ phận của bạn
           </Link>
           <Link to="/quan-ly-phong-ban" style={{ color: "green", fontWeight: "bold", textDecoration: "none" }}>
            Quản lý phòng ban
           </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Trangchu />} />
        <Route path="/bo-phan-cua-ban" element={<MyDepartment />} />
        <Route path="/quan-ly-phong-ban" element={<DepartmentManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;