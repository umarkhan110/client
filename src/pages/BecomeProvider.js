import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const BecomeProvider = () => {
  return (
    <>
      <div class="preloades" style={{ display: "none" }}>
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>

      <div
        class="wrapper"
        data-url="https://www.bigtoe.yoga/booking/session"
        data-crt="index.html"
      >
        <div class="banner center-view bap-section">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-xs-12 hiddenxs">
                <div class="content-view fadeInLeft">
                  <h2>Become A Partner Provider</h2>
                  <a href="/" class="com-btn-view w-25">
                    Apply now
                  </a>
                  <h1>
                    <span>
                      <a
                        href="/"
                        class="typewrite"
                        data-period="500"
                        data-type='["Massage on Demand","Private Yoga Classes"]'
                      >
                        <span class="wrap"></span>
                      </a>
                    </span>
                  </h1>
                  {/* <h1>in seconds</h1> */}
                </div>
              </div>

              <div class="col-sm-6 col-xs-12 main-video-box">
                <img
                  class="bap-img"
                  src="/assets/images/bap-img.png"
                  width={"100%"}
                  alt=""
                />
              </div>

              <div class="col-sm-6 col-xs-12">
                {/* <img class="bap-img"  src="/assets/images/bap-img.png" width={"100%"} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
        <div class="steps">
          <div class="container">
            <h1 class="text-center">
              Calling all massage therapists and yoga teachers
            </h1>
            <p class="text-center">
              Our platform connects the clients directly with massage therapists
              and yoga teachers
            </p>
            <div class="row">
              <div class="col-md-4">
                <div class="bop-step-box text-center">
                  <div class="bop-step-icon">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                  </div>
                  <div class="bop-step-text">
                    <h3>Work on your schedule</h3>
                    <p>
                      Respond only to requests that work with your availability.
                      Get paid fast.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="bop-step-box text-center">
                  <div class="bop-step-icon">
                    <i class="fa fa-code-fork" aria-hidden="true"></i>
                  </div>
                  <div class="bop-step-text">
                    <h3>Provider app</h3>
                    <p>
                      Manage requests and bookings in one place, on Bigtoe
                      provider app
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="bop-step-box text-center">
                  <div class="bop-step-icon">
                    <i class="fa fa-cubes" aria-hidden="true"></i>
                  </div>
                  <div class="bop-step-text">
                    <h3>Seamless experience</h3>
                    <p>
                      We take care of payments, late cancellation fees and
                      tipping for you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bop-form">
          <div class="container">
            <h1 class="text-center">Become a Partner Provider</h1>
            <p class="text-center">
              This contents of this form will be used to verify you and to set
              up your account in our system.
            </p>
            <div class="row">
              <div class="col-md-7">
                <div class="form-details">
                  <div class="row">
                    <div class="col-md-6">
                      <label>First Name</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="col-md-6">
                      <label>First Name</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="col-md-6">
                      <label>First Name</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="col-md-6">
                      <label>First Name</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="col-md-6">
                      <label>First Name</label>
                      <select class="form-control">
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label>First Name</label>
                      <select class="form-control">
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label>First Name</label>
                      <select class="form-control">
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label>First Name</label>
                      <select class="form-control">
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                      </select>
                    </div>
                    <div class="col-md-12">
                      <label>First Name</label>
                      <select class="form-control">
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                      </select>
                    </div>
                    <div class="col-md-12">
                      <label>First Name</label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="col-md-12">
                      <label>First Name</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <a href="/" class="com-btn-view bop-form-btn">Apply now</a>
                </div>
              </div>

              <div class="col-md-5">
                <img
                  class="bap-img-form"
                  src="/assets/images/yoga-a-3.jpg"
                  width={"100%"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div class="experience">
        <div class="container">
            <h2 class="text-center experience-heading">How it works</h2>
            <div class="text-center">
            <img src="/assets/images/zigzag.png" class="" width={"50px"} alt="" />
            </div>

            <div class="row">
                <div class="col-md-4 step-boxes">
                    <h3 class="text-center steps">Step 1</h3>
                    <div class="text-center step-art">
                    <img class="step-img" src="/assets/images/step-1-img.png" width={"300px"} height={"250px"} alt="" />
                    </div>
                        <h3 class="text-center">Select your preferred type of massage from the list,session duration, date and time.</h3>
                </div> 
                <div class="col-md-4 step-boxes">
                    <h3 class="text-center steps">Step 2</h3>
                    <div class="text-center step-art">
                    <img class="step-img" src="/assets/images/step-2-img.png" width={"300px"} height={"250px"} alt="" />
                    </div>
                        <h3 class="text-center">We’ll create a booking for you and assign a therapist for the requested date/time</h3>
                </div> 
                <div class="col-md-4 step-boxes">
                    <h3 class="text-center steps">Step 3</h3>
                    <div class="text-center step-art">
                    <img class="step-img" src="/assets/images/step-3-img.png" width={"300px"} height={"250px"} alt="" />
                    </div>
                        <h3 class="text-center">Sit back and relax, your provider comes to you with a massage table, sheets and lotions/oils.</h3>
                </div> 
            </div>
        </div>
        </div> */}
        {/* <div class="pad-block-view">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="title">
                            <h2>Seamless booking</h2>
                            <p>Access a network of Yoga teachers and massage therapists at affordable prices</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-xs-12">
                        <div class="imagebox">
                            <div class="bg-img appointments">
                                <img src="/assets/images/100.png" alt="3" />
                            </div>
                            <div class="content-block">
                                <h3>Massage</h3>
                                <p>Book an in-home massage session in seconds.Choose from Deep Tissue, Swedish, Sports, Lymphatic, Reflexology & Prenatal.</p>
                                <a class="com-btn-view" href="in-home-massage.html">Learn More</a>
                            </div>
                        </div>
                    </div>
                   <div class="col-sm-6 col-xs-12">
                        <div class="imagebox">
                            <div class="bg-img classes">
                                <img src="/assets/images/100.png" alt="100" />
                            </div>
                            <div class="content-block">
                                <h3>Private Yoga</h3>
                                <p>Book a private Yoga class in seconds. Choose from Flow, Alignment, Restorative, Prenatal & Meditation.</p>
                                <a class="com-btn-view" href="appointments.html">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <div class="services">
        <div class="container">
            <h2 class="text-center experience-heading">Our Services</h2>
            <Swiper
         slidesPerView={3}
        cssMode={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper services-slider"
      >
        <SwiperSlide>
            <div class="slider-box">
                <div class="slider-img">
                <img  src="/assets/images/deep-massage.jpg" width={"300px"} alt="" />
                </div>
                <div class="slider-content">
                    <h3>Deep Tissue</h3>
                    <p>Deep tissue massage is a therapeutic technique.</p>
                    <a href="/" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/swedish-massage.png" width={"300px"} alt="" />
                </div>
                <div class="slider-content">
                    <h3>Swedish</h3>
                    <p>It use to increase blood circulation and release tension.</p>
                    <a href="/" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/parnatal.jpg" width={"300px"} alt="" />
                </div>
                <div class="slider-content">
                    <h3>Prenatal</h3>
                    <p>It is a specialized form of massage for pregnant women.</p>
                    <a href="/" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/sport-massage.jpg" width={"300px"} alt="" />
                </div>
                <div class="slider-content">
                    <h3>Sports</h3>
                    <p>It involves deep tissue massage and targeted pressure.</p>
                    <a href="/" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/postpartum.jpg" width={"300px"} alt="" />
                </div>
                <div class="slider-content">
                    <h3>Postpartum</h3>
                    <p>It stimulates lymphatic circulation to aids in recovery.</p>
                    <a href="/" class="com-btn-view">Book Now</a>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/reflexology-img.jpg" width={"300px"} alt="" />
                </div>
                <div class="slider-content">
                    <h3>Reflexology</h3>
                    <p>It promotes stimulates body's healing processes.</p>
                    <a href="/" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/regular.jpg" width={"300px"} alt="" />
                </div>
                <div class="slider-content">
                    <h3>Regular lymphatic</h3>
                    <p>It reduces muscle soreness, tension, and fatigue.</p>
                    <a href="/" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/post-op.jpg" width={"300px"} alt="" />
                </div>
                <div class="slider-content">
                    <h3>Post-op lymphatic</h3>
                    <p>It promotes healing and reduces swelling after surgery. </p>
                    <a href="/" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>

 
      
      </Swiper>
        </div>
        </div> */}
        {/* <div class="why-choose">
            <div class="container">
            <h2 class="text-center experience-heading">Why to choose us</h2>
                <div class="row">
                    <div class="col-md-3">
                        <div class="why-box">
                    <div class=" why-img">
                    <img src="/assets/images/why-img-1.jpg" width={"100%"} alt="" />
                    </div>
                    <h3 class="why-heading">Seamless</h3>
                    <p class="why-text">Your well-being shouldn’t have to wait. Place your booking in seconds using our free and easy-to-use app.</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div class="why-box">
                    <div class=" why-img">
                    <img src="/assets/images/why-img-2.jpg" width={"100%"} alt="" />
                    </div>
                    <h3 class="why-heading">Convenient</h3>
                    <p class="why-text">Enjoy professional mobile spa treatments delivered to straight to your home, hotel, or office. Available 6am to midnight, 7 days a week.</p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div class="why-box">
                    <div class=" why-img">
                    <img src="/assets/images/why-img-3.jpg" width={"100%"} alt="" />
                    </div>
                    <h3 class="why-heading">Trusted</h3>
                    <p class="why-text">Book with confidence knowing all providers on Blys are personally vetted, highly skilled, and insured.</p>
                    </div>
                    </div>

                    <div class="col-md-3">
                        <div class="why-box">
                    <div class=" why-img">
                    <img src="/assets/images/why-img-4.jpg" width={"100%"} alt="" />
                    </div>
                    <h3 class="why-heading">Fair</h3>
                    <p class="why-text">When you book with Blys you’re supporting independent mobile providers. Providers earn up to 75% of the booking fee.</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div> */}
        {/* <div class="pad-block-view studios">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="title mr-btm">
                            <h2>All self-care professionals in one place</h2>
                            <p>We provide you the resources - be it the Yoga teachers or massage therapists - and the tools to find and book their sessions easily. An app that understands your fitness and wellness needs.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 container-split">
                        <div class="images-wrap">
                            <img src="/assets/images/try-it.png" id="w-node-bce4b176c38b-b176c381" sizes="(max-width: 479px) 42vw, (max-width: 767px) 26vw, (max-width: 991px) 27vw, 16vw" alt="Immage 1" />
                            <img src="/assets/images/5c9222668f811ac981de17dc_IMG_3387.gif" id="w-node-bce4b176c38c-b176c381" sizes="(max-width: 479px) 42vw, (max-width: 767px) 26vw, (max-width: 991px) 27vw, 16vw" alt="Imasdge 2" />
                            <img src="/assets/images/5c922507e8b0db17ce8c00eb_Webp.net-gifmaker.gif" alt="Imagdsdse 3" />
                            <img src="/assets/images/5c92253017f49d17259cedc9_IMG_3383-p-5001.png" id="w-node-bce4b176c38d-b176c381" sizes="(max-width: 479px) 42vw, (max-width: 767px) 26vw, (max-width: 991px) 27vw, 16vw" alt="Imageds4" />
                            <img src="/assets/images/5c9b746f94b20f95bfed865f_IMG_3381.png" alt="Imag5" />

                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        {/* <div class="pad-block-view">
            <div class="testimonials">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="title mr-btm">
                                <h2>Testimonials</h2>
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="owl-carousel owl-theme" id="testimonial">
                                <div class="item">
                                    <div class="clients-comment">
                                        <div class="name-rate">
                                            <h3>Casey K.</h3>
                                            <ul class="inline">
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <p>Absolutely love it! As an artist with part-time gigs, I find it expensive to buy memberships or class packs that expire. With affordable classes and credits that don't expire, Bigtoe was just what I needed. Now I recommend it to all my friends!</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="clients-comment">
                                        <div class="name-rate">
                                            <h3>Sam B.</h3>
                                            <ul class="inline">
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <p> Imagine going to Los Angeles and getting an in-room massage and then coming back to New York and using the same app to get a great private yoga class. These guys have spoiled me big time and I'm loving it!</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="clients-comment">
                                        <div class="name-rate">
                                            <h3>Priscilla M.</h3>
                                            <ul class="inline">
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <p>For those looking to discover their next favorite teacher, this is THE app! I'm super picky about my classes and teachers and Bigtoe always helps me find the ones that work the best for me. And with their prices and policies, you just can't go wrong!</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="clients-comment">
                                        <div class="name-rate">
                                            <h3>Markus M.</h3>
                                            <ul class="inline">
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <p>I used to think that I need to "make it" with my career and stuff before focusing on self-care. Not any more. With the Bigtoe app, I'm able to finally get what I knew I needed and at prices that work for my situation. Thank you for making my life better!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <div class="connecting-mind">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="woman-img">
                        <img src="/assets/images/connecting-woman-img.png" width={"100%"} alt="" />
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-6">
                    <div class="mind-content-main">
                        <div class="mind-content">
                            <h2>Connecting Mind, Body, and Spirit through</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo. Ligula eget dolor aenean massa cum sociis natoque.</p>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mind-text">
                                    <div class="mind-icon">
                                    <img src="/assets/images/mind-icon-1.png" width={"100px"} alt="" />
                                    </div>
                                    <div>
                                    <h3>Expert Trainer</h3>
                                    <p>Lorem ipsum dolor amet, adipiscing.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mind-text">
                                    <div class="mind-icon">
                                    <img src="/assets/images/mind-icon-2.png" width={"100px"} alt="" />
                                    </div>
                                    <div>
                                    <h3>Comfort Place</h3>
                                    <p>Lorem ipsum dolor amet, adipiscing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mind-book">
                            <a class="com-btn-view" href="/">Book Now</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <div class="pad-block">
            <div class="app-view">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-xs-12">
                            <div class="app-store-view">
                                <h2>Let's begin!</h2>
                                <div class="app-download">
                                    <a href="https://apps.apple.com/us/app/bigtoe-yoga/id1198583047">
                                        <img src="/assets/images/app-store.png" alt="app-store" />
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=fit.bigtoe.bigtoeyoga&amp;hl=en" >
                                        <img src="/assets/images/google-play.png" alt="google-play" />
                                    </a>
                                </div>
                            </div>	
                        </div>
                        <div class="col-sm-6 col-xs-12">
                            <div class="responsive-img">
                                <img src="/assets/images/app-slide.png" alt="app-slide" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <div class="srick-store visible-xs">
          <a href="https://apps.apple.com/us/app/bigtoe-yoga/id1198583047">
            <img src="/assets/images/app-store.png" alt="app-store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=fit.bigtoe.bigtoeyoga&amp;hl=en">
            <img src="/assets/images/google-play.png" alt="google-play" />
          </a>
        </div>
      </div>
    </>
  );
};

export default BecomeProvider;
