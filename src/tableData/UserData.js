// import Img from "react-cool-img";
import { Link } from "react-router-dom";
// import delte from "../assets/images/delete.png"
// import search from "../assets/images/View.png"
// import Delete from "../components/Delete";
export const columns = (data) => {
  return [
    {
      name: "No#",
      cell: (row, index) => {
        let i = index +1;
        return  "0" + i;
      },
      
      // width: "150px",
      // maxWidth: "150px",
    },

    {
      name: "Name",
      selector: 'fullname',
      cell: (row) => row["fullname"],
      sortable: true,
      // width: "300px",
      // maxWidth: "300px",
    },

    {
      name: "Email",
      selector:'email',
      cell: (row) => row["email"],
      sortable: true,
      // width: "350px",
      // maxWidth: "350px",
    },
    {
      name: "Status",
      selector:'status',
      cell: (row) => row["status"],
      sortable: true,
      // width: "350px",
      // maxWidth: "350px",
    },
    {
      name: "Actions",
      button: true,
      cell: (row) => (
        <div className="flex items-center">
          <Link style={{ marginRight: "10px", marginTop: "5px" }} to={`/dashboard/viewprovider/${row._id}`}>
            <button
              // onClick={() => {
              //   userId(row.id);
              // }}
            >
              {/* <Img
                src={search}
                alt="view-img"
                style={{ height: "17px", width: "20px", maxWidth: "unset" }}
              /> */}
              View
            </button>
          </Link>
          {/* <button
            style={{ marginRight: "10px" }}
            type="button"
            data-toggle="modal"
            className="tableactions_action"
          >
            <Img
              src={delte}
              alt="delete-img"
              style={{ height: "18px", width: "15px", maxWidth: "unset" }}
              onClick={() => Delete()}
              // onClick={() =>
              //   DeleteItem(
              //     row.id,
              //     data,
              //     service,
              //     row["fullName"],
              //     setLoader,
              //     "Users"
              //   )
              // }
            />
            Delete
          </button> */}
        </div>
        
      ),
      // width: "100px",
      // maxWidth: "100px",
    },
  ];
};
