import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiData } from "../services/Worker";
import { useParams } from "react-router-dom";
function EmpDetails() {
  const { empid } = useParams();

  const [empData, setEmpData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    ApiData.getAllEmp().then((res) => {
      if (sortOrder === "asc") {
        setEmpData(res.sort((a, b) => a.empName.localeCompare(b.empName)));
      } else {
        setEmpData(res.sort((a, b) => b.empName.localeCompare(a.empName)));
      }
    });
  }, [empid, sortOrder, searchTerm]);

  const delEmp = (empid) => {
    ApiData.deleteEmp(empid).then(() => {
      setEmpData(empData.filter((item) => item.empid !== empid));
    });
  };

  return (
    <div>
      <h2 className="heading" align="center">
        Employee Details
      </h2>
      <div className="search-bar">
        <input
          className="ip"
          type="text"
          placeholder="Search Employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus={true}
        />
      </div>
      <div className="sort-button">
        <button
          className="btn255"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Sort {sortOrder === "asc" ? "(A-Z)" : "(Z-A)"}
        </button>
      </div>
      <div className="button3">
        <Link to="/">
          <button className="btn2">Back</button>
        </Link>
      </div>

      <Link to="/createEmp">
        <button className="btn234">Create Employee</button>
      </Link>

      <table align="center" className="table2" cellPadding="8px">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Employee Name</th>
            <th className="th">Employee Position</th>
            <th className="th">Employee Salary</th>
            <th className="th">Employee Email</th>
            <th className="th">Employee Phone</th>
            <th className="th">Employee Address</th>
            <th className="th">Employee DOB</th>
            <th className="th">Employee DOH</th>
            <th className="th">Employee Job Description</th>
            <th className="th">View</th>
            <th className="th">Edit</th>
            <th className="th">Delete</th>
          </tr>
        </thead>

        <tbody className="tbody">
          {empData ? (
            empData
              .filter(
                (res) =>
                  res.empName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  res.empEmail.toLowerCase().includes(searchTerm.toLowerCase())
              )

              .map((i, k) => {
                return (
                  <tr align="center" key={i.empid}>
                    <td className="td">{i.empName}</td>
                    <td className="td">{i.empPosition}</td>
                    <td className="td">{i.empSalary}</td>
                    <td className="td">{i.empEmail}</td>
                    <td className="td">{i.empPhone}</td>
                    <td className="td">{i.empAddress}</td>
                    <td className="td">{i.empDOB}</td>
                    <td className="td">{i.empDOH}</td>
                    <td className="td">{i.empJD}</td>
                    <td className="td">
                      <Link to={`/viewEmp/${i.empid}`}>
                        <button className="btn">View</button>
                      </Link>
                    </td>
                    <td className="td">
                      <Link to={`/editEmp/${i.empid}`}>
                        <button className="btn">Edit</button>
                      </Link>
                    </td>
                    <td className="td">
                      <Link>
                        <button className="btn" onClick={() => delEmp(i.empid)}>
                          Delete
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })
          ) : (
            <tr>
              {" "}
              <th>Nodata</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmpDetails;
