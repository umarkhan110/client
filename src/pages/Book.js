import React, { useState } from "react";
// import Modal from "react-modal";
// import DateCalender from "./DateCalender";
// import TimeRange from "./TimeRange";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import toast from "../components/Toast";
// import StripeCheckout from 'react-stripe-checkout';
import BookingService from "../api/booking";
import { useNavigate } from "react-router-dom";
import ButtonLoadingSpinner from "../components/buttonLoadingSpinner";
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

const Book = () => {
  const bookingService = new BookingService();
  const [chooseService, setChooseService] = useState("Massage");
  const [startDate, setStartDate] = useState(new Date());
  const [selectedData, setSelectedData] = useState();
  const [loader, setLoader] = useState(false)

  // const [stripetoken, setStripetoken] = useState(null)

  const navigate = useNavigate();
  const userId = localStorage.getItem("user");
  // const onToken = (token)=>{
  //     setStripetoken(token)
  // }
  // useEffect(() => {
  //   const makeRequest = async ()=>{
  //     try {
  //       const data={
  //         tokenId:stripetoken.id,
  //         amount:2000
  //       }
  //         const res = await bookingService.payment(data)
  //         console.log(res)
  //     } catch (error) {
  //         console.log(error)
  //     }
  //   }
  //   stripetoken && makeRequest()
  // }, [stripetoken])

  // let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function afterOpenModal() {
  //   subtitle.style.color = "#f00";
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  const [activeTab, setActiveTab] = useState("tab1");
  const showTabContent = (tabId) => {
    setActiveTab(tabId);
  };

  const optionType = [
    { value: "20m", label: "20m" },
    { value: "30m", label: "30m" },
    { value: "40m", label: "40m" },
  ];
  const guestOption = [
    { value: "guest", label: "Guest" },
    { value: "myself", label: "Myself" },
  ];
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);
  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      setSelectedData(value)
    );
    return () => subscription.unsubscribe();
  }, [watch]);
  const submit = async (fData) => {
  
    if (Object.keys(errors).length > 0) {
      notify("error", "Please fill in all required fields");
    }
    setLoader(true)
    const data = {
      userId: userId,
      service_type: chooseService,
      people: fData.people,
      therapist_gender: fData.therapist_gender,
      duration: fData.duration.value,
      who_is_this_massage_for: fData.who_is_this_massage_for.value,
      treatment: fData.treatment,
      address: fData.address,
      date: startDate,
    };
    try {
      const resp = await bookingService.booked(data);
      if (resp.status === 200) {
        notify("success", resp.data.message);
        navigate("/");
      } else {
        notify("error", resp.data.message);
      }
    } catch (error) {
      notify("error", error);
    }
    setLoader(false);
  };
  return (
    <div id="private_header">
      <div class="wrapper" data-url="" data-crt="book-session.html">
        <div class="main-wrap-append">
          <div class="login-area-main app-view-screen booking-main">
            <div class="booking-form">
              <div class="container">
                <h1 class="text-center">Please add details for booking</h1>
                <div class="tab-menu">
                  <div
                    class={
                      activeTab === "tab1" ? "tab-button active" : "tab-button"
                    }
                    onClick={() => showTabContent("tab1")}
                  >
                    Choose Service
                  </div>
                  <div
                    class={
                      activeTab === "tab2"
                        ? "tab-button  active"
                        : "tab-button center-btn"
                    }
                    onClick={() => showTabContent("tab2")}
                  >
                    Details
                  </div>
                  <div
                    class={
                      activeTab === "tab5" ? "tab-button  active" : "tab-button"
                    }
                    onClick={() => showTabContent("tab5")}
                  >
                    Date and Time
                  </div>
                  <div
                    class={
                      activeTab === "tab4" ? "tab-button  active" : "tab-button"
                    }
                    onClick={() => showTabContent("tab4")}
                  >
                    Pricing
                  </div>

                  <div
                    class={
                      activeTab === "tab3" ? "tab-button  active" : "tab-button"
                    }
                    onClick={() => showTabContent("tab3")}
                  >
                    Finish
                  </div>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                  {/* Choose Service Tab */}
                  <div
                    class="tab-content"
                    id="tab1"
                    style={{ display: activeTab === "tab1" ? "block" : "none" }}
                  >
                    <h2 class="text-center">Choose a serivce</h2>
                    <div class="d-flex flex-column flex-md-row gap-3 justify-content-center">
                      <div
                        className={`tab-select text-center ${
                          chooseService === "Massage" ? " active" : ""
                        }`}
                        onClick={() => setChooseService("Massage")}
                      >
                        <img
                          class="select-service-img"
                          src="/assets/images/service-select-1.png"
                          width={"100px"}
                          alt=""
                        />
                        <h3 class="text-center">Massage</h3>
                        <p class="text-center">
                          From relaxation to recovery — treatments that fit your
                          lifestyle.
                        </p>
                      </div>
                      <div
                        className={`tab-select text-center ${
                          chooseService === "Assisted Stretch" ? " active" : ""
                        }`}
                        onClick={() => setChooseService("Assisted Stretch")}
                      >
                        <img
                          class="select-service-img"
                          src="/assets/images/service-select-2.png"
                          width={"110px"}
                          alt=""
                        />
                        <h3 class="text-center">Assisted Stretch</h3>
                        <p class="text-center">
                          Give your muscles a refresh — target your needs and
                          pain points.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Detail Tab */}
                  <div
                    class="tab-content"
                    id="tab2"
                    style={{ display: activeTab === "tab2" ? "block" : "none" }}
                  >
                    <div class=" booking-new-form detailed-text">
                      <div class="container ">
                        <div class="row justify-content-center">
                          <div class="col-md-12">
                            <div class="form-details py-1">
                              <div class="row">
                                <div class="col-md-6">
                                  <label>How many people:</label>
                                  <div class="row gap-2 mt-0">
                                    <div class="tab-select-2 text-center p-0 col">
                                      <input
                                        {...register("people", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="single"
                                        id="field-single"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-single"
                                        class="w-100 active"
                                      >
                                        Single
                                      </label>
                                    </div>

                                    <div class="tab-select-2 text-center p-0 col">
                                      <input
                                        {...register("people", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="Multiple"
                                        id="field-Multiple"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-Multiple"
                                        class="w-100 active"
                                      >
                                        Multiple
                                      </label>
                                    </div>
                                  </div>
                                  {errors.people &&
                                    (errors.people.message ? (
                                      <span className="eror text-danger">
                                        {errors.people.message}
                                      </span>
                                    ) : (
                                      <span className="eror text-danger">
                                        This field is required
                                      </span>
                                    ))}
                                </div>

                                <div class="col-md-6">
                                  <label>Select Duration:</label>
                                  <Controller
                                    name="select"
                                    id="duration"
                                    control={control}
                                    {...register("duration", {
                                      required: true,
                                    })}
                                    render={({ field }) => (
                                      <Select
                                        {...field}
                                        options={optionType}
                                        // styles={colourStyles}
                                        placeholder="Select"
                                      />
                                    )}
                                  />

                                  {errors.duration &&
                                    (errors.duration.message ? (
                                      <span className="eror text-danger">
                                        {errors.duration.message}
                                      </span>
                                    ) : (
                                      <span className="eror text-danger">
                                        This field is required
                                      </span>
                                    ))}
                                </div>
                                <div class="col-md-6">
                                  <label>Therapist Gender:</label>
                                  <div class="row  mt-0">
                                    <div class="tab-select-2 text-center p-0 col">
                                      <input
                                        {...register("therapist_gender", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="male"
                                        id="field-male"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-male"
                                        class="w-100 active"
                                      >
                                        Male
                                      </label>
                                    </div>
                                    <div class="tab-select-2 text-center p-0 col">
                                      <input
                                        {...register("therapist_gender", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="female"
                                        id="field-female"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-female"
                                        class="w-100 active"
                                      >
                                        Female
                                      </label>
                                    </div>
                                    <div class="tab-select-2 text-center p-0 col">
                                      <input
                                        {...register("therapist_gender", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="other"
                                        id="field-other"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-other"
                                        class="w-100 active"
                                      >
                                        Other
                                      </label>
                                    </div>
                                  </div>
                                  {errors.therapist_gender &&
                                    (errors.therapist_gender.message ? (
                                      <span className="eror text-danger">
                                        {errors.therapist_gender.message}
                                      </span>
                                    ) : (
                                      <span className="eror text-danger">
                                        This field is required
                                      </span>
                                    ))}
                                </div>

                                <div class="col-md-6">
                                  <label>Who is this massage for?</label>
                                  <Controller
                                    name="select"
                                    id="who_is_this_massage_for"
                                    control={control}
                                    {...register("who_is_this_massage_for", {
                                      required: true,
                                    })}
                                    render={({ field }) => (
                                      <Select
                                        {...field}
                                        options={guestOption}
                                        // styles={colourStyles}
                                        placeholder="Select"
                                      />
                                    )}
                                  />
                                  {errors.who_is_this_massage_for &&
                                    (errors.who_is_this_massage_for.message ? (
                                      <span className="eror text-danger">
                                        {errors.who_is_this_massage_for.message}
                                      </span>
                                    ) : (
                                      <span className="eror text-danger">
                                        This field is required
                                      </span>
                                    ))}
                                </div>

                                <div class="col-md-12">
                                  <label>Choose a treatment:</label>
                                  <div class="row gap-2 mt-3">
                                    <div class="tab-select-2 text-center p-0 col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
                                      <input
                                        {...register("treatment", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="deep"
                                        id="field-deep"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-deep"
                                        class="w-100 active"
                                      >
                                        Deep Tissue
                                      </label>
                                    </div>
                                    <div class=" tab-select-2 text-center p-0 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                      <input
                                        {...register("treatment", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="swedish"
                                        id="field-swedish"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-swedish"
                                        class="w-100 active"
                                      >
                                        Swedish
                                      </label>
                                    </div>
                                    <div class=" tab-select-2 text-center p-0 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                      <input
                                        {...register("treatment", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="Prenatal"
                                        id="field-Prenatal"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-Prenatal"
                                        class="w-100 active"
                                      >
                                        Prenatal
                                      </label>
                                    </div>
                                    <div class=" tab-select-2 text-center p-0 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                      <input
                                        {...register("treatment", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="Sport"
                                        id="field-Sport"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-Sport"
                                        class="w-100 active"
                                      >
                                        Sport
                                      </label>
                                    </div>
                                    <div class=" tab-select-2 text-center p-0 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                      <input
                                        {...register("treatment", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="Postpartum"
                                        id="field-Postpartum"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-Postpartum"
                                        class="w-100 active"
                                      >
                                        Postpartum
                                      </label>
                                    </div>
                                    <div class=" tab-select-2 text-center p-0 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                      <input
                                        {...register("treatment", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="Reflexology"
                                        id="field-Reflexology"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-Reflexology"
                                        class="w-100 active"
                                      >
                                        Reflexology
                                      </label>
                                    </div>
                                    <div class=" tab-select-2 text-center p-0 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                      <input
                                        {...register("treatment", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="Lymphatic"
                                        id="field-Lymphatic"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-Lymphatic"
                                        class="w-100 active"
                                      >
                                        Regular Lymphatic
                                      </label>
                                    </div>
                                    <div class=" tab-select-2 text-center p-0 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                                      <input
                                        {...register("treatment", {
                                          required: true,
                                        })}
                                        type="radio"
                                        value="OPLymphatic"
                                        id="field-OPLymphatic"
                                        class="text-center mt-2 mb-1"
                                      />
                                      <label
                                        htmlFor="field-OPLymphatic"
                                        class="w-100 active"
                                      >
                                        Post-OPLymphatic
                                      </label>
                                    </div>
                                  </div>
                                  {errors.treatment &&
                                    (errors.treatment.message ? (
                                      <span className="eror text-danger">
                                        {errors.treatment.message}
                                      </span>
                                    ) : (
                                      <span className="eror text-danger">
                                        This field is required
                                      </span>
                                    ))}
                                </div>
                              </div>
                              {/* <a href="/" class="com-btn-view bop-form-btn">
                              Next
                            </a> */}
                              <div class="col-md-6"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Date and Time Tab */}
                  <div
                    class="tab-content"
                    id="tab5"
                    style={{ display: activeTab === "tab5" ? "block" : "none" }}
                  >
                    <div class=" cc">
                      <div class="container ">
                        <div class="row justify-content-center">
                          <div class="col-md-12">
                            <div class="form-details">
                              <div class="row">
                                <div className="col-12 col-md-6 col-sm-12">
                                  <label>Address:</label>
                                  <br></br>
                                  <input
                                    {...register("address", { required: true })}
                                    type="text"
                                    placeholder="Address"
                                    id="field-address"
                                    class="px-3 py-2"
                                  />
                                  {errors.address &&
                                    (errors.address.message ? (
                                      <span className="eror text-danger">
                                        {errors.address.message}
                                      </span>
                                    ) : (
                                      <span className="eror text-danger">
                                        This field is required
                                      </span>
                                    ))}
                                </div>
                                <div className="col-12 col-md-6 col-sm-12">
                                  <label>Date and Time:</label>
                                  <br></br>
                                  <DatePicker
                                    showIcon
                                    showTimeSelect
                                    minDate={new Date()}
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    className="px-3 py-2"
                                  />
                                  {/* <DateCalender/>
                              <TimeRange/> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pricing Tab */}
                  <div
                    class="tab-content"
                    id="tab4"
                    style={{ display: activeTab === "tab4" ? "block" : "none" }}
                  >
                    {/* <div>
                    <Modal
                      isOpen={modalIsOpen}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    ><div className="d-flex">
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Card Details</h2>
                      <button className="ml-auto modal-close-btn pl-5" onClick={closeModal}><i className="pl-5 mt-3 ml-5 fa fa-close "></i></button>
                    </div>
                <form>
                      <div className="my-2">
                        <lable>Name:</lable>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="my-2">
                        <lable>Card Number:</lable>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="my-2">
                        <lable>Security Code:</lable>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="my-2">
                        <lable>Expiration Date:</lable>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="mt-3">
                      <button class="com-btn-view text-center mt-5 credit-btn">Submit</button>

                      </div>
                      </form>
  
                    </Modal>
                  </div> */}
                    <div class=" cc">
                      <div className="container pricing-tab">
                        <div class="row justify-content-center">
                          <div class="pricingTab col-md-4">
                            <input
                              {...register("price", { required: true })}
                              type="radio"
                              value="onetime"
                              id="field-onetime"
                              class="text-center"
                            />
                            <label htmlFor="field-onetime" class="w-100 active">
                              <div class="col-md-12">
                                <div class="form-details">
                                  <div class="row">
                                    <div class="col-md-12">
                                      <h2 class="text-center">Pay as you go</h2>
                                      <h3 class="text-center">
                                        One time payment
                                      </h3>
                                      <h1 class="text-center">$100</h1>
                                      <hr></hr>
                                      <p class="text-center">No commitment</p>
                                      <div class="text-center">
                                        <button class="com-btn-view text-center mx-auto total-money">
                                          Book Now
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="pricingTab  col-md-4 ">
                            <input
                              {...register("price", { required: true })}
                              type="radio"
                              value="membership"
                              id="field-membership"
                              class="text-center"
                            />
                            <label
                              htmlFor="field-membership"
                              class="w-100 active"
                            >
                              <div class="col-md-12">
                                <div class="form-details">
                                  <div class="row">
                                    <div class="col-md-12">
                                      <h2 class="text-center">Membership</h2>
                                      <h3 class="text-center">$150.00/month</h3>
                                      <h1 class="text-center">$200</h1>
                                      <hr></hr>
                                      <p class="text-center">
                                        2 months commitment
                                      </p>
                                      <div class="text-center">
                                        <button class="com-btn-view text-center mx-auto total-money">
                                          Book Now
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="pricingTab col-md-4 ">
                            <input
                              {...register("price", { required: true })}
                              type="radio"
                              value="membershipPlus"
                              id="field-membershipPlus"
                              class="text-center"
                            />
                            <label
                              htmlFor="field-membershipPlus"
                              class="w-100 active"
                            >
                              <div class="col-md-12">
                                <div class="form-details ">
                                  <div class="row">
                                    <div class="col-md-12">
                                      <h2 class="text-center">
                                        Membership Plus
                                      </h2>
                                      <h3 class="text-center">$150.00/month</h3>
                                      <h1 class="text-center">$200</h1>
                                      <hr></hr>
                                      <p class="text-center">
                                        5 months commitment
                                      </p>
                                      <div class="text-center">
                                        <button class="com-btn-view text-center mx-auto total-money">
                                          Book Now
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                          {errors.price &&
                            (errors.price.message ? (
                              <span className="eror text-danger">
                                {errors.price.message}
                              </span>
                            ) : (
                              <span className="eror text-danger">
                                This field is required
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card Detail */}
                  <div
                    class="tab-content"
                    id="tab3"
                    style={{ display: activeTab === "tab3" ? "block" : "none" }}
                  >
                    <div class=" cc">
                      <div class="container ">
                        <div className="total-pricing highlight container mt-5">
                          <div class="row justify-content-center">
                            <div class="col-md-6">
                              <div class="form-details p-1 px-5">
                                <div class="row">
                                  <div class="col-md-12">
                                    {/* <h2 class="">
                                  Add Payment 
                                  <button class="com-btn-view text-center mx-auto add-card-btn" onClick={openModal}>Proceed Payment</button>
                                </h2> */}
                                    <h3>Your Selected Services</h3>
                                    <hr></hr>
                                    <div className="d-flex">
                                      <h5 class="text-center">Treatment:</h5>
                                      <h6 class="ml-auto text-capitalize">
                                        {selectedData?.treatment}
                                      </h6>
                                    </div>
                                    <div className="d-flex">
                                      <h5 class="text-center">
                                        Therapist Gender:
                                      </h5>
                                      <h6 class="ml-auto text-capitalize">
                                        {selectedData?.therapist_gender}
                                      </h6>
                                    </div>
                                    <div className="d-flex">
                                      <h5 class="text-center">People:</h5>
                                      <h6 class="ml-auto text-capitalize">
                                        {selectedData?.people}
                                      </h6>
                                    </div>
                                    <div className="d-flex">
                                      <h5 class="text-center">Duration:</h5>
                                      <h6 class="ml-auto text-capitalize">
                                        {selectedData?.duration?.value}
                                      </h6>
                                    </div>
                                    <div className="d-flex">
                                      <h5 class="text-center">Massage for:</h5>
                                      <h6 class="ml-auto text-capitalize">
                                        {
                                          selectedData?.who_is_this_massage_for
                                            ?.value
                                        }
                                      </h6>
                                    </div>
                                    <div className="d-flex">
                                      <h5 class="text-center">Address:</h5>
                                      <h6 class="ml-auto text-capitalize">
                                        {selectedData?.address}
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-details p-1 px-5">
                                <div class="row">
                                  <div class="col-md-12">
                                    <h2>Membership</h2>
                                    <br></br>
                                    <div className="d-flex">
                                      <h5 class="text-center">Package:</h5>
                                      <h6 class="ml-auto text-capitalize">
                                        {selectedData?.price}
                                      </h6>
                                    </div>
                                    <div className="d-flex">
                                      <h5 class="text-center">Price:</h5>
                                      <h6 class="text-center ml-auto">
                                        {selectedData?.price === "onetime"
                                          ? "$100"
                                          : selectedData?.price === "membership"
                                          ? "$150"
                                          : selectedData?.price ===
                                            "membershipPlus"
                                          ? "$200"
                                          : ""}
                                      </h6>
                                    </div>
                                    <hr></hr>
                                    <div className="d-flex">
                                      <h3 class="text-center">
                                        <b>Total:</b>
                                      </h3>
                                      <h3 class="text-center ml-auto">
                                        <b>
                                          {selectedData?.price === "onetime"
                                            ? "$100"
                                            : selectedData?.price ===
                                              "membership"
                                            ? "$150"
                                            : selectedData?.price ===
                                              "membershipPlus"
                                            ? "$200"
                                            : ""}
                                        </b>
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="confirm-btns d-flex">
                                    <div class="col-md-6 text-center">
                                      <a
                                        href="/"
                                        class="com-btn-view mt-0 bop-form-btn"
                                      >
                                        Cancel
                                      </a>
                                    </div>
                                    <div class="col-md-6 text-center">
                                      <button
                                        class="com-btn-view mt-0 bop-form-btn"
                                        type="submit"
                                      >
                                        {loader && (
              <ButtonLoadingSpinner ClassStyle="btn inline w-3 h-3 mr-3 align-self-center text-white spinner-border" role="status" />
            )}
                                        Submit
                                      </button>
                                      {/* {  Object.keys(errors).length > 0 ?
      notify("error", "Please fill in all required fields") :""} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
