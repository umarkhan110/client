import React from "react";

const Massage = ({massageTypeWithoutSlash}) => {
  console.log(massageTypeWithoutSlash)
  return (
    <div class="wrapper">
      <div class="banner center-view">
        <div class="container">
          <div class="row py-5">
          <div class="col-sm-6 col-xs-12">
                        <div class="content-view fadeInLeft main-hero-content">
                            <h2>{massageTypeWithoutSlash}</h2>
                            <h6 className='d-none d-sm-block'>Book professional massage therapists that come to you. Same day or in advance, 7 days a week.</h6>
                            <a href='/book' class="com-btn-view">Book Now</a>
                            <p className='d-none d-sm-block mt-2'>Qualified and highly skilled providers, all carefully vetted in advance. </p>
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
              <video
                class="hero-video"
                autoPlay
                loop
                muted
                width="640"
                height="480"
              >
                <source src="/assets/images/home-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Massage;
