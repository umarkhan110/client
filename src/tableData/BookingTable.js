export const bookingcolumns = (data) => {
  return [
    {
      name: "No#",
      cell: (row, index) => {
        let i = index +1;
        return  "0" + i;
      }
    },
    {
      name: "Service Type",
      selector: 'service_type',
      cell: (row) => row["service_type"],
      sortable: false,
    },

    {
      name: "Treatment",
      selector:'treatment',
      cell: (row) => row["treatment"],
      sortable: false,
    },
    {
      name: "Duration",
      selector:'duration',
      cell: (row) => row["duration"],
      sortable: false,
    },
    {
      name: "Therapist Gender",
      selector:'therapist_gender',
      cell: (row) => row["therapist_gender"],
      sortable: false,
    },
    {
      name: "Message For",
      selector:'who_is_this_massage_for',
      cell: (row) => row["who_is_this_massage_for"],
      sortable: false,
    },
    {
      name: "Address",
      selector:'address',
      cell: (row) => row["address"],
      sortable: false,
    },{
      name: "Date",
      selector:'date',
      cell: (row) => row["date"],
      sortable: false,
    },
    // {
    //   name: "Actions",
    //   button: true,
    //   cell: (row) => (
    //     <div className="flex items-center">
    //       <Link style={{ marginRight: "10px", marginTop: "5px" }} to={`/dashboard/viewprovider/${row._id}`}>
    //         <button
    //           // onClick={() => {
    //           //   userId(row.id);
    //           // }}
    //         >
    //           {/* <Img
    //             src={search}
    //             alt="view-img"
    //             style={{ height: "17px", width: "20px", maxWidth: "unset" }}
    //           /> */}
    //           View
    //         </button>
    //       </Link>
    //       {/* <button
    //         style={{ marginRight: "10px" }}
    //         type="button"
    //         data-toggle="modal"
    //         className="tableactions_action"
    //       >
    //         <Img
    //           src={delte}
    //           alt="delete-img"
    //           style={{ height: "18px", width: "15px", maxWidth: "unset" }}
    //           onClick={() => Delete()}
    //           // onClick={() =>
    //           //   DeleteItem(
    //           //     row.id,
    //           //     data,
    //           //     service,
    //           //     row["fullName"],
    //           //     setLoader,
    //           //     "Users"
    //           //   )
    //           // }
    //         />
    //         Delete
    //       </button> */}
    //     </div>
        
    //   ),
    //   // width: "100px",
    //   // maxWidth: "100px",
    // },
  ];
};
