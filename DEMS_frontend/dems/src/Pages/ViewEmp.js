import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { ApiData } from "../services/Worker";

function ViewEmp() {
  const { empid } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    if (empid) {
      ApiData.getEmpById(empid).then((res) => {
        setData(res);
      });
    }
  }, [empid]);

  return (
    <div>
      <div className="Container">
        {data &&
          [data].map((i) => {
            return (
              <>
                <div>
                  <div key={i.empid}>
                    <h2 align="center">Employee Details</h2>
                  </div>
                  <div className="EmpView">
                    <h3 style={{ color: "white" }}>
                      {" "}
                      Details of {i.empName} :{" "}
                    </h3>

                    {/* <hr style={{ width: "100%" }} /> */}
                  </div>
                </div>

                <div className="CreateDepForm5">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 style={{ color: "white" }}>
                      Name:
                      <span style={{ marginLeft: "15px" }}> {i.empName}</span>
                    </h3>

                    <h3 style={{ color: "white" }}>
                      Email:
                      <span style={{ marginLeft: "15px" }}> {i.empEmail}</span>
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 style={{ color: "white" }}>
                      Phone:
                      <span style={{ marginLeft: "15px" }}> {i.empPhone}</span>
                    </h3>

                    <h3 style={{ color: "white" }}>
                      Position:
                      <span style={{ marginLeft: "15px" }}>
                        {" "}
                        {i.empPosition}
                      </span>
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 style={{ color: "white" }}>
                      Job Description:
                      <span style={{ marginLeft: "15px" }}> {i.empJD}</span>
                    </h3>

                    <h3 style={{ color: "white" }}>
                      Salary:
                      <span style={{ marginLeft: "15px" }}> {i.empSalary}</span>
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 style={{ color: "white" }}>
                      Date of Birth:
                      <span style={{ marginLeft: "15px" }}> {i.empDOB}</span>
                    </h3>

                    <h3 style={{ color: "white" }}>
                      Date of Hire:
                      <span style={{ marginLeft: "15px" }}> {i.empDOH}</span>
                    </h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 style={{ color: "white" }}>
                      Address:
                      <span style={{ marginLeft: "15px" }}>
                        {" "}
                        {i.empAddress}
                      </span>
                    </h3>
                    <h3 style={{ color: "white" }}>
                      Department:
                      <span style={{ marginLeft: "15px" }}>
                        {" "}
                        {i.dep.depName}
                      </span>
                    </h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 style={{ color: "white" }}>
                      Department HOD:
                      <span style={{ marginLeft: "15px" }}>
                        {" "}
                        {i.dep.depHOD}
                      </span>
                    </h3>

                    <h3 style={{ color: "white" }}>
                      Department Location:
                      <span style={{ marginLeft: "15px" }}>
                        {" "}
                        {i.dep.depLocation}
                      </span>
                    </h3>
                  </div>
                </div>
              </>
            );
          })}
      </div>

      <div className="btnContainer">
        <Link to="/getALLEmp">
          <button className="btn255"> Back to Employee List</button>
        </Link>
      </div>
    </div>
  );
}

export default ViewEmp;
