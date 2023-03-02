import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiData } from "../services/Worker";

function CreateEmployee() {
  const { id } = useParams();
  const { empid } = useParams();

  const nav = useNavigate();

  const [selectdep, setSelectDep] = useState("");

  const [showdep, setShowdep] = useState("");

  const [data, setData] = useState({
    dep: {
      depDescription: "",
      depEmpCount: 0,
      depHOD: "",
      depLocation: "",
      depName: "",
      id: "",
    },
    empAddress: "",
    empDOB: "",
    empDOH: "",
    empEmail: "",
    empJD: "",
    empName: "",
    empPhone: 0,
    empPosition: "",
    empSalary: 0,
    empid: 0,
  });

  const [dep, setDep] = useState([
    {
      depName: "",
      id: "",
    },
  ]);

  console.log(dep);
  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (empid) {
      ApiData.putEmp(empid, data).then((res) => {
        nav("/getALLEmp");
        alert("Data has been updated Sucessfully ");
      });
    } else {
      ApiData.postEmp(data).then((res) => {
        alert("Employee has been created sucessfully");
        nav("/getALLEmp");
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

  useEffect(() => {
    if (empid) {
      ApiData.getEmpById(empid).then((res) => {
        setData({
          dep: {
            depDescription: res.dep.depDescription,
            depEmpCount: res.dep.depEmpCount,
            depHOD: res.dep.depHOD,
            depLocation: res.dep.depLocation,
            depName: res.dep.depName,
            id: res.dep.id,
          },
          empAddress: res.empAddress,
          empDOB: res.empDOB,
          empDOH: res.empDOH,
          empEmail: res.empEmail,
          empJD: res.empJD,
          empName: res.empName,
          empPhone: res.empPhone,
          empPosition: res.empPosition,
          empSalary: res.empSalary,
          empid: res.empid,
        });

        // setSelectDep(res.dep.id);
        setShowdep(res.dep.depName);
      });
    }
  }, [empid]);

  const handleChangeDep = (e) => {
    const selectedDep = dep.find((item) => item.depName === e.target.value);
    const newData = { ...data };
    newData.dep.id = selectedDep.id;
    setSelectDep(e.target.value);
    setData(newData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await ApiData.getAll();
      setDep(resp);
    };
    fetchData();
  }, []);

  console.log(selectdep);
  console.log(data);

  return (
    <div>
      <div className="FormContainer">
        <h2 align="center">{empid ? "Update Employee" : "Create Employee"}</h2>
        <form className="CreateEmpForm" onSubmit={handleSubmit}>
          <div className="flexcard">
            <label>Department: </label>

            <select
              className="ip2"
              value={empid?showdep:selectdep}
              onChange={handleChangeDep}
              id="depName"
            >
              <option>--Select Department--</option>
              {dep.map((item) => {
                return (
                  <>
                    <option value={item.depName} key={item.id}>
                      {item.depName}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="flexcard">
            <label>Name: </label>
            <input
              className="ip"
              type="text"
              placeholder="Employee Name"
              required
              id="empName"
              value={data.empName}
              onChange={handleChange}
            />
          </div>
          <div className="flexcard">
            <label>Email: </label>
            <input
              className="ip"
              type="email"
              id="empEmail"
              placeholder="Email"
              value={data.empEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flexcard">
            <label>Phone: </label>
            <input
              className="ip"
              id="empPhone"
              type="number"
              value={data.empPhone}
              onChange={handleChange}
            />
          </div>
          <div className="flexcard">
            <label>Address: </label>
            <input
              className="ip"
              id="empAddress"
              type="text"
              value={data.empAddress}
              onChange={handleChange}
            />
          </div>
          <div className="flexcard">
            <label>Position: </label>
            <input
              className="ip"
              type="text"
              id="empPosition"
              placeholder="Position"
              value={data.empPosition}
              onChange={handleChange}
            />
          </div>
          <div className="flexcard">
            <label>Salary: </label>
            <input
              className="ip"
              id="empSalary"
              type="number"
              placeholder="Salary"
              value={data.empSalary}
              onChange={handleChange}
            />
          </div>
          <div className="flexcard">
            <label>Date of Birth: </label>
            <input
              className="ip"
              id="empDOB"
              type="date"
              placeholder="Date of Birth"
              value={data.empDOB}
              onChange={handleChange}
            />
          </div>
          <div className="flexcard">
            <label>Date of Hire: </label>
            <input
              className="ip"
              id="empDOH"
              type="date"
              placeholder="Date of Hire"
              value={data.empDOH}
              onChange={handleChange}
            />
          </div>
          <div className="flexcard">
            <label>Job Description: </label>
            <input
              className="ip"
              id="empJD"
              type="text"
              placeholder="Job Description"
              value={data.empJD}
              onChange={handleChange}
            />
          </div>
          <div className="buttonflex">
            <button className="btn255" type="submit">
              {empid ? "Update Employee" : "Create Employee"}
            </button>
            <button className="btn3" onClick={() => nav("/getALLEmp")}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEmployee;
