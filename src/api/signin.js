import { AxiosCall } from "./axios";

export default class SigninService {

  signup = async (body) => {
    try {
     const response = await AxiosCall.post(`client/signup`, body);
     return response;
   } catch (err) {
       return err.response
   }
  }
  
  signin = async (path, body) => {
    try {
     const response = await AxiosCall.post(`${path}/signin`, body);
     return response;
   } catch (err) {
       return err.response
   }
}


//   view = async (id) => {
//     try {
//       const config = {
//         headers: { Authorization: `Bearer ${localStorage?.getItem("aggadoo-token")}` },
//         "content-type": "multipart/form-data",
//       };
//     //  debugger

//       const response = await AxiosCall.get(`/trip-item?tripId=${id}`, config)
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }

//   update = async (id, data) => {
//     try {
//       const config = {
//         headers: { Authorization: `Bearer ${localStorage?.getItem("aggadoo-token")}` },
//       };
//       const response = await AxiosCall.put(`/notification/update-comment/${id}`, data, config)
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }


}
