import React, { useState } from "react";
import Modal from 'react-modal';
import DateCalender from "./DateCalender";
import TimeRange from "./TimeRange";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const Book = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const handleButtonClick = () => {
    setIsHighlighted(true);
  };


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }



  const [activeTab, setActiveTab] = useState("tab1");

  const showTabContent = (tabId) => {
    setActiveTab(tabId);
  };

  const showTab = (tabIndex) => {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll(".tab-select");
    console.log(tabButtons)

    // Deactivate all tab buttons
    tabButtons.forEach((button) => {
      button.classList.remove("active");
    });

    // Activate the selected tab button
    tabButtons[tabIndex].classList.add("active");
  };



  const showTabG = (tabIndex) => {
    // Get all tab buttons
    const tabButtonsG = document.querySelectorAll(".tab-select-g");
    console.log(tabButtonsG)

    // Deactivate all tab buttons
    tabButtonsG.forEach((button) => {
      button.classList.remove("active");
    });

    // Activate the selected tab button
    tabButtonsG[tabIndex].classList.add("active");
  };




  const showTabType = (tabIndex) => {
    // Get all tab buttons
    const tabButtonsType = document.querySelectorAll(".tab-select-Type");
    console.log(tabButtonsType)

    // Deactivate all tab buttons
    tabButtonsType.forEach((button) => {
      button.classList.remove("active");
    });

    // Activate the selected tab button
    tabButtonsType[tabIndex].classList.add("active");
  };




  
  const showTabPeople = (tabIndex) => {
    // Get all tab buttons
    const tabButtonsPeople = document.querySelectorAll(".tab-select-2");
    console.log(tabButtonsPeople)

    // Deactivate all tab buttons
    tabButtonsPeople.forEach((button) => {
      button.classList.remove("active");
    });

    // Activate the selected tab button
    tabButtonsPeople[tabIndex].classList.add("active");
  };


  return (
    <div id="private_header">

      <div class="wrapper" data-url="" data-crt="book-session.html">
        <div class="main-wrap-append">
          <div class="login-area-main app-view-screen booking-main">
            <div class="booking-form">
              <div class="container">
                <h1 class="text-center">Please add details for booking.</h1>
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
                      activeTab === "tab4" ? "tab-button  active" : "tab-button"
                    }
                    onClick={() => showTabContent("tab4")}
                  >
                    Pricing
                  </div>
                  <div
                    class={
                      activeTab === "tab5" ? "tab-button  active" : "tab-button"
                    }
                    onClick={() => showTabContent("tab5")}
                  >
                    Location
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

                <div
                  class="tab-content"
                  id="tab1"
                  style={{ display: activeTab === "tab1" ? "block" : "none" }}
                >
                  <h2 class="text-center">Choose a serivce</h2>
                  <div class="tab-container">
                    <div
                      class="tab-select text-center active"
                      onClick={() => showTab(0)}
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
                      class="tab-select text-center"
                      onClick={() => showTab(1)}
                    >
                      <img
                        class="select-service-img"
                        src="/assets/images/service-select-2.png"
                        width={"110px"}
                        alt=""
                      />
                      <h3 class="text-center">Assisted Stretch</h3>
                      <p class="text-center">
                        Give your muscles a refresh — target your needs and pain
                        points.
                      </p>
                    </div>
                  </div>

                </div>
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
                                <label>How many people:</label>                                <div class="tab-container mt-0">
                                  <div
                                    class="tab-select-2 text-center p-0 w-full active"
                                    onClick={() => showTabPeople(0)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">Single</h3>

                                  </div>
                                  <div
                                    class="tab-select-2 w-full p-0 text-center"
                                    onClick={() => showTabPeople(1)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">
                                      Multiple
                                    </h3>

                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <label>Select Duration:</label>
                                <select class="form-control">
                                  <option>20m</option>
                                  <option>30m</option>
                                  <option>40m</option>
                                </select>

                              </div>

                              <div class="col-md-6">
                                <label>Gender:</label>
                                <div class="tab-container mt-0">
                                  <div
                                    class="tab-select-g text-center p-0 w-full active"
                                    onClick={() => showTabG(0)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">Male</h3>

                                  </div>
                                  <div
                                    class="tab-select-g w-full p-0 text-center"
                                    onClick={() => showTabG(1)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">
                                      Female
                                    </h3>

                                  </div>
                                  <div
                                    class="tab-select-g w-full p-0 text-center"
                                    onClick={() => showTabG(2)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">
                                      Either
                                    </h3>

                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <label>Who is this massage for?</label>
                                <select class="form-control">
                                  <option>Guest</option>
                                  <option>Myselft</option>
                                </select>

                              </div>
                              <div class="col-md-12">
                                <label>Choose a treatment:</label>
                                <div class="tab-container mt-0">
                                  <div
                                    class="tab-select-Type text-center p-0 w-full active"
                                    onClick={() => showTabType(0)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">Deep Tissue</h3>

                                  </div>
                                  <div
                                    class="tab-select-Type w-full p-0 text-center"
                                    onClick={() => showTabType(1)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">
                                      Swedish
                                    </h3>

                                  </div>
                                  <div
                                    class="tab-select-Type w-full p-0 text-center"
                                    onClick={() => showTabType(2)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">
                                      Prenatal
                                    </h3>

                                  </div>
                                  <div
                                    class="tab-select-Type w-full p-0 text-center"
                                    onClick={() => showTabType(3)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">
                                      Sport
                                    </h3>

                                  </div>





                                </div>
                              </div>
                              <div class="col-md-12">
                                <div class="tab-container mt-0">

                                  <div
                                    class="tab-select-Type w-full p-0 text-center"
                                    onClick={() => showTabType(4)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">
                                      Postpartum
                                    </h3>

                                  </div>
                                  <div
                                    class="tab-select-Type w-full p-0 text-center"
                                    onClick={() => showTabType(5)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">
                                      Reflexology
                                    </h3>

                                  </div>
                                  <div
                                    class="tab-select-Type w-full p-0 text-center"
                                    onClick={() => showTabType(6)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">
                                      Regular Lymphatic
                                    </h3>

                                  </div>
                                  <div
                                    class="tab-select-Type w-full p-0 text-center"
                                    onClick={() => showTabType(7)}
                                  >

                                    <h3 class="text-center mt-2 mb-1">
                                      Post-OPLymphatic
                                    </h3>

                                  </div>

                                </div>
                              </div>
                            </div>
                            <a href="/" class="com-btn-view bop-form-btn">
                              Next
                            </a>
                            <div class="col-md-6"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-content"
                  id="tab3"
                  style={{ display: activeTab === "tab3" ? "block" : "none" }}
                >
                  <div class=" cc">
                    <div class="container ">
                      <div class="row justify-content-center">
                        <div class="col-md-6">
                          <div class="form-details">
                            <div class="row">
                              <div class="col-md-12">
                                <h2 class="text-center">
                                  <i
                                    class="confirm-fa fa fa-check-square-o"
                                    aria-hidden="true"
                                  ></i>
                                  <br></br>
                                  Please Confirm for the Booking
                                </h2>
                              </div>
                            </div>
                            <div className="confirm-btns">
                             
                            <div class="col-md-6 text-center">
                              <a
                                href="/"
                                class="com-btn-view mt-0 bop-form-btn"
                              >
                                Apply now
                              </a>
                            </div>
                            <div class="col-md-6 text-center">
                              <a
                                href="/"
                                class="com-btn-view mt-0 bop-form-btn"
                              >
                                Cancel
                              </a>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>






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
                              <div className="col-md-12">
                                <DateCalender/>
                                <TimeRange/>
                              </div>
                            </div>
                              <div className="confirm-btns">
                            <div class="col-md-6 text-center">
                              <a
                                href="/"
                                class="com-btn-view mt-0 bop-form-btn"
                              >
                                Apply now
                              </a>
                            </div>
                            <div class="col-md-6 text-center">
                              <a
                                href="/"
                                class="com-btn-view mt-0 bop-form-btn"
                              >
                                Cancel
                              </a>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>








                <div
                  class="tab-content"
                  id="tab4"
                  style={{ display: activeTab === "tab4" ? "block" : "none" }}
                >
                  <div>
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
                  </div>
                  <div class=" cc">
                    <div className={isHighlighted ? 'container pricing-tab highlight' : 'container pricing-tab'}>
                      <div class="row justify-content-center">
                        <div class="col-md-4">
                          <div class="form-details p-1">
                            <div class="row">
                              <div class="col-md-12">
                                <h2 class="text-center">
                                  Pay as you go
                                </h2>
                                <h3 class="text-center">One time payment</h3>
                                <h1 class="text-center">$100</h1>
                                <hr></hr>
                                <p class="text-center">No commitment</p>
                                <div class="text-center">
                                  <button class="com-btn-view text-center mx-auto total-money"  onClick={handleButtonClick}>Book Now</button>
                                </div>
                              </div>
                            </div>


                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-details p-1">
                            <div class="row">
                              <div class="col-md-12">
                                <h2 class="text-center">
                                  Membership
                                </h2>
                                <h3 class="text-center">$150.00/month</h3>
                                <h1 class="text-center">$200</h1>
                                <hr></hr>
                                <p class="text-center">2 months commitment</p>
                                <div class="text-center">
                                  <button class="com-btn-view text-center mx-auto total-money">Book Now</button>
                                </div>
                              </div>
                            </div>


                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-details p-1">
                            <div class="row">
                              <div class="col-md-12">
                                <h2 class="text-center">
                                  Membership Plus
                                </h2>
                                <h3 class="text-center">$150.00/month</h3>
                                <h1 class="text-center">$200</h1>
                                <hr></hr>
                                <p class="text-center">5 months commitment</p>
                                <div class="text-center">
                                  <button class="com-btn-view text-center mx-auto total-money">Book Now</button>
                                </div>
                              </div>
                            </div>


                          </div>
                        </div>


                      </div>
                    </div>

                    <div className={isHighlighted ? 'total-pricing highlight container mt-5' : 'total-pricing container mt-5'}>
                      <div class="row justify-content-center">
                        <div class="col-md-6">
                          <div class="form-details p-1 px-5">
                            <div class="row">
                              <div class="col-md-12">
                                <h2 class="">
                                  Add Payment 
                                  <button class="com-btn-view text-center mx-auto add-card-btn" onClick={openModal}>Proceed Payment</button>
                                </h2>
                                <h3 >Time</h3>
                                <div className="d-flex">
                                <h4 class="text-center">Tomorrow </h4>
                                <h4 class="text-center ml-auto">July 24, 2023</h4>
                                </div>
                                <div className="d-flex">
                                <h4 class="text-center">08:00 AM </h4>
                                <h4 class="text-center ml-auto">11:00 AM</h4>
                                </div>
                            <hr></hr>
                            <p>We will pre-authorize a hold on your payment method for the total amount above and charge for it after your appointment is completed</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-details p-1 px-5">
                            <div class="row">
                              <div class="col-md-12">
                                <h2 >
                                  Membership
                                </h2>
                                <div className="d-flex">
                                <h3 class="text-center">Package:</h3>
                                <h3 class="text-center ml-auto">$150.00/month</h3>
                                </div>
                                <div className="d-flex">
                                <h3 class="text-center"><b>Due Today:</b></h3>
                                <h3 class="text-center ml-auto"><b>$200</b></h3>
                                </div>
                                <hr></hr>
                                <div className="d-flex">
                                <h3 class="text-center"><b>Total:</b></h3>
                                <h3 class="text-center ml-auto"><b>$200</b></h3>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
