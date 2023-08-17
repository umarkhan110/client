import React from "react";

const Massage = ({massageTypeWithoutSlash}) => {
  // const services  = [
  //   {
  //     id: 1,
  //     title:"Deep Tissue",
  //     desc:"Deep tissue massage is a therapeutic technique that targets deep muscle layers and connective tissue. It uses firm pressure and specific strokes to relieve tension, improve circulation, and alleviate chronic pain. It's ideal for addressing muscle stiffness, injuries, and chronic pain conditions"
  //   },
  //   {
  //     id: 2,
  //     title:"Swedish",
  //     desc:"Swedish Massage involves the use of gentle, flowing strokes and kneading motions to promote relaxation and reduce muscle tension. The therapist uses long, gliding strokes and circular motions to warm up the muscles, increase blood circulation, and release tension. Stretching and joint movements may also be incorporated to enhance flexibility."
  //   },
  //   {
  //     id: 3,
  //     title:"Prenatal",
  //     desc:"Prenatal massage is a specialized form of massage for pregnant women. It addresses pregnancy-related discomforts, promotes relaxation, and improves circulation. It is safe and performed by trained therapists."
  //   },
  //   {
  //     id: 4,
  //     title:"Sports",
  //     desc:"Sports massage is a specialized technique for athletes and active individuals. It improves performance, prevents injuries, and aids in recovery. It involves deep tissue massage, stretching, and targeted pressure."
  //   },
  //   {
  //     id: 5,
  //     title:"Postpartum",
  //     desc:"Postpartum massage supports women after childbirth, addressing physical and emotional recovery. It reduces muscle soreness, tension, and fatigue. The sessions promote relaxation and aid in restoring the body's balance. It is a nurturing and supportive treatment for new mothers."
  //   },
  //   {
  //     id: 6,
  //     title:"Reflexology",
  //     desc:"Reflexology massage involves applying pressure to specific points on the feet, hands, or ears believed to correspond to different organs and systems in the body. It promotes relaxation, improves circulation, and stimulates the body's healing processes."
  //   },
  //   {
  //     id: 7,
  //     title:"Regular Lymphatic",
  //     desc:"Regular lymphatic massage, also known as lymphatic drainage massage, stimulates the lymphatic system using gentle, rhythmic movements. It promotes detoxification, reduces swelling, and supports immune function. It is often used for lymphedema and post-surgical recovery."
  //   },
  //   {
  //     id: 8,
  //     title:"Post-op Lymphatic",
  //     desc:"Post-op lymphatic massage promotes healing and reduces swelling after surgery. It stimulates lymphatic circulation to eliminate excess fluid and aids in faster recovery."
  //   }
  // ]
  return (
    <div class="wrapper">
      <div class="banner center-view">
        <div class="container">
          <div class="row py-5">
          <div class="col-sm-6 col-xs-12">
                        <div class="content-view fadeInLeft main-hero-content">
                            <h2>{massageTypeWithoutSlash}</h2>
                            <h6 className='d-sm-block'>Book professional massage therapists that come to you. Same day or in advance, 7 days a week.</h6>
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
