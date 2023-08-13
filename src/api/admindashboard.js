import { AxiosCall } from "./axios";

export default class AdminDashboardService {

//   signin = async (path, body) => {
//     try {
//      const response = await AxiosCall.post(`${path}/signin`, body);
//      return response;
//    } catch (err) {
//        return err.response
//    }
// }

  view = async () => {
    try {
      const config = {
        headers: { Authorization: `${localStorage?.getItem("massage-token")}` },
        "content-type": "multipart/form-data",
      };
    //  debugger

      const response = await AxiosCall.get("/admin/showProviders", config)
      return response
    } catch (error) {
      return error.response
    }
  }

    viewById = async (id) => {
    try {
      const config = {
        headers: { Authorization: `${localStorage?.getItem("massage-token")}` },
      };
      const response = await AxiosCall.get(`/admin/showProvider/${id}`, config)
      return response
    } catch (error) {
      return error.response
    }
  }

  updatePassword = async (id, data) => {
    try {
      const config = {
        headers: { Authorization: `${localStorage?.getItem("massage-token")}` },
      };
      const response = await AxiosCall.put(`/admin/updateProviderPassword/${id}`, data, config)
      return response
    } catch (error) {
      return error.response
    }
  }

  viewAllBooking = async () => {
    try {
      const config = {
        headers: { Authorization: `${localStorage?.getItem("massage-token")}` },
      };
      const response = await AxiosCall.get(`/admin/showBooking`, config)
      return response
    } catch (error) {
      return error.response
    }
  }

}
