import http from "../http-common";

class MyDataService {
  getAll() {
    return http.get("students/");
  }

  get(id) {
    return http.get(`students/Details/${id}`);
  }

  create(data) {
    return http.post("/students/Create/", data);
  }

  update(id, data) {
    return http.post(`/students/Edit/`, data);
  }

  delete(id) {
    return http.get(`/students/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByName(firstMidName) {
    return http.get(`/students/StudentsByValue?firstMidName=${firstMidName}`);
  }
}

export default new MyDataService();
