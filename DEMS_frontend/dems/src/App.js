import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateDepartment from "./Pages/CreateDepartment";
import CreateEmployee from "./Pages/CreateEmployee";
import DepartmentDetail from "./Pages/DepartmentDetail";
import DepartmentList from "./Pages/DepartmentList";
import EmpDetails from "./Pages/EmpDetails";
import ViewEmp from "./Pages/ViewEmp";

function App() {
  return (
    <div className="App">
      {/* <Dashboard/> */}
      <Routes>
        <Route path="/" element={<DepartmentList />} />
        <Route path="/createDep" element={<CreateDepartment />} />
        <Route path="/edit/:id" element={<CreateDepartment />} />
        <Route path="/viewDep/:id" element={<DepartmentDetail />} />
        <Route path="/getALLEmp" element={<EmpDetails />} />
        <Route path="/createEmp" element={<CreateEmployee />} />
        <Route path="/editEmp/:empid" element={<CreateEmployee />} />
        <Route path="/viewEmp/:empid" element={<ViewEmp />} />
      </Routes>
    </div>
  );
}

export default App;
