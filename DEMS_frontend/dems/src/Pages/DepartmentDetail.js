import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ApiData } from "../services/Worker";

function DepartmentDetail() {
  const { id } = useParams();
const nav= useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (id) {
      ApiData.getbyId(id).then((res) => {
        setData(res);
      });
    }
  }, [id]);

  

  return (
    <div>
      <div className="Container">
        {data &&
          [data].map((i) => {
            return (
              <>
                <div>
                  <div key={i.id}>
                    <h2 align="center">Department Details</h2>
                  </div>
                  <div className="DepView">
                    <h3 style={{ color: "white",fontSize:"12px" }}>
                      {" "}
                      Details of {i.depName} Department :{" "}
                    </h3>

                    {/* <hr style={{ width: "100%" }} /> */}
                  </div>
                </div>

                <div className="CreateDepForm3">
                  <h3 style={{ color: "white",fontSize:"12px" }}>
                    Department Name:
                    <span style={{ marginLeft: "15px" }}> {i.depName}</span>
                  </h3>

                  <h3 style={{ color: "white",fontSize:"12px" }}>
                    Department Description:
                    <span style={{ marginLeft: "15px" }}>
                      {" "}
                      {i.depDescription}
                    </span>
                  </h3>

                  <h3 style={{ color: "white",fontSize:"12px" }}>
                    Location:
                    <span style={{ marginLeft: "15px" }}> {i.depLocation}</span>
                  </h3>

                  <h3 style={{ color: "white",fontSize:"12px" }}>
                    HOD:
                    <span style={{ marginLeft: "15px" }}> {i.depHOD}</span>
                  </h3>

                  <h3 style={{ color: "white",fontSize:"12px" }}>
                    Number of Employees:
                    <span style={{ marginLeft: "15px" }}> {i.depEmpCount}</span>
                  </h3>
                </div>
              </>
            );
          })}
      </div>

      <div className="btnContainer">
        <Link to="/">
          <button className="btn255"> Back to Department List</button>
        </Link>
      </div>
    </div>
  );
}

export default DepartmentDetail;
