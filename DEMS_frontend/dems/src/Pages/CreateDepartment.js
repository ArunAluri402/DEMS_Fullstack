import React, { useEffect, useState } from "react";
import { ApiData } from "../services/Worker";
import "./styles/CreateDep.css";
import { useNavigate, useParams } from "react-router-dom";

const CreateDepartment = () => {
  const { id } = useParams();

  const nav = useNavigate();
  const [data, setData] = useState({
    depName: "",
    depDescription: "",
    depHOD: "",
    depLocation: "",
    depEmpCount: 0,
  });

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      ApiData.put(id, data).then((res) => {
        nav("/");
        alert("Data has been updated Sucessfully ");
      });
    } else {
      ApiData.post(data).then((res) => {
        setData(res.data);
        alert("Department has been created sucessfully");
        nav("/");
      });
    }
  };

  useEffect(() => {
    if (id) {
      ApiData.getbyId(id).then((res) => {
        setData({
          depName: res.depName,
          depDescription: res.depDescription,
          depHOD: res.depHOD,
          depLocation: res.depLocation,
          depEmpCount: parseInt(res.depEmpCount),
        });
      });
    }
  }, [id]);

  return (
    <div className="FormContainer">
      <h2 align="center"> {id ? "Update Department" : "Create Department"}</h2>
      <form className="CreateDepForm" onSubmit={handleSubmit}>
        <div className="flexcard">
          <label>Department Name: </label>
          <input
            className="ip"
            type="text"
            placeholder="Department Name"
            required
            id="depName"
            value={data.depName}
            onChange={handleChange}
          />
        </div>
        <div className="flexcard">
          <label>Department Description: </label>
          <input
            className="ip"
            type="text"
            id="depDescription"
            placeholder=" Department Description"
            value={data.depDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flexcard">
          <label>Department Location: </label>
          <input
            className="ip"
            type="text"
            id="depLocation"
            placeholder="Department Location"
            value={data.depLocation}
            onChange={handleChange}
          />
        </div>
        <div className="flexcard">
          <label>Department HOD: </label>
          <input
            className="ip"
            type="text"
            id="depHOD"
            placeholder="Head of Department"
            value={data.depHOD}
            onChange={handleChange}
          />
        </div>
        <div className="flexcard">
          <label>Number of Employees: </label>
          <input
            className="ip"
            id="depEmpCount"
            type="number"
            placeholder="Number of Employees"
            value={data.depEmpCount}
            onChange={handleChange}
          />
        </div>
        <div className="buttonflex">
          <button className="btn255" type="submit">
            {id ? "Update Department" : "Create Department"}
          </button>
          <button className="btn3" onClick={() => nav("/")}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDepartment;
