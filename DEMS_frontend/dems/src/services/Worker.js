import axios from "axios";
const url = "http://localhost:8080/api";

export const ApiData = {
  //employee api
  getAllEmp: async () => {
    const resp = await axios.get(`${url}/getEmpAll`);
    return resp.data;
  },
  postEmp: async (data) => {
    const response = await axios.post(`${url}/AddEmp`, data);
    return response.data;
  },

  getEmpById: async (id) => {
    const response = await axios.get(`${url}/emp/${id}`);
    return response.data;
  },

  deleteEmp: async (id) => {
    const res = await axios.delete(`${url}/delEmp/${id}`);
    return res.data;
  },

  putEmp: async (id, data) => {
    const response = await axios.put(`${url}/updateEmp/${id}`, data);
    return response.data;
  },
  //department api

  getAll: async () => {
    const resp = await axios.get(`${url}/GetAllDep`);
    return resp.data;
  },

  post: async (data) => {
    const response = await axios.post(`${url}/AddDep`, data);
    return response.data;
  },

  getbyId: async (id) => {
    const response = await axios.get(`${url}/dep/${id}`);
    return response.data;
  },

  put: async (id, data) => {
    const response = await axios.put(`${url}/update/${id}`, data);
    return response.data;
  },
  delete: async (id) => {
    const response = await axios.delete(`${url}/del/${id}`);
    return response.data;
  },
};
