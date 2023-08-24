import { AxiosCall } from "./axios";

export default class BookingService {

  booked = async (body) => {
    try {
      debugger
     const response = await AxiosCall.post('/booking/booking', body);
     return response;
   } catch (err) {
       return err.response
   }
}

payment = async (body) => {
    try {
     const response = await AxiosCall.post('/client/payment', body);
     return response;
   } catch (err) {
       return err.response
   }
}

  viewbooking = async (id) => {
    try {
      const config = {
        headers: { Authorization: `${localStorage?.getItem("massage-token")}` },
        "content-type": "multipart/form-data",
      };
      const response = await AxiosCall.get(`/booking/showBooking/${id}`, config)
      return response
    } catch (error) {
      return error.response
    }
  }

//   updatePassword = async (id, data) => {
//     try {
//       const config = {
//         headers: { Authorization: `${localStorage?.getItem("massage-token")}` },
//       };
//       const response = await AxiosCall.put(`/admin/updateProviderPassword/${id}`, data, config)
//       return response
//     } catch (error) {
//       return error.response
//     }
//   }


}
