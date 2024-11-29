import axios from "axios";

export const getAlumnos = () => {
  return axios.get("https://localhost:5000/estudiantes");
};

export const getKardexData = (matricula) => {
  return axios.get(`https://localhost:5000/estudiantes/${matricula}/kardex`);
};
export const createAlumno = (alumnoData) => {
  return axios.post("https://localhost:5000/estudiantes", alumnoData);
};
export const updateAlumno = (matricula, alumnoData) => {
  return axios.put(`https://localhost:5000/estudiantes/${matricula}`, alumnoData);
};
export const deleteAlumno = (matricula) => {
  return axios.delete(`https://localhost:5000/estudiantes/${matricula}`);
};