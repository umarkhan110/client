import React, { useEffect, useState } from "react";

const Service = ({massageTypeWithoutSlash}) => {
  const [selectedService, setSelectedService] = useState(null);
  
  useEffect(() => {
    const services  = [
      {
        id: 1,
        title:"Deep Tissue",
        desc:"Deep tissue massage is a therapeutic technique that targets deep muscle layers and connective tissue. It uses firm pressure and specific strokes to relieve tension, improve circulation, and alleviate chronic pain. It's ideal for addressing muscle stiffness, injuries, and chronic pain conditions",
        imgsrc:"/assets/images/services/deep tissue.jpg"
      },
      {
        id: 2,
        title:"Swedish",
        desc:"Swedish Massage involves the use of gentle, flowing strokes and kneading motions to promote relaxation and reduce muscle tension. The therapist uses long, gliding strokes and circular motions to warm up the muscles, increase blood circulation, and release tension. Stretching and joint movements may also be incorporated to enhance flexibility.",
        imgsrc:"/assets/images/swedish-massage.png"
      },
      {
        id: 3,
        title:"Prenatal",
        desc:"Prenatal massage is a specialized form of massage for pregnant women. It addresses pregnancy-related discomforts, promotes relaxation, and improves circulation. It is safe and performed by trained therapists.",
        imgsrc:"/assets/images/services/prenatal.jpg"
      },
      {
        id: 4,
        title:"Sports",
        desc:"Sports massage is a specialized technique for athletes and active individuals. It improves performance, prevents injuries, and aids in recovery. It involves deep tissue massage, stretching, and targeted pressure.",
        imgsrc:"/assets/images/services/sports.jpg"
      },
      {
        id: 5,
        title:"Postpartum",
        desc:"Postpartum massage supports women after childbirth, addressing physical and emotional recovery. It reduces muscle soreness, tension, and fatigue. The sessions promote relaxation and aid in restoring the body's balance. It is a nurturing and supportive treatment for new mothers.",
        imgsrc:"/assets/images/services/post partum 2.jpg" 
      },
      {
        id: 6,
        title:"Reflexology",
        desc:"Reflexology massage involves applying pressure to specific points on the feet, hands, or ears believed to correspond to different organs and systems in the body. It promotes relaxation, improves circulation, and stimulates the body's healing processes.",
        imgsrc:"/assets/images/services/reflexology.jpeg"
      },
      {
        id: 7,
        title:"Lymphatic",
        desc:"Regular lymphatic massage, also known as lymphatic drainage massage, stimulates the lymphatic system using gentle, rhythmic movements. It promotes detoxification, reduces swelling, and supports immune function. It is often used for lymphedema and post-surgical recovery.",
        imgsrc:"/assets/images/services/lymphatic.jpg"
      },
      {
        id: 8,
        title:"Post-OP Lymphatic",
        desc:"Post-op lymphatic massage promotes healing and reduces swelling after surgery. It stimulates lymphatic circulation to eliminate excess fluid and aids in faster recovery.",
        imgsrc:"/assets/images/post-op.jpg"
      }
    ]
    services.map(service => {
      if (service.title === massageTypeWithoutSlash) {
        setSelectedService(service);
      }
      return null;
    });
  
    
  }, [massageTypeWithoutSlash])

  return (
    <div class="wrapper">
      <div class="banner center-view">
        <div class="container">
          <div class="row py-5">
          <div class="col-sm-6 col-xs-12">
                        <div class="content-view fadeInLeft main-hero-content">
                            <h2>{selectedService?.title} Massage</h2>
                            <p className='d-sm-block'>{selectedService?.desc}</p>
                            <a href='/book' class="com-btn-view">Book Now</a>
                        </div>
                    </div>
            <div class="col-sm-6 col-xs-12 main-video-box">
              <img src={selectedService?.imgsrc} alt={selectedService?.title} width="640"
                height="480" class="hero-video"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
