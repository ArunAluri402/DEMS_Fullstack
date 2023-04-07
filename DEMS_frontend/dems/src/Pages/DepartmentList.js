import React, { useEffect, useState } from "react";
import { ApiData } from "../services/Worker";
import "./styles/DepartmentList.css";
import { useNavigate, Link, useParams } from "react-router-dom";
const DepartmentList = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const [getData, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    ApiData.getAll().then((res) => {
      if (sortOrder === "asc") {
        setData(res.sort((a, b) => a.depName.localeCompare(b.depName)));
      } else {
        setData(res.sort((a, b) => b.depName.localeCompare(a.depName)));
      }
    });
  }, [id, sortOrder, searchTerm]);

  const navigateCreate = () => {
    nav("/createDep");
  };

  const navigatetoViewEMP = () => {
    nav("/getALLEmp");
  };
  const deleteHandle = (id) => {
    ApiData.delete(id).then(() => {
      setData(getData.filter((item) => item.id !== id));
    });
  };

  return (
    <div>
      <div className="search-bar">
        <input
          className="ip"
          type="text"
          placeholder="Search department..."
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
      <h2 className="heading" align="center">
        Department List
      </h2>

      <button className="btn2" onClick={navigateCreate}>
        New Department
      </button>

      <button className="btn23" onClick={navigatetoViewEMP}>
        View Employees
      </button>

      <table className="table" align="center" cellPadding="8px">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Department Name</th>
            <th className="th">Department Description</th>
            <th className="th">Department Hod</th>
            <th className="th">Department Employee Count</th>
            <th className="th">Department Location</th>
            <th className="th">View</th>
            <th className="th">Edit</th>
            <th className="th">Delete</th>
          </tr>
        </thead>

        <tbody className="tbody">
          {getData
            .filter(
              (res) =>
                res.depName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                res.depDescription
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
            )

            .map((res) => {
              return (
                <tr align="center" key={res.id}>
                  <td className="td">{res.depName}</td>
                  <td className="td">{res.depDescription}</td>
                  <td className="td">{res.depHOD}</td>
                  <td className="td">{res.depEmpCount}</td>
                  <td className="td">{res.depLocation}</td>
                  <td className="td">
                    <Link className="btn" to={`/viewDep/${res.id}`}>
                      View
                    </Link>
                  </td>

                  <td className="td">
                    <Link className="btn" to={`/edit/${res.id}`}>
                      Edit
                    </Link>
                  </td>
                  <td className="td">
                    <Link>
                      <button
                        className="btn"
                        onClick={() => deleteHandle(res.id)}
                      >
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
