import React, { useState } from "react";

const Book = () => {
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

  return (
    <div id="private_header">
      <header class="login-header">
        <div
          class="back-btn-main"
          data-url="https://www.bigtoe.yoga/book-session"
        >
          <a
            href="jvascript:void(0)"
            data-back-section="address_main_block"
            class="back-btn hide back-link"
            id="add_add_show_hide"
          >
            <i class="fa fa-arrow-left" style={{ fontSize: "36px" }}></i>
          </a>
        </div>
        <div class="container">
          <div class="col-xs-12 text-center">
            <a class="logo-brand" href="/">
              <img src="/assets/images/logo.png" alt="Logo" />
            </a>
          </div>
        </div>
        <div class="right-top-main">
          <a href="register" class="register-link hidden-sm hidden-xs">
            Sign Up
          </a>
          <a href="/signin" class="login-link hidden-sm hidden-xs">
            Login
          </a>
          <a
            href="register"
            class="login-link responsive visible-sm visible-xs"
          >
            Sign Up
          </a>
        </div>
      </header>

      <div class="preloades" id="preloades" style={{ display: "none" }}>
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>

      <div class="wrapper" data-url="" data-crt="book-session.html">
        <div class="main-wrap-append">
          <div class="login-area-main app-view-screen booking-main">
            <div class="booking-form">
              {/* <div class="cube"></div>
<div class="cube"></div>
<div class="cube"></div>
<div class="cube"></div>
<div class="cube"></div>
<div class="cube"></div>
<div class="cube"></div>
<div class="cube"></div> */}
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
                  <div class=" booking-new-form">
                    <div class="container ">
                      <div class="row justify-content-center">
                        <div class="col-md-12">
                          <div class="form-details py-1">
                            <div class="row">
                              <div class="col-md-6">
                              <label>How many people:</label>                                <div class="tab-container mt-0">
                                  <div
                                    class="tab-select text-center p-0 w-full active"
                                    onClick={() => showTab(2)}
                                  >
                                 
                                    <h3 class="text-center mt-2 mb-1">Single</h3>

                                  </div>
                                  <div
                                    class="tab-select w-full p-0 text-center"
                                    onClick={() => showTab(3)}
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
                              <label>How many people:</label>    
                              <div class="tab-container mt-0">
                                  <div
                                    class="tab-select text-center p-0 w-full active"
                                    onClick={() => showTab(4)}
                                  >
                                 
                                    <h3 class="text-center mt-2 mb-1">Male</h3>

                                  </div>
                                  <div
                                    class="tab-select w-full p-0 text-center"
                                    onClick={() => showTab(5)}
                                  >
            
                                    <h3 class="text-center mt-2 mb-1">
                                      Female
                                    </h3>
                  
                                  </div>
                                  <div
                                    class="tab-select w-full p-0 text-center"
                                    onClick={() => showTab(6)}
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
                                    class="tab-select text-center p-0 w-full active"
                                    onClick={() => showTab(7)}
                                  >
                                 
                                    <h3 class="text-center mt-2 mb-1">Deep Tissue</h3>

                                  </div>
                                  <div
                                    class="tab-select w-full p-0 text-center"
                                    onClick={() => showTab(8)}
                                  >
            
                                    <h3 class="text-center mt-2 mb-1">
                                      Swedish
                                    </h3>
                  
                                  </div>
                                  <div
                                    class="tab-select w-full p-0 text-center"
                                    onClick={() => showTab(9)}
                                  >
            
                                    <h3 class="text-center mt-2 mb-1">
                                      Prenatal
                                    </h3>
                  
                                  </div>
                                  <div
                                    class="tab-select w-full p-0 text-center"
                                    onClick={() => showTab(10)}
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
                                    class="tab-select w-full p-0 text-center"
                                    onClick={() => showTab(11)}
                                  >
            
                                    <h3 class="text-center mt-2 mb-1">
                                      Postpartum
                                    </h3>
                  
                                  </div>
                                  <div
                                    class="tab-select w-full p-0 text-center"
                                    onClick={() => showTab(12)}
                                  >
            
                                    <h3 class="text-center mt-2 mb-1">
                                      Reflexology
                                    </h3>
                  
                                  </div>
                                  <div
                                    class="tab-select w-full p-0 text-center"
                                    onClick={() => showTab(13)}
                                  >
            
                                    <h3 class="text-center mt-2 mb-1">
                                      Regular Lymphatic
                                    </h3>
                  
                                  </div>
                                  <div
                                    class="tab-select w-full p-0 text-center"
                                    onClick={() => showTab(14)}
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
                <div
                  class="tab-content"
                  id="tab4"
                  style={{ display: activeTab === "tab4" ? "block" : "none" }}
                >
                  <div class=" cc">
                    <div class="container pricing-tab ">
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
                                <a href="/" class="com-btn-view text-center mx-auto">Book Now</a>
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
                                <a  href="/" class="com-btn-view text-center mx-auto">Book Now</a>
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
                                <a href="/" class="com-btn-view text-center mx-auto">Book Now</a>
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

            {/* <div class="">
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 -wrap">
                    <div class="title">
                      <a href="jvascript:void(0)" class="back-btn hide">
                        <img src="assets/css/images/angle-left-solid.html" alt="" />
                      </a>
                      <h2>Booking Form</h2>
                    </div>

                

                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
