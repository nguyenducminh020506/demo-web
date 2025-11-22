
import React, { useEffect, useState } from "react";
import { DATA_EMPLOYEES, Employee } from "./TaskData";
import { Link } from "react-router-dom";

const MyDepartment = () => {
  const currentUserId = "IT001"; 

  const [colleagues, setColleagues] = useState<Employee[]>([]);
  const [myInfo, setMyInfo] = useState<Employee | null>(null);

  useEffect(() => {
    const me = DATA_EMPLOYEES.find(e => e.id === currentUserId);
    setMyInfo(me || null);

    if (me) {
      const list = DATA_EMPLOYEES.filter(e => e.deptCode === me.deptCode);
      setColleagues(list);
    }
  }, []);

  if (!myInfo) return <div>Đang tải thông tin...</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2 style={{ color: "#0056b3" }}>Bộ phận của bạn</h2>
      
      <div style={{ marginBottom: "20px", background: "#f0f8ff", padding: "10px", borderRadius: "5px" }}>
        <p>Xin chào: <strong>{myInfo.name}</strong></p>
        <p>Bạn đang xem danh sách nhân sự phòng: <strong>{myInfo.deptCode}</strong></p>
      </div>

      <table border={1} cellPadding={10} style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "#0056b3", color: "white" }}>
            <th>Mã NV</th>
            <th>Họ Tên</th>
            <th>Giới Tính</th>
            <th>Chức Vụ</th>
          </tr>
        </thead>
        <tbody>
          {colleagues.map((emp) => (
            <tr key={emp.id} style={{ backgroundColor: emp.id === currentUserId ? "#fff3cd" : "white" }}>
              <td>{emp.id}</td>
              <td>{emp.name} {emp.id === currentUserId && "(Bạn)"}</td>
              <td>{emp.gender}</td>
              <td>{emp.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <br />
      <Link to="/">Quay về trang chủ</Link>
    </div>
  );
};

export default MyDepartment;