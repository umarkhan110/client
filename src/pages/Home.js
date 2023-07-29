import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Home = () => {

  return (
    <>
    <div class="wrapper" >
        
            <div class="banner center-view">
            <div class="container">
                <div class="row py-5">

                    <div class="col-sm-6 col-xs-12 ">
                        <div class="content-view fadeInLeft main-hero-content">
                            <h2>Mobile Massage – In Your Home, Hotel Or Office</h2>
                            <h3 className='d-none d-sm-block'>Book professional massage therapists that come to you. Same day or in advance, 7 days a week.</h3>
                            <a href='/book' class="com-btn-view">Book Now</a>
                            <h5 className='d-none d-sm-block'>Qualified and highly skilled providers, all carefully vetted in advance. </h5>
                            <h1>
                        <span> 
                             <a href="/" class="typewrite" data-period="500" data-type='["Massage on Demand","Private Yoga Classes"]'>
                                <span class="wrap"></span>
                              </a>
                        </span>
                            </h1>
                            {/* <h1>in seconds</h1> */}
                        </div>
                    </div>
                    <div class="col-sm-6 col-xs-12 main-video-box">
                        <video class="hero-video" autoPlay loop muted width="640" height="480">
                        <source src="/assets/images/home-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <div class="experience">
        <div class="container">
            <h2 class="text-center experience-heading">How it works</h2>

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
        </div>
        <div class="services">
        <div class="container">
            <h2 class="text-center experience-heading">Our Services</h2>
            <Swiper
 breakpoints={{
    0: {
      slidesPerView: 1,
    },
    600:{
      slidesPerView:1,
    },
    700:{
        slidesPerView:3,
      },
      2100:{
        slidesPerView:3,
      },

}}
         slidesPerView={3}
        cssMode={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper services-slider"
       
      >
        <SwiperSlide>
            <div class="slider-box">
                <div class="slider-img">
                <img  src="/assets/images/deep-massage.jpg" width={"320px"} alt="" />
                </div>
                <div class="slider-content text-left">
                    <h3>Deep Tissue</h3>
                    <p>Deep tissue massage is a therapeutic technique.</p>
                    <a href="/book" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/swedish-massage.png" width={"320px"} alt="" />
                </div>
                <div class="slider-content text-left">
                    <h3>Swedish</h3>
                    <p>It use to increase blood circulation and release tension.</p>
                    <a href="/book" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/parnatal.jpg" width={"320px"} alt="" />
                </div>
                <div class="slider-content text-left">
                    <h3>Prenatal</h3>
                    <p>It is a specialized form of massage for pregnant women.</p>
                    <a href="/book" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/sport-massage.jpg" width={"320px"} alt="" />
                </div>
                <div class="slider-content text-left">
                    <h3>Sports</h3>
                    <p>It involves deep tissue massage and targeted pressure.</p>
                    <a href="/book" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/postpartum.jpg" width={"320px"} alt="" />
                </div>
                <div class="slider-content text-left">
                    <h3>Postpartum</h3>
                    <p>It stimulates lymphatic circulation to aids in recovery.</p>
                    <a href="/book" class="com-btn-view">Book Now</a>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/reflexology-img.jpg" width={"320px"} alt="" />
                </div>
                <div class="slider-content text-left">
                    <h3>Reflexology</h3>
                    <p>It promotes stimulates body's healing processes.</p>
                    <a href="/book" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/regular.jpg" width={"320px"} alt="" />
                </div>
                <div class="slider-content text-left">
                    <h3>Regular lymphatic</h3>
                    <p>It reduces muscle soreness, tension, and fatigue.</p>
                    <a href="/book" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="slider-box">
                <div class="slider-img">
                <img class="step-img" height={"200px"} src="/assets/images/post-op.jpg" width={"320px"} alt="" />
                </div>
                <div class="slider-content text-left">
                    <h3>Post-op lymphatic</h3>
                    <p>It promotes healing and reduces swelling after surgery. </p>
                    <a href="/book" class="com-btn-view">Book Now</a>
                </div>
            </div>
        </SwiperSlide>

 
        {/* <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
        </div>
        </div>
        <div class="why-choose">
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
        </div>
        <div class="connecting-mind">
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
        </div>
            </div>
            </>
  )
}

export default Home