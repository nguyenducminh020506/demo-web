
export interface Department {
  code: string;    
  name: string;   
  foundedYear: number;
}

export interface Employee {
  id: string;        
  name: string;  
  gender: "Nam" | "Nữ";
  position: string;
  deptCode: string; 
}

export const DATA_DEPARTMENTS: Department[] = [
  { code: "IT", name: "Phòng Kỹ Thuật", foundedYear: 2015 },
  { code: "HR", name: "Phòng Nhân Sự", foundedYear: 2018 },
  { code: "MK", name: "Phòng Marketing", foundedYear: 2020 },
];

export const DATA_EMPLOYEES: Employee[] = [
  { id: "IT001", name: "Giáp Văn Hiếu", gender: "Nam", position: "Trưởng phòng", deptCode: "IT" },
  { id: "IT002", name: "Nguyễn Đức Minh", gender: "Nam", position: "Nhân viên", deptCode: "IT" },
  { id: "HR001", name: "Trần Văn Hưng", gender: "Nam", position: "Nhân viên", deptCode: "HR" },
  { id: "IT003", name: " Trần Nam Khánh", gender : "Nữ" , position: "GAY LỌ", deptCode: "IT"},
];